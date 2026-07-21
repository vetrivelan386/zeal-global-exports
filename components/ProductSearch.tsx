"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/lib/products";

export default function ProductSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return productCategories;
    return productCategories.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.items.some((item) => item.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div>
      <div className="relative max-w-md">
        <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, e.g. 'basmati' or 'turmeric'"
          className="w-full rounded-sm border border-navy-100 py-3 pl-11 pr-4 text-sm focus:border-emerald-500 focus:outline-none"
          aria-label="Search products"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-muted">
          No products matched "{query}". Try a different term, or{" "}
          <a href="/contact" className="text-emerald-700 hover:underline">
            contact us directly
          </a>{" "}
          about your requirement.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
