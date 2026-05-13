import type { Metadata } from 'next';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hotel Booking Thailand & International | SiamLux Travels',
  description: 'Book 3-5 star hotels in Bangkok, Pattaya, Phuket, and international destinations. Best rates, instant confirmation.',
};

export default function HotelBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Hotel Booking</h1>
        <p className="text-gray-300 text-lg">3★ to 5★ hotels at the best available rates</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {['Budget (3★)', 'Superior (4★)', 'Luxury (5★)'].map((cat, i) => (
            <div key={cat} className={`rounded-2xl p-6 shadow-sm text-center ${i === 1 ? 'bg-navy-800 text-white' : 'bg-white'}`}>
              <div className="text-3xl mb-3">{'★'.repeat(i + 3)}</div>
              <h3 className={`font-display font-bold text-xl mb-2 ${i === 1 ? 'text-white' : 'text-navy-800'}`}>{cat}</h3>
              <p className={`text-sm mb-4 ${i === 1 ? 'text-gray-300' : 'text-gray-500'}`}>
                {i === 0 ? 'Clean, comfortable, great location at budget price.' : i === 1 ? 'Premium amenities, excellent service, city-central.' : 'World-class luxury, spa, rooftop pool, fine dining.'}
              </p>
              <a
                href={WHATSAPP_URL(`Hi SiamLux! I need a ${cat} hotel booking. Please help.`)}
                target="_blank"
                className={`w-full flex items-center justify-center gap-2 font-semibold py-2.5 rounded-xl transition-colors text-sm ${
                  i === 1 ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                💬 Inquire Now
              </a>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-800 mb-3">Need a Hotel Recommendation?</h2>
          <p className="text-gray-600 mb-5">Tell us your destination, dates, budget and number of guests. We'll send you the best options instantly.</p>
          <a
            href={WHATSAPP_URL("Hi SiamLux! I need hotel booking assistance. Please recommend the best options.")}
            target="_blank"
            className="btn-gold inline-flex items-center gap-2"
          >
            💬 Get Hotel Recommendations
          </a>
        </div>
      </div>
    </div>
  );
}
