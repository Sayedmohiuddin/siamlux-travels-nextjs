import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Thailand Visa Services – Fast & Reliable | SiamLux Travels Bangkok',
  description: 'Expert Thailand visa assistance from Bangkok. Tourist visa, visa on arrival, express visa, and international visa services. Fast processing, high approval rate.',
};

const visaTypes = [
  {
    type: 'Thailand Tourist Visa (TR)',
    duration: '30 days (extendable)',
    processing: '3–5 business days',
    fee: 'From $35',
    features: ['Single/Multiple Entry', 'Valid for 3 months', 'Extendable at immigration', 'High approval rate'],
  },
  {
    type: 'Thailand Visa on Arrival',
    duration: '30 days',
    processing: 'On arrival at airport',
    fee: 'THB 2,000',
    features: ['Available at BKK Suvarnabhumi', 'Queue assistance available', 'Photo & form preparation', 'Eligible for 19+ countries'],
  },
  {
    type: 'UAE / Dubai Visa',
    duration: '30 days / 90 days',
    processing: '3–7 business days',
    fee: 'From $80',
    features: ['Tourist & visit visa', 'Express available', 'High approval rate', 'Guidance for documents'],
  },
  {
    type: 'Schengen Visa (Europe)',
    duration: '30–90 days',
    processing: '10–15 business days',
    fee: 'From $120',
    features: ['Multiple Schengen countries', 'Appointment booking help', 'Document checklist', 'Interview preparation'],
  },
];

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Visa Services</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Fast, reliable visa assistance with high approval rates. Our experts handle paperwork — you just travel.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        {/* Trust bar */}
        <div className="grid grid-cols-3 gap-4 mb-14 text-center">
          {['95%+ Approval Rate', '3-Day Express Service', 'Document Checklist Included'].map(t => (
            <div key={t} className="bg-white rounded-2xl p-4 shadow-sm">
              <span className="text-amber-500 font-bold text-sm">✓ {t}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visaTypes.map(v => (
            <div key={v.type} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-display font-bold text-navy-800 text-xl mb-3">{v.type}</h2>
              <div className="grid grid-cols-3 gap-3 mb-4 text-center text-sm">
                <div className="bg-amber-50 rounded-xl p-2">
                  <div className="font-bold text-amber-700">{v.duration}</div>
                  <div className="text-gray-500 text-xs">Duration</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-2">
                  <div className="font-bold text-blue-700 text-xs">{v.processing}</div>
                  <div className="text-gray-500 text-xs">Processing</div>
                </div>
                <div className="bg-green-50 rounded-xl p-2">
                  <div className="font-bold text-green-700">{v.fee}</div>
                  <div className="text-gray-500 text-xs">Fee from</div>
                </div>
              </div>
              <ul className="space-y-1.5 mb-5">
                {v.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL(`Hi SiamLux! I need help with ${v.type}. Please guide me.`)}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
              >
                💬 Apply via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a different visa? We assist with Malaysia, Singapore, Bali, UK, and more.</p>
          <Link href="/contact" className="btn-navy inline-flex items-center gap-2">
            Contact Our Visa Team →
          </Link>
        </div>
      </div>
    </div>
  );
}
