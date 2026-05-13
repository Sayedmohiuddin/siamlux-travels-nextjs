import type { Metadata } from 'next';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Travel Insurance – Full Coverage | SiamLux Travels Bangkok',
  description: 'Comprehensive travel insurance for international trips. Medical coverage, trip cancellation, lost baggage, and emergency evacuation.',
};

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Travel Insurance</h1>
        <p className="text-gray-300 text-lg">Travel with peace of mind. Fully covered from departure to return.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              plan: 'Basic',
              price: '$12/trip',
              features: ['Medical up to $10,000', 'Trip cancellation', 'Lost baggage', 'Emergency contact'],
            },
            {
              plan: 'Standard',
              price: '$25/trip',
              features: ['Medical up to $50,000', 'Trip cancellation', 'Lost baggage + delay', 'Adventure sports', '24/7 helpline'],
              popular: true,
            },
            {
              plan: 'Premium',
              price: '$45/trip',
              features: ['Medical up to $200,000', 'Full trip cancellation', 'Lost + delayed baggage', 'Adventure & water sports', 'Emergency evacuation', 'Dental coverage'],
            },
          ].map(p => (
            <div key={p.plan} className={`rounded-2xl p-6 shadow-sm ${p.popular ? 'bg-navy-800 ring-2 ring-amber-500' : 'bg-white'}`}>
              {p.popular && <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Most Popular</div>}
              <h3 className={`font-display font-bold text-2xl mb-1 ${p.popular ? 'text-white' : 'text-navy-800'}`}>{p.plan}</h3>
              <div className={`text-3xl font-bold mb-4 ${p.popular ? 'text-amber-400' : 'text-amber-600'}`}>{p.price}</div>
              <ul className="space-y-2 mb-6">
                {p.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                    <span className={p.popular ? 'text-amber-400' : 'text-green-500'}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL(`Hi SiamLux! I'd like the ${p.plan} travel insurance plan. Please share details.`)}
                target="_blank"
                className={`w-full flex items-center justify-center gap-2 font-semibold py-2.5 rounded-xl transition-colors text-sm ${
                  p.popular ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                💬 Get This Plan
              </a>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">🛡️</div>
          <h3 className="font-semibold text-navy-800 text-lg mb-1">All Our Tour Packages Include Basic Insurance</h3>
          <p className="text-gray-600 text-sm">When you book a SiamLux tour package, basic travel insurance is automatically included. Upgrade to Standard or Premium for enhanced coverage.</p>
        </div>
      </div>
    </div>
  );
}
