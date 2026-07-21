import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// One place to control your live site's URL. Set NEXT_PUBLIC_SITE_URL in your hosting
// provider's environment variables once you know it (e.g. https://zeal-global-exports.vercel.app,
// or your own domain later) — everything below updates automatically from this single value.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zeal-global-exports.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zeal Global Exports | Merchant Exporter — Pharma, Rice, Spices, Coconut & Textiles",
    template: "%s | Zeal Global Exports",
  },
  description:
    "Zeal Global Exports is a Chennai-based merchant exporter building trade relationships for pharmaceuticals, nutraceuticals, basmati & non-basmati rice, coconut products, spices, and textiles.",
  keywords: [
    "Indian Exporter",
    "Merchant Exporter Chennai",
    "Export Company India",
    "Pharmaceutical Exporter",
    "Nutraceutical Exporter",
    "Rice Exporter",
    "Coconut Products Exporter",
    "Spice Exporter",
    "Textile Exporter",
    "Indian Wholesale Exporter",
  ],
  openGraph: {
    title: "Zeal Global Exports | Delivering Premium Indian Products to Global Markets",
    description:
      "Merchant exporter based in Chennai, India, for Pharmaceuticals, Nutraceuticals, Rice, Coconut Products, Spices, and Textiles.",
    url: SITE_URL,
    siteName: "Zeal Global Exports",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeal Global Exports",
    description: "Delivering Premium Indian Products to Global Markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
