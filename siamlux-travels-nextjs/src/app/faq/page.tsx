import type { Metadata } from 'next';
import { FAQS } from '@/data/packages';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ – Travel Questions Answered | SiamLux Travels Bangkok',
  description: 'Frequently asked questions about SiamLux tour packages, visa services, booking process, payments, and travel from Bangkok.',
};

const moreQuestions = [
  {
    q: 'Do you offer group discounts?',
    a: 'Yes! Groups of 6 or more receive special discounts. Contact us for a group quote tailored to your itinerary and group size.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations 14+ days before travel: 80% refund. 7–13 days: 50% refund. Under 7 days: non-refundable. Full details in our booking terms.',
  },
  {
    q: 'Can you arrange honeymoon surprises or special setups?',
    a: 'Absolutely! We specialize in honeymoon packages with room decorations, surprise setups, private dinners, and couples experiences.',
  },
  {
    q: 'Do you provide travel documents and itinerary before departure?',
    a: 'Yes, a complete travel kit including hotel vouchers, transfer details, tour schedule, emergency contacts, and local SIM guide is provided.',
  },
];

export default function FAQPage() {
  const allFaqs = [...FAQS, ...moreQuestions];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Frequently Asked Questions</h1>
        <p className="text-gray-300 text-lg">Everything you need to know before you travel</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="space-y-3">
          {allFaqs.map((faq, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-navy-800 hover:bg-amber-50 transition-colors list-none">
                <span>{faq.q}</span>
                <span className="text-amber-500 text-2xl group-open:rotate-45 transition-transform duration-200 ml-4 flex-shrink-0 font-light">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-14 bg-navy-800 rounded-3xl p-8 text-center">
          <h2 className="font-display font-bold text-white text-2xl mb-3">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">Our travel experts are ready to help you 7 days a week.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/01983485820"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              📝 Send Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
