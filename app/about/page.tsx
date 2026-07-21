import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Globe2, ShieldCheck, Users, UserRound, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import Milestones from "@/components/Milestones";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us & Certifications",
  description:
    "About Zeal Global Exports — a Chennai-based merchant exporter building trade relationships for pharmaceuticals, rice, spices, coconut products, nutraceuticals, and textiles — and our current certifications.",
};

const values = [
  { icon: ShieldCheck, title: "Quality First", description: "Every product we take to market is expected to pass destination-market lab standards before it ships." },
  { icon: HeartHandshake, title: "Transparent Trade", description: "Clear pricing, honest lead times, and documentation that matches what was agreed — no overstating what we can do." },
  { icon: Globe2, title: "Global Perspective", description: "We structure every shipment around the buyer's customs and regulatory environment, not just ours." },
  { icon: Users, title: "Built on Relationships", description: "We'd rather grow slowly with buyers who trust us than promise more than we can deliver." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="container-page">
          <span className="eyebrow text-emerald-300">
            <span className="h-px w-6 bg-emerald-400" /> About Zeal Global Exports
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white sm:text-5xl">
            A new merchant exporter, built on honest documentation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Zeal Global Exports is a Chennai-based merchant exporter, registered under GST and
            Import Export Code (IEC), working to supply pharmaceuticals, nutraceuticals, rice,
            coconut products, spices, and textiles to overseas buyers.
          </p>
        </div>
      </section>

      <StatsBar />

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="Starting from one real export, not a claimed history"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Zeal Global Exports was registered in Chennai as a merchant exporter by proprietor
              Karthick Raja Muthumanickam. Our first hands-on experience in export came from an onion
              shipment completed in partnership with another exporting team — the experience
              that convinced us to build an independent export business.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We're upfront that we're early in this journey. We don't yet have a long shipment
              history or a wide certification portfolio — what we do have is GST and IEC
              registration in place, and a plan to build sourcing relationships across six
              product categories the right way: verified suppliers, honest documentation, and
              certifications added as each category is ready for export.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-md border border-navy-100 p-6 sm:col-span-2">
              <UserRound size={26} className="text-emerald-600" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Proprietor</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="font-medium text-navy-900">Karthick Raja Muthumanickam</span> —
                Proprietor, Zeal Global Exports.
              </p>
            </div>
            <div className="rounded-md border border-navy-100 p-6">
              <Target size={26} className="text-emerald-600" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                To become a dependable point of contact for overseas buyers sourcing Indian
                products — backed by honest documentation from our very first shipment onward.
              </p>
            </div>
            <div className="rounded-md border border-navy-100 p-6">
              <Eye size={26} className="text-emerald-600" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                To grow into a trusted multi-category exporter, one verified shipment and one
                honest buyer relationship at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Our Journey" title="Where we're starting from" align="center" />
          <div className="mt-12">
            <Milestones />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Core Values" title="The principles we follow in every deal" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-md border border-navy-100 bg-white p-6 text-center">
                <v.icon size={26} className="mx-auto text-emerald-600" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Registered Compliance"
            title="Our certifications"
            description="As a newly registered merchant exporter, we currently hold GST and Import Export Code (IEC) registration. Product-specific certifications (FSSAI, APEDA, ISO, Spices Board, etc.) will be added as we onboard manufacturing and sourcing partners for each category. Copies of current registrations are available on request."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.code} className="rounded-md border border-navy-100 bg-white p-6">
                <div className="flex items-center justify-between">
                  <BadgeCheck size={26} className="text-emerald-600" strokeWidth={1.5} />
                  <span className="font-mono text-xs uppercase tracking-wider text-gold-500">
                    {c.code}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs text-muted">{c.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
