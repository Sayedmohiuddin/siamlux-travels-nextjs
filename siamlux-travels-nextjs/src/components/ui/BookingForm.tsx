'use client';
import { useState } from 'react';
import { SITE, WHATSAPP_URL } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDate: string;
  adults: string;
  children: string;
  budget: string;
  hotelCategory: string;
  message: string;
}

const INITIAL: FormData = {
  name: '', phone: '', email: '', destination: '', travelDate: '',
  adults: '2', children: '0', budget: '', hotelCategory: '4-star', message: '',
};

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const buildWAMsg = () =>
    `Hi SiamLux! 🌏 Booking Inquiry:\nName: ${form.name}\nPhone: ${form.phone}\nDestination: ${form.destination}\nDates: ${form.travelDate}\nAdults: ${form.adults}, Children: ${form.children}\nBudget: ${form.budget}\nHotel: ${form.hotelCategory}\nMessage: ${form.message}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(WHATSAPP_URL(buildWAMsg()), '_blank');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm(INITIAL); }, 4000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="font-display font-bold text-green-800 text-xl mb-2">Inquiry Sent!</h3>
        <p className="text-green-700 text-sm">Your WhatsApp message is ready. Our team will respond within a few hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} required
            placeholder="Your full name" className="input-field" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Phone / WhatsApp *</label>
          <input name="phone" value={form.phone} onChange={handleChange} required type="tel"
            placeholder="+880 1XXX XXX XXX" className="input-field" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Email Address</label>
          <input name="email" value={form.email} onChange={handleChange} type="email"
            placeholder="you@email.com" className="input-field" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Destination *</label>
          <select name="destination" value={form.destination} onChange={handleChange} required className="input-field">
            <option value="">Select destination</option>
            {['Thailand', 'Malaysia', 'Singapore', 'Dubai', 'Maldives', 'Bali', 'Europe', 'Other'].map(d => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Travel Date *</label>
          <input name="travelDate" value={form.travelDate} onChange={handleChange} required type="date"
            min={new Date().toISOString().split('T')[0]} className="input-field" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1.5">Adults</label>
            <input name="adults" value={form.adults} onChange={handleChange} type="number" min="1" max="20"
              className="input-field" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1.5">Children</label>
            <input name="children" value={form.children} onChange={handleChange} type="number" min="0" max="10"
              className="input-field" />
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Budget (per person)</label>
          <select name="budget" value={form.budget} onChange={handleChange} className="input-field">
            <option value="">Select budget</option>
            <option>Under $300</option>
            <option>$300 - $600</option>
            <option>$600 - $1000</option>
            <option>$1000 - $2000</option>
            <option>$2000+</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-1.5">Hotel Category</label>
          <select name="hotelCategory" value={form.hotelCategory} onChange={handleChange} className="input-field">
            <option>3-star</option>
            <option>4-star</option>
            <option>5-star</option>
            <option>Resort</option>
            <option>Budget / Hostel</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 block mb-1.5">Additional Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3}
          placeholder="Any special requests, honeymoon package, dietary requirements..."
          className="input-field resize-none" />
      </div>

      <button type="submit" className="w-full btn-gold text-base py-3.5 flex items-center justify-center gap-2">
        <span>💬</span>
        <span>Send Inquiry via WhatsApp</span>
      </button>
      <p className="text-xs text-gray-400 text-center">
        Or email us at <a href={`mailto:${SITE.email}`} className="text-amber-600 hover:underline">{SITE.email}</a>
      </p>
    </form>
  );
}
