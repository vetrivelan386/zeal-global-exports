"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Package } from "lucide-react";
import { productCategories } from "@/lib/products";

const navLinks = [
  { href: "/about", label: "About Us" },
];

const navLinksAfterProducts = [
  { href: "/quality-assurance", label: "Quality & Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-navy-900/95 shadow-md backdrop-blur-sm" : "bg-navy-900"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-emerald text-white">
            <Package size={18} strokeWidth={2.25} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Zeal Global <span className="text-emerald-300">Exports</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm font-medium text-white/85 transition-colors hover:text-white"
              onClick={() => setProductsOpen(false)}
            >
              Products
              <ChevronDown size={15} />
            </Link>
            {productsOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-sm border border-white/10 bg-navy-800 p-2 shadow-xl">
                  {productCategories.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block rounded-sm px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                      onClick={() => setProductsOpen(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="mt-1 block rounded-sm border-t border-white/10 px-3 py-2.5 text-sm font-medium text-emerald-300 hover:text-emerald-200"
                    onClick={() => setProductsOpen(false)}
                  >
                    View All Products →
                  </Link>
                </div>
              </div>
            )}
          </div>
          {navLinksAfterProducts.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-secondary !py-2.5 !text-xs">
            Request a Quote
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-sm px-1 py-2 text-sm text-white/85"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <p className="px-1 pb-1 pt-2 font-mono text-xs uppercase tracking-wider text-white/40">
              Products
            </p>
            <Link
              href="/products"
              className="rounded-sm px-1 py-2 text-sm font-medium text-emerald-300"
              onClick={() => setMobileOpen(false)}
            >
              View All Products
            </Link>
            {productCategories.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="rounded-sm px-1 py-2 text-sm text-white/85"
                onClick={() => setMobileOpen(false)}
              >
                {p.name}
              </Link>
            ))}
            <div className="my-2 h-px bg-white/10" />
            {navLinksAfterProducts.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-sm px-1 py-2 text-sm text-white/85"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-3"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
