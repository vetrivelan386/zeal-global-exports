"use client";

import { MessageCircle } from "lucide-react";

// Replace with your business WhatsApp number in international format, no leading +
const WHATSAPP_NUMBER = "919345624866";
const DEFAULT_MESSAGE = "Hello, I'd like to enquire about your export products.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle size={26} className="relative fill-white text-[#25D366]" strokeWidth={0} />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-navy-900 px-3 py-1.5 text-xs font-medium text-white group-hover:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
