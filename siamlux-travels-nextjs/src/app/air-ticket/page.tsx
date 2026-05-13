import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Air Ticket Booking – Best Fares | SiamLux Travels Bangkok',
  description: 'Book discounted international and domestic air tickets from Bangkok. Best fares guaranteed, instant confirmation, all airlines.',
};

export default function AirTicketPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Air Ticket Booking</h1>
        <p className="text-gray-300 text-lg">Best fares on international & domestic flights</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: '💰', title: 'Best Price Guarantee', desc: 'We search across all airlines to get you the lowest available fare for your route.' },
            { icon: '⚡', title: 'Instant Confirmation', desc: 'Get your e-ticket within hours of confirmation. We handle everything digitally.' },
            { icon: '📞', title: 'Expert Assistance', desc: 'Confused about routes, stopovers, or baggage? Our team guides you every step.' },
          ].map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-navy-800 text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Popular routes */}
        <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">Popular Routes from Bangkok</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { route: 'Bangkok ✈ Dubai', airline: 'Emirates / Thai Airways', fare: 'From $320' },
            { route: 'Bangkok ✈ Maldives', airline: 'SriLankan / Thai Airways', fare: 'From $280' },
            { route: 'Bangkok ✈ Singapore', airline: 'Thai Airways / Scoot', fare: 'From $80' },
            { route: 'Bangkok ✈ Bali', airline: 'AirAsia / Garuda', fare: 'From $120' },
            { route: 'Bangkok ✈ London', airline: 'British Airways / Thai', fare: 'From $650' },
            { route: 'Bangkok ✈ Paris', airline: 'Air France / Thai Airways', fare: 'From $680' },
          ].map(r => (
            <div key={r.route} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold text-navy-800">{r.route}</div>
                <div className="text-xs text-gray-400 mt-0.5">{r.airline}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-amber-600">{r.fare}</div>
                <a
                  href={WHATSAPP_URL(`Hi SiamLux! I need a ticket for route: ${r.route}. Please send availability.`)}
                  target="_blank"
                  className="text-xs text-green-600 hover:underline"
                >
                  Inquire →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL("Hi SiamLux! I need to book an air ticket. Please help me find the best fare.")}
            target="_blank"
            className="btn-gold inline-flex items-center gap-2 px-8"
          >
            💬 Get Best Fare via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
