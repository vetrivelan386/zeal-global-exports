import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import TradeRouteMap from "@/components/TradeRouteMap";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:34px_34px] opacity-40" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-700/20 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow text-emerald-300">
            <span className="h-px w-6 bg-emerald-400" /> Merchant Exporter · Chennai, India
          </span>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Delivering Premium Indian Products to Global Markets
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            A Chennai-based merchant exporter building trusted trade relationships for
            Pharmaceuticals, Nutraceuticals, Rice, Coconut Products, Spices, and Textiles.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn-secondary">
              View Products
            </Link>
          </div>
          <a
            href="/catalogue/zeal-global-exports-catalogue.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-emerald-300"
          >
            <FileText size={15} /> Download Product Catalogue (PDF)
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TradeRouteMap />
        </div>
      </div>
    </section>
  );
}
