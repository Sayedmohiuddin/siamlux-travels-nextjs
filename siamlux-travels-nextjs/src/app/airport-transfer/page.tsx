import type { Metadata } from 'next';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Bangkok Airport Transfer – 24/7 Pickup & Drop | SiamLux Travels',
  description: 'Professional Bangkok airport transfer service. BKK Suvarnabhumi & DMK Don Mueang. AC vehicles, English drivers, fixed price, 24/7 available.',
};

export default function AirportTransferPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Bangkok Airport Transfer</h1>
        <p className="text-gray-300 text-lg">Comfortable, punctual, 24/7 airport pickup & drop service</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Airports */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {[
            { name: 'Suvarnabhumi Airport (BKK)', icon: '✈️', desc: 'Bangkok\'s main international airport. 45–60 min from city center.' },
            { name: 'Don Mueang Airport (DMK)', icon: '🛫', desc: 'Domestic & low-cost carriers. 30–45 min from city center.' },
          ].map(a => (
            <div key={a.name} className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">{a.icon}</div>
              <h2 className="font-display font-bold text-navy-800 text-xl mb-2">{a.name}</h2>
              <p className="text-gray-500 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <h2 className="font-display text-2xl font-bold text-navy-800 mb-6 text-center">Transfer Packages</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { type: 'Sedan', pax: '1-3 Pax', price: '$15', features: ['AC Toyota Camry', 'Meet & Greet', 'Flight Tracking', 'Free Wait (60 min)'] },
            { type: 'Van / MPV', pax: '4-7 Pax', price: '$22', features: ['AC Toyota Alphard', 'Luggage Assistance', 'Meet & Greet', 'Free Wait (60 min)'], popular: true },
            { type: 'Large Van', pax: '8-13 Pax', price: '$35', features: ['AC Hiace Commuter', 'Extra Luggage Space', 'Meet & Greet', 'Free Wait (90 min)'] },
          ].map(t => (
            <div key={t.type} className={`rounded-2xl p-6 shadow-sm ${t.popular ? 'bg-navy-800 text-white ring-2 ring-amber-500' : 'bg-white'}`}>
              {t.popular && <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Most Popular</div>}
              <h3 className={`font-display font-bold text-xl mb-1 ${t.popular ? 'text-white' : 'text-navy-800'}`}>{t.type}</h3>
              <p className={`text-sm mb-3 ${t.popular ? 'text-gray-300' : 'text-gray-500'}`}>{t.pax}</p>
              <div className={`text-3xl font-bold font-display mb-4 ${t.popular ? 'text-amber-400' : 'text-amber-600'}`}>{t.price}</div>
              <ul className="space-y-1.5 mb-5">
                {t.features.map(f => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${t.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                    <span className={t.popular ? 'text-amber-400' : 'text-green-500'}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL(`Hi SiamLux! I need an airport transfer – ${t.type} (${t.pax}). Please confirm availability.`)}
                target="_blank"
                className={`w-full flex items-center justify-center gap-2 font-semibold py-2.5 rounded-xl transition-colors text-sm ${
                  t.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                💬 Book Transfer
              </a>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-2xl p-6 text-center">
          <h3 className="font-display font-bold text-navy-800 text-xl mb-2">Need a Custom Quote?</h3>
          <p className="text-gray-600 text-sm mb-4">Inter-city transfers, Pattaya, Hua Hin, Phuket and more destinations available.</p>
          <a
            href={WHATSAPP_URL("Hi SiamLux! I need a custom airport/city transfer. Please send a quote.")}
            target="_blank"
            className="btn-gold inline-flex items-center gap-2"
          >
            💬 Get Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
}
