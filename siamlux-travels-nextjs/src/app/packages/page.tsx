import type { Metadata } from 'next';
import PackageCard from '@/components/ui/PackageCard';
import { PACKAGES } from '@/data/packages';

export const metadata: Metadata = {
  title: 'Tour Packages – Thailand, Dubai, Maldives, Europe & More',
  description: 'Browse SiamLux premium tour packages from Bangkok. Family, honeymoon, budget, and luxury tours to Thailand, Dubai, Maldives, Singapore, Bali, and Europe.',
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Tour Packages</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            All-inclusive holidays designed for comfort, value, and unforgettable memories.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {['All', 'Thailand', 'Malaysia', 'Singapore', 'Dubai', 'Maldives', 'Bali', 'Europe'].map(f => (
            <button
              key={f}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                f === 'All'
                  ? 'bg-navy-800 text-white border-navy-800'
                  : 'border-gray-200 text-gray-600 hover:border-navy-800 hover:text-navy-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PACKAGES.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
        </div>
      </div>
    </div>
  );
}
