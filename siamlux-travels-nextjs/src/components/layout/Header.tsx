'use client';
import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS, LANGUAGES, SITE } from '@/lib/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-navy-800 text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phone}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
              📞 {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
              ✉️ {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => setActiveLang(l.code)}
                className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${
                  activeLang === l.code ? 'bg-amber-500 text-white' : 'hover:text-amber-400'
                }`}
                title={l.name}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-navy-800 rounded-lg flex items-center justify-center">
            <span className="text-amber-400 font-display font-bold text-lg leading-none">S</span>
          </div>
          <div>
            <div className="font-display font-bold text-navy-800 text-lg leading-none">SiamLux</div>
            <div className="text-amber-600 text-[10px] font-semibold tracking-widest uppercase leading-none">Travels</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
        </div>

        {/* Desktop CTA + Lang */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => setActiveLang(l.code)}
                className={`px-2 py-1 rounded text-xs font-semibold border transition-colors ${
                  activeLang === l.code
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'border-gray-200 text-gray-600 hover:border-navy-800'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Link href="/contact" className="btn-gold text-sm py-2 px-5">Book Now</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-gray-700 transition-all mb-1 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-gray-700 transition-all mb-1 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          <div className="flex gap-2 mb-4">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => setActiveLang(l.code)}
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  activeLang === l.code ? 'bg-navy-800 text-white border-navy-800' : 'border-gray-300 text-gray-600'
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <a href={`tel:${SITE.phone}`} className="flex-1 bg-navy-800 text-white text-center py-2.5 rounded-xl text-sm font-semibold">
              📞 Call Us
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              className="flex-1 bg-green-500 text-white text-center py-2.5 rounded-xl text-sm font-semibold"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
