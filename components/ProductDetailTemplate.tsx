import Link from "next/link";
import { CheckCircle2, Package, Award, FileText, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { ProductCategory } from "@/lib/products";
import { productCategories } from "@/lib/products";

export default function ProductDetailTemplate({ product }: { product: ProductCategory }) {
  const others = productCategories.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className={`bg-gradient-to-br ${product.heroGradient} py-20 sm:py-24`}>
        <div className="container-page">
          <span className="eyebrow text-white/70">
            <span className="h-px w-6 bg-white/50" /> Product Category · HS {product.hsCode}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{product.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a href="/catalogue/zeal-global-exports-catalogue.pdf" download className="btn-secondary">
              <FileText size={16} /> Download Catalogue
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Overview" title={`About our ${product.shortName.toLowerCase()} exports`} />
            <p className="mt-5 text-sm leading-relaxed text-muted">{product.description}</p>

            <h3 className="mt-10 font-display text-lg font-semibold text-navy-900">
              Product Range
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-lg font-semibold text-navy-900">
              Packaging Options
            </h3>
            <ul className="mt-4 space-y-2.5">
              {product.packaging.map((pack) => (
                <li key={pack} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <Package size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                  {pack}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-md border border-navy-100 p-6">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-navy-900">
                Specification Sheet
              </h4>
              <dl className="mt-4 space-y-3">
                {product.specSheet.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 border-b border-navy-50 pb-2.5 text-sm">
                    <dt className="text-muted">{s.label}</dt>
                    <dd className="text-right font-mono text-xs text-navy-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-md border border-navy-100 p-6">
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-navy-900">
                <Award size={16} className="text-emerald-600" /> Certifications
              </h4>
              <ul className="mt-4 space-y-2">
                {product.certifications.map((c) => (
                  <li key={c} className="label-tag mr-2 mb-2 inline-block">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md bg-navy-900 p-6">
              <p className="font-display text-base font-semibold text-white">
                Ready to place an inquiry?
              </p>
              <p className="mt-2 text-sm text-white/60">
                Share your quantity and destination port for a formal quotation within 24 hours.
              </p>
              <Link href="/contact" className="btn-primary mt-4 w-full">
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Explore More" title="Other product categories" />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-md border border-navy-100 bg-white p-6 transition-colors hover:border-emerald-300"
              >
                <p className="font-display text-base font-semibold text-navy-900">{p.name}</p>
                <p className="mt-2 text-sm text-muted">{p.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                  Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
