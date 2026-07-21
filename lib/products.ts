export type ProductCategory = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroGradient: string;
  hsCode: string;
  items: string[];
  certifications: string[];
  packaging: string[];
  specSheet: { label: string; value: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    shortName: "Pharma",
    tagline: "Aiming to source WHO-GMP aligned formulations as we build manufacturing partnerships.",
    description:
      "We're building sourcing relationships for generic formulations, tablets, capsules, and injectables with WHO-GMP compliant manufacturing units, with the goal of full regulatory documentation for regulated and semi-regulated markets.",
    heroGradient: "from-navy-800 to-emerald-800",
    hsCode: "3004",
    items: [
      "Generic Tablets & Capsules",
      "Oral Liquids & Syrups",
      "Injectables (Cold Chain)",
      "Ayurvedic & Herbal Formulations",
      "Ointments & Topical Preparations",
      "APIs (Active Pharmaceutical Ingredients)",
    ],
    certifications: ["GST", "IEC", "Certificate for this product provided upon order confirmation"],
    packaging: ["Blister Strips", "Export Cartons with Cold Chain Liners", "Bulk Drums for API"],
    specSheet: [
      { label: "HS Code", value: "3004.xx" },
      { label: "Shelf Life", value: "24–36 months" },
      { label: "Storage", value: "15–25°C, cold chain on request" },
      { label: "MOQ", value: "1 x 20ft container equivalent" },
    ],
  },
  {
    slug: "nutraceuticals",
    name: "Nutraceuticals",
    shortName: "Nutra",
    tagline: "Herbal extracts and health supplements, sourced with global compliance in mind.",
    description:
      "Our planned nutraceutical range covers herbal supplements, protein blends, and functional health products, with sourcing from GMP-certified facilities and private-label options as we onboard manufacturing partners.",
    heroGradient: "from-emerald-800 to-navy-700",
    hsCode: "2106",
    items: [
      "Herbal Extract Capsules",
      "Multivitamin & Mineral Blends",
      "Protein & Wellness Powders",
      "Immunity Support Supplements",
      "Ayurvedic Health Tonics",
      "Private Label Formulations",
    ],
    certifications: ["GST", "IEC", "We arrange the relevant product certificate once your order is confirmed"],
    packaging: ["HDPE Bottles", "Sachets & Strips", "Bulk Powder Drums"],
    specSheet: [
      { label: "HS Code", value: "2106.90" },
      { label: "Shelf Life", value: "18–24 months" },
      { label: "Storage", value: "Cool & dry, below 30°C" },
      { label: "MOQ", value: "500 kg / negotiable for private label" },
    ],
  },
  {
    slug: "rice",
    name: "Rice",
    shortName: "Rice",
    tagline: "Basmati and non-basmati rice, sourced and graded to destination spec.",
    description:
      "We're working to supply premium long-grain Basmati and high-volume non-basmati rice varieties, sourced from mill partners in Punjab, Haryana, and Andhra Pradesh, with container-load and break-bulk capability.",
    heroGradient: "from-navy-800 to-gold-500",
    hsCode: "1006",
    items: [
      "1121 Basmati Rice (Steam & Raw)",
      "1509 Basmati Rice",
      "Traditional Basmati (Pusa, Sharbati)",
      "IR64 Non-Basmati Rice",
      "Sona Masoori Rice",
      "Parboiled Rice",
    ],
    certifications: ["GST", "IEC", "Product certificate issued at the time of order confirmation"],
    packaging: ["5/10/25/50 kg PP & Jute Bags", "Vacuum Packs", "Bulk in 20ft/40ft Containers"],
    specSheet: [
      { label: "HS Code", value: "1006.30" },
      { label: "Container Capacity", value: "27 MT (20ft) / 28 MT (40ft)" },
      { label: "Broken %", value: "1% – 5% (grade dependent)" },
      { label: "MOQ", value: "1 x 20ft container" },
    ],
  },
  {
    slug: "coconut-products",
    name: "Coconut & Coconut Products",
    shortName: "Coconut",
    tagline: "Fresh coconut, oil, and value-added coconut derivatives from Kerala & Tamil Nadu.",
    description:
      "From fresh tender coconuts to virgin coconut oil, desiccated coconut, and coir-based fiber products, we're building sourcing relationships across South India's coconut belt to cover the full coconut value chain.",
    heroGradient: "from-emerald-700 to-emerald-900",
    hsCode: "0801",
    items: [
      "Fresh Coconut (Semi-husked & De-husked)",
      "Virgin & Refined Coconut Oil",
      "Coconut Shell Charcoal & Products",
    ],
    certifications: ["GST", "IEC", "Relevant certificate shared once you place your order"],
    packaging: ["Mesh Bags (Fresh)", "PET & Tin Containers (Oil)", "Multi-layer Poly Bags (Desiccated)"],
    specSheet: [
      { label: "HS Code", value: "0801.1" },
      { label: "Shelf Life", value: "12 months (Oil), 9 months (Desiccated)" },
      { label: "MOQ", value: "1 x 20ft container" },
    ],
  },
  {
    slug: "spices",
    name: "Spices",
    shortName: "Spices",
    tagline: "Steam-sterilized whole and ground spices, lab-tested for pesticide residue.",
    description:
      "Sourced from India's major spice-growing belts, our planned spice range will be steam-sterilized for microbial safety and lab-tested for pesticide residue, aflatoxin, and heavy metals before every shipment.",
    heroGradient: "from-gold-500 to-navy-800",
    hsCode: "0904",
    items: [
      "Turmeric (Whole & Powder)",
      "Red Chilli (Whole & Powder)",
      "Black Pepper (Whole & Ground)",
      "Cardamom (Green & Bleached)",
      "Coriander Seeds & Powder",
      "Cumin Seeds",
      "Cloves",
    ],
    certifications: ["GST", "IEC", "Certification for this product arranged upon order confirmation"],
    packaging: ["25/50 kg PP Bags", "Retail Pouches (100g–1kg)", "Vacuum-sealed Export Cartons"],
    specSheet: [
      { label: "HS Code", value: "0904.xx" },
      { label: "Curcumin Content", value: "2–5% (Turmeric)" },
      { label: "Piperine Content", value: "6–9% (Pepper)" },
      { label: "MOQ", value: "1 x 20ft container / LCL available" },
    ],
  },
  {
    slug: "textiles",
    name: "Textiles",
    shortName: "Textiles",
    tagline: "Cotton fabrics, garments, and home textiles from Tirupur and Surat clusters.",
    description:
      "Our planned textile division will supply cotton fabrics, knitted garments, home furnishings, yarn, and industrial textiles, sourced across India's leading textile clusters as we build manufacturer relationships.",
    heroGradient: "from-navy-700 to-navy-900",
    hsCode: "5208",
    items: [
      "Cotton Woven & Knit Fabrics",
      "Knitted & Woven Garments",
      "Bed Linen & Home Textiles",
      "Cotton & Blended Yarn",
      "Industrial & Technical Textiles",
      "Made-ups (Towels, Curtains)",
    ],
    certifications: ["GST", "IEC", "Product-specific certificate provided once your order is confirmed"],
    packaging: ["Poly-bagged & Cartoned", "Hanging Garments on Racks", "Bulk Rolls (Fabric)"],
    specSheet: [
      { label: "HS Code", value: "5208 / 6109 / 6302" },
      { label: "GSM Range", value: "120–320 GSM" },
      { label: "Lead Time", value: "30–45 days post-order confirmation" },
      { label: "MOQ", value: "500–1000 pcs (garments), 1000m (fabric)" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return productCategories.find((p) => p.slug === slug);
}
