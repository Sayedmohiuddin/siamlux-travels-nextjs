import Image from 'next/image';
import Link from 'next/link';
import { Package } from '@/data/packages';
import { WHATSAPP_URL } from '@/lib/constants';

export default function PackageCard({ pkg }: { pkg: Package }) {
  const stars = '★'.repeat(pkg.stars) + '☆'.repeat(5 - pkg.stars);
  const waMsg = `Hi SiamLux! I'm interested in the "${pkg.title}" package (${pkg.duration}). Please send details.`;

  return (
    <div className="card group flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.title} - ${pkg.destination} tour package`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {pkg.tags.map(tag => (
            <span key={tag} className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>
        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-white/95 rounded-xl px-3 py-1.5 text-right">
          <div className="text-[10px] text-gray-500 leading-none">From</div>
          <div className="font-display font-bold text-navy-800 text-lg leading-tight">${pkg.price}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="font-display font-semibold text-navy-800 text-lg leading-tight">{pkg.title}</h3>
          <p className="text-amber-600 text-sm mt-0.5">📍 {pkg.destination}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>⏱ {pkg.duration}</span>
          <span className="text-amber-500 text-base">{stars}</span>
        </div>

        {/* Includes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.tours.slice(0, 3).map(t => (
            <span key={t} className="bg-blue-50 text-blue-700 text-[11px] px-2 py-0.5 rounded-full font-medium">
              {t}
            </span>
          ))}
          {pkg.tours.length > 3 && (
            <span className="bg-gray-100 text-gray-500 text-[11px] px-2 py-0.5 rounded-full">
              +{pkg.tours.length - 3} more
            </span>
          )}
        </div>

        {/* Badges */}
        <div className="flex gap-2 mb-4 text-[11px] font-semibold">
          {pkg.transfers && <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full">✓ Transfers</span>}
          {pkg.insurance && <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">✓ Insurance</span>}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <Link
            href={`/packages/${pkg.slug}`}
            className="flex-1 text-center border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white text-sm font-semibold py-2 rounded-xl transition-all duration-200"
          >
            View Details
          </Link>
          <a
            href={WHATSAPP_URL(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 rounded-xl transition-all duration-200"
          >
            💬 Inquire
          </a>
        </div>
      </div>
    </div>
  );
}
