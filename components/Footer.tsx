import Link from "next/link";
import { Package, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { productCategories } from "@/lib/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-emerald text-white">
              <Package size={18} strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-semibold">
              Zeal Global <span className="text-emerald-300">Exports</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            A Chennai-based merchant exporter working toward supplying pharmaceuticals,
            nutraceuticals, rice, coconut products, spices, and textiles to overseas buyers.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/60 transition-colors hover:border-emerald-400 hover:text-emerald-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-white/40">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/quality-assurance" className="hover:text-white">Quality & Process</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-white/40">Product Categories</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {productCategories.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-white/40">Get in Touch</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              <a href="mailto:export@zealglobalexports.com" className="hover:text-white">
                export@zealglobalexports.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              <a href="tel:+919345624866" className="hover:text-white">
                +91 93456 24866
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-emerald-400" />
              <span>319, 12th Street, Sharma Nagar, Vyasarpadi, Chennai - 600039, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/40 sm:flex-row">
        <p>© {year} Zeal Global Exports. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white/70">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
