import Link from "next/link";
import { ShieldCheck, Globe2, Clock, Award, ArrowRight, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Milestones from "@/components/Milestones";
import ContactForm from "@/components/ContactForm";
import { productCategories } from "@/lib/products";
import { destinations } from "@/lib/content";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Quality-Assured Sourcing",
    description: "Every batch is lab-tested and inspected before packing, against destination-market spec.",
  },
  {
    icon: Globe2,
    title: "Focused on Six Markets",
    description: "Actively building buyer relationships across the UAE, Middle East, Europe, Africa, and Southeast Asia.",
  },
  {
    icon: Clock,
    title: "On-Time Documentation",
    description: "Certificates of origin, invoices, and quality certs prepared in step with your LC terms.",
  },
  {
    icon: Award,
    title: "Registered & Compliant",
    description: "GST and IEC registered from day one, with product-specific certifications added as we grow.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* Company highlights */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for buyers who can't afford supply-chain surprises"
            description="From sourcing through customs clearance, every step is documented, tested, and tracked — so your import process stays predictable."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-md border border-navy-100 p-6">
                <h.icon size={26} className="text-emerald-600" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Product Portfolio"
              title="Six categories, one dependable supply chain"
              description="Every category below ships with full documentation, lab reports, and packaging matched to your destination market."
            />
            <Link
              href="/products"
              className="mb-1 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              View all products <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Global export destinations */}
      <section className="section bg-navy-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="Global Reach"
            title="Regions we're building toward"
            description="These are the markets we're focused on as we grow our buyer network — not yet a completed trade lane in every region."
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {destinations.map((d) => (
              <div
                key={d.region}
                className="card-glass flex flex-col gap-2 p-5"
              >
                <MapPin size={18} className="text-emerald-300" />
                <p className="font-display text-sm font-semibold text-white">{d.region}</p>
                <p className="text-xs leading-relaxed text-white/55">{d.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Journey"
            title="Where we're starting from"
            align="center"
          />
          <div className="mt-12">
            <Milestones />
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request a quote today"
              description="Tell us your product, quantity, and destination port. Our export team responds within one business day with pricing and lead time."
            />
          </div>
          <div className="rounded-md border border-navy-100 bg-white p-7 lg:col-span-3 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
