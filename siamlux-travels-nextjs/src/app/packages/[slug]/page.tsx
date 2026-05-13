import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BookingForm from '@/components/ui/BookingForm';
import { PACKAGES } from '@/data/packages';
import { WHATSAPP_URL } from '@/lib/constants';

export async function generateStaticParams() {
  return PACKAGES.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pkg = PACKAGES.find(p => p.slug === params.slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} – ${pkg.destination} | ${pkg.duration}`,
    description: pkg.description,
  };
}

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const pkg = PACKAGES.find(p => p.slug === params.slug);
  if (!pkg) notFound();

  const stars = '★'.repeat(pkg.stars) + '☆'.repeat(5 - pkg.stars);
  const waMsg = `Hi SiamLux! I'd like to book the "${pkg.title}" package (${pkg.duration}). Please confirm availability.`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-72 md:h-96">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {pkg.tags.map(t => (
              <span key={t} className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white">{pkg.title}</h1>
          <p className="text-amber-300 mt-2">📍 {pkg.destination} &nbsp;·&nbsp; ⏱ {pkg.duration} &nbsp;·&nbsp; {stars}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-3">Package Overview</h2>
            <p className="text-gray-600 leading-relaxed">{pkg.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="text-center bg-amber-50 rounded-xl p-3">
                <div className="text-2xl mb-1">💰</div>
                <div className="font-bold text-navy-800">${pkg.price}</div>
                <div className="text-xs text-gray-500">Per Person</div>
              </div>
              <div className="text-center bg-blue-50 rounded-xl p-3">
                <div className="text-2xl mb-1">⏱</div>
                <div className="font-bold text-navy-800 text-sm">{pkg.duration}</div>
                <div className="text-xs text-gray-500">Duration</div>
              </div>
              <div className="text-center bg-green-50 rounded-xl p-3">
                <div className="text-2xl mb-1">🏨</div>
                <div className="font-bold text-navy-800">{pkg.stars} Star</div>
                <div className="text-xs text-gray-500">Hotel</div>
              </div>
              <div className="text-center bg-purple-50 rounded-xl p-3">
                <div className="text-2xl mb-1">🛡️</div>
                <div className="font-bold text-navy-800">Included</div>
                <div className="text-xs text-gray-500">Insurance</div>
              </div>
            </div>
          </div>

          {/* Inclusions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-4">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {[...pkg.tours, pkg.transfers ? 'Airport Transfers' : null, pkg.insurance ? 'Travel Insurance' : null]
                .filter(Boolean)
                .map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    {item}
                  </div>
                ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">Day-by-Day Itinerary</h2>
            <div className="space-y-4">
              {pkg.itinerary.map(day => (
                <div key={day.day} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    D{day.day}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">{day.title}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{day.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price card */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
            <div className="text-center mb-4">
              <div className="text-3xl font-display font-bold text-navy-800">${pkg.price}</div>
              <div className="text-gray-500 text-sm">per person · all-inclusive</div>
            </div>
            <a
              href={WHATSAPP_URL(waMsg)}
              target="_blank"
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-colors mb-3"
            >
              💬 WhatsApp Inquiry
            </a>
            <a
              href={`tel:01983485820`}
              className="w-full flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold py-3.5 rounded-xl transition-colors"
            >
              📞 Call to Book
            </a>
          </div>

          {/* Booking form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-display font-bold text-navy-800 text-lg mb-4">Send Booking Inquiry</h3>
            <BookingForm compact />
          </div>
        </div>
      </div>
    </div>
  );
}
