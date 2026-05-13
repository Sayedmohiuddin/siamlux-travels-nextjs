# SiamLux Travels – Next.js Website

Premium Bangkok travel agency website.

## Quick Start

```bash
cd siamlux
npm install
npm run dev
# Open http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (SEO, schema, fonts)
│   ├── page.tsx            # Home page (hero, packages, destinations...)
│   ├── about/page.tsx
│   ├── packages/
│   │   ├── page.tsx        # All packages with filter
│   │   └── [slug]/page.tsx # Package detail page
│   ├── visa/page.tsx
│   ├── air-ticket/page.tsx
│   ├── hotel-booking/page.tsx
│   ├── airport-transfer/page.tsx
│   ├── travel-insurance/page.tsx
│   ├── gallery/page.tsx
│   ├── blog/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with mobile menu
│   │   └── Footer.tsx
│   └── ui/
│       ├── PackageCard.tsx  # Reusable package card
│       ├── BookingForm.tsx  # WhatsApp inquiry form
│       └── FloatingButtons.tsx  # Floating WhatsApp + Call
├── data/
│   └── packages.ts         # All package data, destinations, FAQs
└── lib/
    └── constants.ts        # Contact info, nav links, site config
```

## Customization

### Update Contact Info
Edit `src/lib/constants.ts` — phone, email, WhatsApp, Facebook, address.

### Add/Edit Packages
Edit `src/data/packages.ts` — add new packages to the `PACKAGES` array.

### Change Colors
Edit `tailwind.config.js` — modify `navy` and `gold` color values.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or push to GitHub and connect to Vercel.com for automatic deployment.

## SEO Keywords Targeted
- Bangkok travel agency
- Thailand tour package  
- Bangladesh to Thailand tour
- Thailand visa service
- Bangkok airport transfer
- Family & honeymoon tour packages

## Features
- ✅ Mobile-first responsive design
- ✅ Multi-language buttons (EN/বা/ไท)
- ✅ Floating WhatsApp + Call buttons
- ✅ Schema markup (TravelAgency + FAQ)
- ✅ Auto sitemap at /sitemap.xml
- ✅ SEO meta tags on all pages
- ✅ Package detail pages with booking form
- ✅ WhatsApp inquiry integration
- ✅ Google Map embedded on Contact page
- ✅ Blog/gallery/visa/transfer pages
