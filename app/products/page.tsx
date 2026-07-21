import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Zeal Global Exports' product range: Pharmaceuticals, Nutraceuticals, Rice, Coconut Products, Spices, and Textiles — sourced for export from India.",
};

export default function ProductsPage() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Product Portfolio"
          title="Six categories, sourced and certified for export"
          description="Each category page includes packaging options, certifications, and specification sheets to help you evaluate fit before you request a quote."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}