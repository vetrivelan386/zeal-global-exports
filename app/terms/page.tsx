import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Zeal Global Exports website and trading with us.",
};

export default function TermsPage() {
  return (
    <section className="section bg-white">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/80">
          <p>
            These terms govern your use of the Zeal Global Exports website. Placeholder content —
            replace with terms reviewed by your legal counsel, covering quotation validity,
            Incoterms used, payment terms, and dispute resolution, before publishing.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">Quotations & Orders</h2>
          <p>
            Quotations shared via this website or by our sales team are valid for the period
            stated in the quotation and are subject to product availability at time of order
            confirmation.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">Website Use</h2>
          <p>
            Content on this website, including product images, specifications, and copy, is the
            property of Zeal Global Exports and may not be reproduced without permission.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">Governing Law</h2>
          <p>
            These terms are governed by the laws of India, with courts in Chennai, Tamil Nadu
            having exclusive jurisdiction over any disputes.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:info@zealglobalexports.com" className="text-emerald-700 hover:underline">
              info@zealglobalexports.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
