import Link from "next/link";
import { ArrowUpRight, Pill, Leaf, Wheat, Droplet, FlaskConical, Shirt } from "lucide-react";
import type { ProductCategory } from "@/lib/products";

const icons: Record<string, React.ElementType> = {
  pharmaceuticals: Pill,
  nutraceuticals: FlaskConical,
  rice: Wheat,
  "coconut-products": Droplet,
  spices: Leaf,
  textiles: Shirt,
};

export default function ProductCard({ product }: { product: ProductCategory }) {
  const Icon = icons[product.slug] ?? Leaf;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-md border border-navy-100 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5"
    >
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${product.heroGradient}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:22px_22px] opacity-30" />
        <Icon size={52} strokeWidth={1.25} className="relative text-white/90" />
        <span className="absolute right-3 top-3 rounded-sm bg-black/25 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80">
          HS {product.hsCode}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-navy-900">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
          Explore range
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
