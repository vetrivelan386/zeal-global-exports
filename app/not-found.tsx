import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section flex flex-col items-center justify-center bg-white py-32 text-center">
      <Compass size={40} className="text-emerald-600" strokeWidth={1.5} />
      <h1 className="mt-5 font-display text-3xl font-semibold text-navy-900">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        The page you're looking for may have moved. Try one of the links below, or head back to
        the homepage.
      </p>
      <div className="mt-7 flex gap-4">
        <Link href="/" className="btn-outline-dark">
          Back to Home
        </Link>
        <Link href="/products" className="btn-outline-dark">
          View Products
        </Link>
      </div>
    </section>
  );
}
