import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About SiamLux Travels – Bangkok Premium Travel Agency',
  description: 'Learn about SiamLux Travels, Bangkok\'s trusted travel agency since 2018. Expert in Thailand tours, visa services, and international holiday packages.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">About SiamLux Travels</h1>
        <p className="text-gray-300 text-lg">Bangkok's trusted premium travel partner</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-5">
              Crafting Premium Journeys From the Heart of Bangkok
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                SiamLux Travels was founded with a simple mission: to make premium travel accessible, seamless, and truly memorable. Based in the vibrant city of Bangkok, Thailand, we have been helping travelers from Bangladesh, Thailand, and beyond explore the world's most beautiful destinations.
              </p>
              <p>
                From Thailand's golden temples and pristine beaches to the towering skyline of Dubai and the serene lagoons of the Maldives — our handcrafted itineraries deliver exceptional experiences at every turn.
              </p>
              <p>
                Our multilingual team speaks English, Bangla, and Thai, ensuring effortless communication from your first inquiry to your safe return home.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80">
            <Image
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80"
              alt="SiamLux Travels team Bangkok office"
              fill className="object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: '500+', label: 'Happy Travelers' },
            { number: '50+', label: 'Destinations' },
            { number: '6+', label: 'Years Experience' },
            { number: '4.9★', label: 'Average Rating' },
          ].map(s => (
            <div key={s.label} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="font-display text-3xl font-bold text-amber-500 mb-1">{s.number}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-navy-800">Our Core Values</h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🤝', title: 'Trust & Transparency', desc: 'No hidden fees. Clear pricing. Honest communication at every step of your journey.' },
            { icon: '🌟', title: 'Excellence', desc: 'We curate only the best hotels, guides, and experiences. Every detail is thoughtfully planned.' },
            { icon: '❤️', title: 'Personalization', desc: 'Every traveler is unique. We create custom itineraries tailored to your budget and dreams.' },
          ].map(v => (
            <div key={v.title} className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="font-display font-semibold text-navy-800 text-xl mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
