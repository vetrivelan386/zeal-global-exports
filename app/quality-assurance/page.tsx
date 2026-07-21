import type { Metadata } from "next";
import { FlaskConical, ClipboardCheck, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { exportProcessSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality Assurance & Export Process",
  description:
    "Zeal Global Exports' quality control process and step-by-step export workflow: from supplier selection and lab testing through packaging, documentation, shipping, and delivery.",
};

const pillars = [
  {
    icon: FlaskConical,
    title: "Quality Control Process",
    description:
      "Every incoming batch is sampled and tested at accredited third-party labs before it enters our facility. Results are logged against destination-market thresholds (pesticide residue, aflatoxin, heavy metals, microbial counts) before approval.",
  },
  {
    icon: ClipboardCheck,
    title: "Product Inspection",
    description:
      "A physical inspection covers grading, moisture content, foreign matter, and visual defects. Pre-shipment inspection reports are shared with buyers on request, ahead of container loading.",
  },
  {
    icon: PackageCheck,
    title: "Packaging Standards",
    description:
      "Packaging materials are matched to product type and transit duration — moisture barriers for spices and coconut products, cold-chain liners for pharmaceuticals, and tamper-evident seals across all categories.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Handling",
    description:
      "Warehousing and packing areas follow HACCP-aligned hygiene protocols: controlled access, pest management, and staff hygiene training, audited quarterly.",
  },
  {
    icon: ShieldCheck,
    title: "International Export Compliance",
    description:
      "Documentation and labeling are prepared to match the regulatory framework of the destination country, from GCC conformity marks to EU food safety labeling requirements.",
  },
];

export default function QualityAssuranceAndProcessPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="container-page">
          <span className="eyebrow text-emerald-300">
            <span className="h-px w-6 bg-emerald-400" /> Quality Assurance & Export Process
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white sm:text-5xl">
            Every container is tested — and every step is tracked
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Quality control isn't a final checkpoint for us — it's built into sourcing,
            inspection, packaging, and documentation at every stage, from supplier to your port.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Our Process" title="Five pillars of quality control" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-5 rounded-md border border-navy-100 p-6">
                <p.icon size={28} className="mt-1 shrink-0 text-emerald-600" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="The Workflow" title="Six stages, start to finish" />
          <div className="relative mt-14">
            <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-navy-100 sm:block" />
            <div className="space-y-10">
              {exportProcessSteps.map((s) => (
                <div key={s.step} className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-mono text-sm font-semibold text-white">
                    {s.step}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-lg font-semibold text-navy-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
