import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    console.log("Newsletter signup:", email, new Date().toISOString());

    if (!resend || !AUDIENCE_ID) {
      console.warn(
        "RESEND_API_KEY or RESEND_AUDIENCE_ID not set — signup logged only. See .env.example."
      );
      return NextResponse.json({ success: true, subscribed: false });
    }

    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    return NextResponse.json({ success: true, subscribed: true });
  } catch (err) {
    console.error("Newsletter signup error:", err);
    return NextResponse.json({ error: "Unable to subscribe." }, { status: 500 });
  }
}
