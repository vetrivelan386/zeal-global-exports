"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
      <div>
        <p className="font-display text-base font-semibold text-white">
          Trade updates, straight to your inbox
        </p>
        <p className="mt-1 text-sm text-white/50">
          New product lines, certification updates, and shipping schedule notes. No spam.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-emerald-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex shrink-0 items-center gap-1.5 rounded-sm bg-emerald px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600 disabled:opacity-70"
        >
          {status === "submitting" ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
          {status === "sent" ? "Subscribed" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-300 sm:absolute">
          Something went wrong — please try again.
        </p>
      )}
    </div>
  );
}
