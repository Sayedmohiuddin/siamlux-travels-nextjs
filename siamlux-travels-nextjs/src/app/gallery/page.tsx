import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Travel Gallery – Beautiful Destinations | SiamLux Travels',
  description: 'Browse our travel photo gallery. Thailand, Maldives, Dubai, Bali, Singapore and more destination photos from SiamLux Travels.',
};

const photos = [
  { src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80', alt: 'Bangkok Grand Palace Thailand', dest: 'Bangkok, Thailand' },
  { src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80', alt: 'Maldives overwater villa', dest: 'Maldives' },
  { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', alt: 'Dubai skyline Burj Khalifa', dest: 'Dubai, UAE' },
  { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', alt: 'Bali rice terraces temple', dest: 'Bali, Indonesia' },
  { src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80', alt: 'Kuala Lumpur Petronas Towers', dest: 'Kuala Lumpur' },
  { src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80', alt: 'Paris Eiffel Tower Europe', dest: 'Paris, France' },
  { src: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&q=80', alt: 'Singapore Marina Bay night', dest: 'Singapore' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', alt: 'Switzerland Alps mountain scenery', dest: 'Switzerland' },
  { src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', alt: 'Beach resort tropical destination', dest: 'Phuket, Thailand' },
  { src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&q=80', alt: 'Morocco Marrakech architecture', dest: 'Morocco' },
  { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', alt: 'Campervan road trip adventure', dest: 'New Zealand' },
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80', alt: 'Beautiful beach sunset', dest: 'Koh Samui, Thailand' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Travel Gallery</h1>
        <p className="text-gray-300 text-lg">Breathtaking destinations from our travels</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((p, i) => (
            <div key={i} className="break-inside-avoid group relative overflow-hidden rounded-2xl">
              <Image
                src={p.src}
                alt={p.alt}
                width={600}
                height={400}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">📍 {p.dest}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
