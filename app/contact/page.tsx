import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zeal Global Exports for pricing and product enquiries on pharmaceuticals, rice, spices, coconut products, nutraceuticals, and textiles.",
};

const details = [
  { icon: Mail, label: "Business Email", value: "info@zealglobalexports.com", href: "mailto:info@zealglobalexports.com" },
  { icon: Phone, label: "Phone", value: "+91 93456 24866", href: "tel:+919345624866" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 93456 24866", href: "https://wa.me/919345624866" },
  { icon: MapPin, label: "Office", value: "319, 12th Street, Sharma Nagar, Vyasarpadi, Chennai - 600039, Tamil Nadu, India" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat, 9:30 AM – 6:30 PM Indian Standard Time" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="container-page">
          <span className="eyebrow text-emerald-300">
            <span className="h-px w-6 bg-emerald-400" /> Contact Us
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white sm:text-5xl">
            Let's talk about your next shipment
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Share your product, quantity, and destination port — our export team responds within
            one business day with pricing and lead time.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Reach Us Directly" title="Contact details" />
            <ul className="mt-8 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-3.5">
                  <d.icon size={20} className="mt-0.5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm font-medium text-navy-900 hover:text-emerald-700">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-navy-900">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-md border border-navy-100">
              <iframe
                title="Zeal Global Exports office location"
                src="https://www.google.com/maps?q=Sharma+Nagar,+Vyasarpadi,+Chennai,+Tamil+Nadu&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-md border border-navy-100 bg-white p-7 lg:col-span-3 sm:p-9">
            <h2 className="font-display text-xl font-semibold text-navy-900">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Fields marked * are required so we can prepare an accurate quotation.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
