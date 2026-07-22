import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Must be a domain you've verified in Resend (Domains tab) before this will send to arbitrary
// recipients. Until then, Resend only allows sending to your own account email — fine for testing.
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL || "Zeal Global Exports <onboarding@resend.dev>";
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL || "info@zealglobalexports.com";

// Google Apps Script Web App URL — see google-apps-script/Code.gs for setup instructions.
const SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function saveToGoogleSheet(data: Record<string, string>) {
  if (!SHEET_WEBHOOK_URL) {
    console.warn(
      "GOOGLE_SHEET_WEBHOOK_URL is not set — inquiry was not saved to a sheet. See .env.example."
    );
    return { saved: false };
  }

  const res = await fetch(SHEET_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    // Apps Script web apps sometimes redirect once before returning the real response.
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`Google Sheet webhook responded with status ${res.status}`);
  }

  return { saved: true };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, company, email, phone, country, product, message } = body ?? {};

    if (!firstName || !lastName || !email || !phone || !country || !product || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const name = `${firstName} ${lastName}`.trim();
    const submittedAt = new Date().toISOString();

    // Always log server-side as a fallback record, even if email/sheet sending is configured.
    console.log("New export inquiry received:", {
      name, company, email, phone, country, product, message, submittedAt,
    });

    const internalHtml = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1E2A38;">
        <h2 style="color: #0A1F3D;">New Export Inquiry</h2>
        <table cellpadding="6" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone / WhatsApp</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
          <tr><td><strong>Product of Interest</strong></td><td>${escapeHtml(product)}</td></tr>
        </table>
        <p><strong>Requirement Details:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        <p style="color: #5B6B7A; font-size: 12px;">Submitted ${submittedAt}</p>
      </div>
    `;

    const tasks: Promise<unknown>[] = [
      saveToGoogleSheet({ name, company, email, phone, country, product, message }),
    ];

    if (resend) {
      tasks.push(
        // 1. Notify the internal export team
        resend.emails.send({
          from: FROM_ADDRESS,
          to: TO_ADDRESS,
          replyTo: email,
          subject: `New Inquiry: ${product} — ${company}`,
          html: internalHtml,
        }),
        // 2. Auto-confirmation back to the buyer
        resend.emails.send({
          from: FROM_ADDRESS,
          to: email,
          subject: "We've received your inquiry — Zeal Global Exports",
          html: `
            <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1E2A38;">
              <p>Hi ${escapeHtml(firstName)},</p>
              <p>Thank you for your inquiry about <strong>${escapeHtml(product)}</strong>. Our export
              team typically responds within one business day with pricing and lead time.</p>
              <p>If your requirement is urgent, you can also reach us on WhatsApp or by replying
              directly to this email.</p>
              <p>— Zeal Global Exports</p>
            </div>
          `,
        })
      );
    } else {
      console.warn(
        "RESEND_API_KEY is not set — inquiry was logged but no email was sent. See .env.example."
      );
    }

    const results = await Promise.allSettled(tasks);
    const failures = results.filter((r) => r.status === "rejected");
    if (failures.length > 0) {
      console.error("One or more inquiry delivery steps failed:", failures);
    }

    return NextResponse.json({
      success: true,
      savedToSheet: results[0].status === "fulfilled",
      emailed: resend ? failures.length === 0 : false,
    });
  } catch (err) {
    console.error("Contact form submission error:", err);
    return NextResponse.json(
      { error: "Unable to process inquiry." },
      { status: 500 }
    );
  }
}