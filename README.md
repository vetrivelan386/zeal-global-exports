# Zeal Global Exports — B2B Export Company Website

A production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS website for an Indian
export company selling Pharmaceuticals, Nutraceuticals, Rice, Coconut Products, Spices, and
Textiles internationally.

## Stack

- **Next.js 14** (App Router, file-based routing, metadata API, `sitemap.ts`/`robots.ts`)
- **TypeScript**
- **Tailwind CSS** with a custom design token set (see `tailwind.config.ts`)
- **Framer Motion** ready to use (installed; add scroll-reveal effects where you like)
- **lucide-react** icon set

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Build for production:

```bash
npm run build
npm run start
```

## Folder Structure

```
app/                    Routes (App Router) — one folder per page
  page.tsx              Home
  about/
  products/
    [category]/page.tsx One page per product category
  quality-assurance/
  certifications/
  export-process/
  gallery/
  contact/
  api/contact/route.ts  Inquiry form submission endpoint
  sitemap.ts, robots.ts SEO files
components/             Reusable UI (Navbar, Footer, Hero, ContactForm, etc.)
lib/                    Content data (products.ts, content.ts) — edit here to update copy
public/catalogue/       Drop your downloadable PDF catalogue here
```

## Before Going Live — Replace These Placeholders

1. **Company name & domain** — currently "Zeal Global Exports" / `zealglobalexports.com`. Search and
   replace across `app/layout.tsx`, `lib/content.ts`, and page metadata.
2. **WhatsApp number** — `components/WhatsAppButton.tsx` and `app/contact/page.tsx`
   (`WHATSAPP_NUMBER` constant).
3. **Contact details** — email, phone, and office address in `components/Footer.tsx` and
   `app/contact/page.tsx`.
4. **Google Maps embed** — the `<iframe>` in `app/contact/page.tsx` currently searches "Anna
   Salai, Chennai"; replace with your exact address or a Google Maps embed link.
5. **Images** — product cards, hero, and gallery currently use icon + gradient placeholders (no
   stock photography is bundled, to avoid licensing issues). Replace with `next/image` calls
   using your own product photography, warehouse shots, and team photos. `next.config.js` is
   already set up to allow `images.unsplash.com` if you use Unsplash placeholders during design.
6. **Product catalogue PDF** — add a real file at
   `public/catalogue/vantra-exports-catalogue.pdf`.
7. **Certifications** — `lib/content.ts` → `certifications` array holds placeholder certificate
   metadata. Add scanned copies of your actual certificates as images/PDFs and display them on
   `app/certifications/page.tsx`.
8. **Contact form backend** — already wired to [Resend](https://resend.com) in
   `app/api/contact/route.ts`. It sends (a) a notification to your team and (b) an
   auto-confirmation to the buyer. To activate:
   - Create a free Resend account and API key: https://resend.com/api-keys
   - Verify a sending domain under **Domains** in Resend (e.g. `zealglobalexports.com`) — until
     verified, Resend will only deliver to your own account email, which is fine for testing
   - Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and
     `CONTACT_FROM_EMAIL`
   - Without an API key set, submissions are still accepted and logged server-side, they just
     won't send an email — nothing breaks if you skip this step for now
9. **Google Analytics** — set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local` (see
   `.env.example`); the `GoogleAnalytics` component only loads if this is set.
10. **Newsletter** — wired to Resend Audiences in `app/api/newsletter/route.ts`. Create an
    Audience in the Resend dashboard, copy its ID into `RESEND_AUDIENCE_ID`, and signups will
    be added automatically. Falls back to logging only if unset.

## Storing Inquiries in Google Sheets

Every inquiry submission can also be saved as a row in a Google Sheet you own, using a free
Google Apps Script "Web App" — no Google Cloud account, API keys, or paid service required.

**Step 1 — Create the sheet**
1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. In row 1, add these column headers exactly:
   `Timestamp | Name | Company | Email | Phone | Country | Product | Message`
3. Rename it something like "Zeal Global Exports — Inquiries".

**Step 2 — Add the script**
1. In the sheet, go to **Extensions → Apps Script**.
2. Delete any starter code you see in the editor.
3. Open `google-apps-script/Code.gs` in this project, copy its entire contents, and paste it
   into the Apps Script editor.
4. Click the save icon (or `Ctrl+S`).

**Step 3 — Deploy it as a Web App**
1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set **Execute as**: `Me`, and **Who has access**: `Anyone`.
4. Click **Deploy**. Google will ask you to authorize the script — click through and allow it
   (you may see an "unverified app" warning since this is your own private script; click
   **Advanced → Go to [project name] (unsafe)** to proceed — this is expected and safe since
   you wrote the script yourself).
5. Copy the **Web app URL** it gives you (ends in `/exec`).

**Step 4 — Connect it to your site**
1. Copy `.env.example` to `.env.local` if you haven't already.
2. Paste the URL into `GOOGLE_SHEET_WEBHOOK_URL` in `.env.local`.
3. Restart `npm run dev` (or redeploy, if live).

Submit a test inquiry on the Contact page — a new row should appear in your sheet within a
few seconds. If it doesn't, check your terminal for a warning message, and double-check the
deployment's "Who has access" is set to **Anyone**, not "Only myself."

**Note:** if you ever change the Apps Script code after deploying, you need to create a **new
deployment** (Deploy → Manage deployments → pencil icon → New version) for the changes to take
effect — editing the code alone doesn't update a live deployment.

## SEO

- Per-page `metadata` exports (title, description) are set on every route.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically.
- Update `metadataBase` in `app/layout.tsx` to your real production domain.
- Target keywords (Indian Exporter, Export Company India, Pharmaceutical Exporter, etc.) are
  included in the root layout's `keywords` metadata and reflected in on-page copy — extend this
  per product page as needed.

## Design System

Colors, fonts, and animation tokens are defined in `tailwind.config.ts`:

- `navy` (primary/dark), `emerald` (accent/CTA), `gold` (certifications/trust accent)
- Display font: Space Grotesk · Body: Inter · Mono/spec data: IBM Plex Mono
- Signature hero element: an animated SVG trade-route map (`components/TradeRouteMap.tsx`)
  connecting India to the UAE, Middle East, Europe, Africa, and Southeast Asia.

## Deployment

This project deploys cleanly to Vercel, Netlify, or any Node hosting that supports Next.js 14.
For Vercel: push to a Git repo, import into Vercel, set environment variables from
`.env.example`, and deploy.
