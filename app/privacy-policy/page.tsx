import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Zeal Global Exports' privacy policy covering data collection, use, and protection.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section bg-white">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/80">
          <p>
            Zeal Global Exports ("we", "us", "our") respects your privacy. This policy
            explains what information we collect through this website, how we use it, and the
            choices available to you. Replace this placeholder text with policy language
            reviewed by your legal counsel before publishing.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">Information We Collect</h2>
          <p>
            We collect information you submit through our inquiry and newsletter forms, including
            your name, company, email address, phone number, country, and message content.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">How We Use Information</h2>
          <p>
            Submitted information is used to respond to product inquiries, prepare quotations,
            and — where you've opted in — send trade updates. We do not sell your data to third
            parties.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">Data Retention & Security</h2>
          <p>
            We retain inquiry records for as long as needed to service the relationship and meet
            trade documentation requirements, and apply reasonable technical safeguards to
            protect stored data.
          </p>
          <h2 className="font-display text-lg font-semibold text-navy-900">Contact</h2>
          <p>
            For questions about this policy or to request data deletion, contact us at{" "}
            <a href="mailto:export@zealglobalexports.com" className="text-emerald-700 hover:underline">
              export@zealglobalexports.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
