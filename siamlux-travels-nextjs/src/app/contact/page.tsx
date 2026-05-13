import type { Metadata } from 'next';
import BookingForm from '@/components/ui/BookingForm';
import { SITE, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us – Bangkok Travel Agency',
  description: 'Contact SiamLux Travels Bangkok. WhatsApp, phone, email or visit our Bangkok office. 24/7 travel consultation.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Contact Us</h1>
        <p className="text-gray-300 text-lg">We're here 7 days a week. Reach us anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div>
          <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">Get In Touch</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: '📞', label: 'Phone / WhatsApp', value: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: '✉️', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: '📘', label: 'Facebook', value: 'Sayed Shihab II', href: SITE.facebook },
              { icon: '📍', label: 'Office', value: 'Bangkok, Thailand', href: '#map' },
            ].map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-200 rounded-xl flex items-center justify-center text-2xl transition-colors flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">{c.label}</div>
                  <div className="font-semibold text-navy-800 group-hover:text-amber-600 transition-colors">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick action buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={WHATSAPP_URL("Hi SiamLux! I'd like to plan a trip. Can you help?")}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              💬 WhatsApp Now
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              📞 Call Now
            </a>
          </div>

          {/* Map */}
          <div id="map" className="mt-8 rounded-2xl overflow-hidden shadow-md h-64">
            <iframe
              src={SITE.mapEmbedUrl}
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SiamLux Travels Bangkok Office Location"
            />
          </div>
        </div>

        {/* Booking form */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
          <h2 className="font-display text-2xl font-bold text-navy-800 mb-2">Send Booking Inquiry</h2>
          <p className="text-gray-500 text-sm mb-6">We'll respond within 24 hours with a personalized itinerary.</p>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
