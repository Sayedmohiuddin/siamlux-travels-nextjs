import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Bangkok Travel Agency – Thailand Tours & Visa`,
    template: `%s | ${SITE.name}`,
  },
  description: 'SiamLux Travels – Bangkok\'s premium travel agency. Thailand tour packages, visa services, airport transfer, hotel booking, and international tours from Bangkok.',
  keywords: [
    'Bangkok travel agency', 'Thailand tour package', 'Bangladesh to Thailand tour',
    'Thailand visa service', 'Bangkok airport transfer', 'Thailand hotel booking',
    'international tour package', 'family tour package', 'honeymoon tour package', 'budget tour package',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} | Premium Bangkok Travel Agency`,
    description: 'Bangkok-based premium travel agency for Thailand tours, visa services, hotel booking & international packages.',
    url: 'https://siamlux.com',
    images: [{ url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: `${SITE.name} | Bangkok Travel Agency` },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: SITE.name,
  description: metadata.description,
  url: 'https://siamlux.com',
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangkok',
    addressCountry: 'TH',
  },
  sameAs: [SITE.facebook],
  openingHours: 'Mo-Sa 09:00-19:00',
  currenciesAccepted: 'USD,THB,BDT',
  paymentAccepted: 'Bank Transfer, Credit Card, bKash',
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
