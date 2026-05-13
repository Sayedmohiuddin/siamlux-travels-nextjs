import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PackageCard from '@/components/ui/PackageCard';
import BookingForm from '@/components/ui/BookingForm';
import { PACKAGES, DESTINATIONS, TESTIMONIALS, FAQS } from '@/data/packages';
import { SITE, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SiamLux Travels | Bangkok Travel Agency – Thailand Tours, Visa & Packages',
  description: 'Premium Bangkok-based travel agency. Thailand tour packages from $299, visa services, airport transfers, hotel booking & international holidays. WhatsApp: 01983485820',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  const featured = PACKAGES.filter(p => p.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85"
          alt="Premium travel destination – SiamLux Travels Bangkok"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            ✈️ Bangkok's Premium Travel Agency
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Discover the World<br />
            <span className="text-amber-400">In Luxury & Style</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From Thailand's golden temples to Maldives' turquoise lagoons — SiamLux crafts unforgettable journeys tailored just for you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/packages" className="btn-gold text-base px-8 py-4">
              Explore Packages ✈️
            </Link>
            <a
              href={WHATSAPP_URL("Hi SiamLux! I'd like to plan a custom tour. Please help.")}
              target="_blank"
              className="bg-white/15 backdrop-blur border border-white/30 text-white hover:bg-white/25 font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              💬 Plan My Trip
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {['500+ Happy Travelers', '50+ Destinations', '5★ Rated Service', '24/7 Support'].map(b => (
              <div key={b} className="flex items-center gap-1.5">
                <span className="text-amber-400">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEARCH BAR ─── */}
      <section className="bg-white py-4 shadow-md sticky top-16 z-40 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text" placeholder="🌏 Destination (e.g. Thailand, Dubai...)"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50"
            />
            <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50 min-w-[140px]">
              <option value="">💰 Any Budget</option>
              <option>Under $300</option>
              <option>$300 – $600</option>
              <option>$600 – $1000</option>
              <option>$1000+</option>
            </select>
            <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50 min-w-[140px]">
              <option value="">⏱ Any Duration</option>
              <option>3–5 Days</option>
              <option>6–8 Days</option>
              <option>9–12 Days</option>
              <option>12+ Days</option>
            </select>
            <Link href="/packages" className="btn-gold py-3 px-6 text-sm whitespace-nowrap">
              🔍 Search
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PACKAGES ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Handpicked For You</p>
            <h2 className="section-title">Featured Tour Packages</h2>
            <div className="gold-line" />
            <p className="section-subtitle">All-inclusive packages with transfers, accommodation, and guided tours</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featured.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
          <div className="text-center mt-10">
            <Link href="/packages" className="btn-navy inline-flex items-center gap-2">
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POPULAR DESTINATIONS ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Explore The World</p>
            <h2 className="section-title">Popular Destinations</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {DESTINATIONS.slice(0, 7).map(dest => (
              <Link
                key={dest.name}
                href={`/packages?destination=${dest.name}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={dest.image}
                  alt={`${dest.name} tour packages from Bangkok`}
                  fill className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-display font-semibold text-lg">{dest.name}</h3>
                  <p className="text-amber-400 text-xs">{dest.packages} Packages</p>
                </div>
              </Link>
            ))}
            <Link
              href="/packages"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy-800 flex flex-col items-center justify-center text-center p-6"
            >
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-white font-display font-semibold text-lg">More Destinations</h3>
              <p className="text-amber-400 text-xs mt-1">Explore All →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Complete Travel Services</h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mt-4 mb-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🗺️', title: 'Tour Packages', href: '/packages', desc: 'All-inclusive tours' },
              { icon: '🛂', title: 'Visa Services', href: '/visa', desc: 'Fast & reliable' },
              { icon: '✈️', title: 'Air Tickets', href: '/air-ticket', desc: 'Best fare guaranteed' },
              { icon: '🏨', title: 'Hotel Booking', href: '/hotel-booking', desc: '3★–5★ options' },
              { icon: '🚗', title: 'Airport Transfer', href: '/airport-transfer', desc: '24/7 available' },
              { icon: '🛡️', title: 'Travel Insurance', href: '/travel-insurance', desc: 'Full coverage' },
            ].map(s => (
              <Link
                key={s.title} href={s.href}
                className="bg-white/10 hover:bg-white/20 border border-white/10 hover:border-amber-500/50 rounded-2xl p-5 text-center transition-all duration-200 group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-gray-400 text-xs">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Why SiamLux?</p>
            <h2 className="section-title">Travel With Confidence</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Trusted Agency', desc: 'Bangkok-registered, fully licensed travel agency with 500+ satisfied clients.' },
              { icon: '💎', title: 'Premium Quality', desc: 'Handpicked hotels, experienced guides, and seamless logistics for every trip.' },
              { icon: '💰', title: 'Best Value', desc: 'Competitive pricing with no hidden charges. What you see is what you pay.' },
              { icon: '🕐', title: '24/7 Support', desc: 'Round-the-clock WhatsApp support before, during, and after your trip.' },
            ].map(item => (
              <div key={item.title} className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-colors group">
                <div className="w-16 h-16 bg-amber-100 group-hover:bg-amber-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-navy-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Happy Clients</p>
            <h2 className="section-title">What Our Travelers Say</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card p-6">
                <div className="flex gap-1 text-amber-400 text-lg mb-3">{'★'.repeat(t.rating)}</div>
                <p className="text-gray-600 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-navy-800">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                  </div>
                  <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {t.trip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Got Questions?</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="gold-line" />
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-navy-800 hover:bg-amber-50 transition-colors list-none">
                  <span>{faq.q}</span>
                  <span className="text-amber-500 text-xl group-open:rotate-45 transition-transform duration-200 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline inline-flex items-center gap-2">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA SECTION ─── */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Start Your Journey</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Travel?<br />Let's Plan Your Dream Trip
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Fill out the inquiry form and our travel experts will craft a personalized itinerary within 24 hours. Free consultation, no obligations.
              </p>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 text-base">📞</span>
                  <a href={`tel:${SITE.phone}`} className="hover:text-amber-400 transition-colors">{SITE.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 text-base">✉️</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-amber-400 transition-colors">{SITE.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 text-base">📍</span>
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 md:p-8">
              <h3 className="font-display font-bold text-navy-800 text-xl mb-6">Send Inquiry</h3>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
