import Link from 'next/link';
import { SITE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const services = [
    { label: 'Tour Packages', href: '/packages' },
    { label: 'Visa Services', href: '/visa' },
    { label: 'Air Tickets', href: '/air-ticket' },
    { label: 'Hotel Booking', href: '/hotel-booking' },
    { label: 'Airport Transfer', href: '/airport-transfer' },
    { label: 'Travel Insurance', href: '/travel-insurance' },
  ];

  const destinations = ['Thailand', 'Malaysia', 'Singapore', 'Dubai', 'Maldives', 'Bali', 'Europe'];

  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">S</span>
            </div>
            <div>
              <div className="font-display font-bold text-white text-xl">SiamLux</div>
              <div className="text-amber-400 text-[10px] tracking-widest uppercase">Travels</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            Bangkok's premium travel agency specializing in Thailand tours, visa services, and international holiday packages.
          </p>
          <div className="space-y-2 text-sm">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              📞 <span>{SITE.phone}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              ✉️ <span>{SITE.email}</span>
            </a>
            <p className="flex items-center gap-2">
              📍 <span>Bangkok, Thailand</span>
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display font-semibold text-white text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm hover:text-amber-400 transition-colors">
                  → {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="font-display font-semibold text-white text-lg mb-4">Popular Destinations</h3>
          <ul className="space-y-2">
            {destinations.map(d => (
              <li key={d}>
                <Link href={`/packages?destination=${d}`} className="text-sm hover:text-amber-400 transition-colors">
                  → {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links + CTA */}
        <div>
          <h3 className="font-display font-semibold text-white text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 mb-6">
            {['About Us', 'Gallery', 'Blog', 'FAQ', 'Contact'].map(l => (
              <li key={l}>
                <Link href={`/${l.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-amber-400 transition-colors">
                  → {l}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi SiamLux! I'd like to inquire about a tour package.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SiamLux Travels. All rights reserved. Bangkok, Thailand.</p>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-amber-400 transition-colors">Privacy</Link>
            <Link href="/faq" className="hover:text-amber-400 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
