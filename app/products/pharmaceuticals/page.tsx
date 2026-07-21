import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductBySlug } from "@/lib/products";

const product = getProductBySlug("pharmaceuticals")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
};

export default function Page() {
  return <ProductDetailTemplate product={product} />;
}
