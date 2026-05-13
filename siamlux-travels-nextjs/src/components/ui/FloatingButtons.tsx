'use client';
import { SITE } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi SiamLux! I'd like to inquire about a tour.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
        aria-label="WhatsApp"
      >
        <span className="text-xl leading-none">💬</span>
        <span className="text-sm font-semibold hidden group-hover:inline transition-all">WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href={`tel:${SITE.phone}`}
        className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
        aria-label="Call"
      >
        <span className="text-xl leading-none">📞</span>
        <span className="text-sm font-semibold hidden group-hover:inline transition-all">Call Us</span>
      </a>
    </div>
  );
}
