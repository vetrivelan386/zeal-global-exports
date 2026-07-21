"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { productCategories } from "@/lib/products";
import { countries } from "@/lib/countries";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const formData = new FormData(form);
    const raw = Object.fromEntries(formData.entries()) as Record<string, string>;

    const payload = {
      firstName: raw.firstName,
      lastName: raw.lastName,
      company: raw.company || "Not provided",
      email: raw.email,
      phone: `${raw.phoneCode}${raw.phone}`,
      country: raw.country,
      product: raw.product,
      message: raw.message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset()
    } catch(err){
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md border border-emerald-100 bg-emerald-50 p-10 text-center">
        <CheckCircle2 size={36} className="text-emerald-600" />
        <p className="font-display text-lg font-semibold text-navy-900">Inquiry received</p>
        <p className="max-w-sm text-sm text-muted">
          Thank you — our export team typically responds within one business day. We'll reach out
          on the email or WhatsApp number you provided.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-emerald-700 hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-navy-900">
          First Name *
        </label>
        <input
          id="firstName"
          name="firstName"
          required
          className="w-full rounded-sm border border-navy-100 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          placeholder="Ravi"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-navy-900">
          Last Name *
        </label>
        <input
          id="lastName"
          name="lastName"
          required
          className="w-full rounded-sm border border-navy-100 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          placeholder="Kumar"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-900">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          className="w-full rounded-sm border border-navy-100 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          placeholder="Kumar Traders"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-sm border border-navy-100 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          placeholder="ravi.kumar@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900">
          Phone / WhatsApp *
        </label>
        <div className="flex gap-2">
          <select
            id="phoneCode"
            name="phoneCode"
            defaultValue="+91"
            aria-label="Country code"
            className="w-28 shrink-0 rounded-sm border border-navy-100 bg-white px-2 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          >
            {countries.map((c) => (
              <option key={`${c.name}-${c.dialCode}`} value={c.dialCode}>
                {c.dialCode} {c.name}
              </option>
            ))}
          </select>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-navy-100 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="98765 43210"
          />
        </div>
      </div>
      <div>
        <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-navy-900">
          Country *
        </label>
        <select
          id="country"
          name="country"
          required
          defaultValue=""
          className="w-full rounded-sm border border-navy-100 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
        >
          <option value="" disabled>
            Select your country
          </option>
          {countries.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="product" className="mb-1.5 block text-sm font-medium text-navy-900">
          Product of Interest *
        </label>
        <select
          id="product"
          name="product"
          required
          defaultValue=""
          className="w-full rounded-sm border border-navy-100 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
        >
          <option value="" disabled>
            Select a product category
          </option>
          {productCategories.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Other">Other / Multiple Categories</option>
        </select>
      </div>
      <div className="hidden sm:block" aria-hidden="true" />

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
          Requirement Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-sm border border-navy-100 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          placeholder="Quantity required, target price, destination port, and any certifications needed."
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
          {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Something went wrong. Please try again or email us directly at export@zealglobalexports.com.
          </p>
        )}
      </div>
    </form>
  );
}