import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Blog & Guide – Thailand, Dubai, Maldives Tips | SiamLux Travels',
  description: 'Travel tips, destination guides, visa information, and packing tips from SiamLux Travels Bangkok. Plan your perfect trip with our expert guides.',
};

const posts = [
  {
    slug: 'thailand-travel-guide',
    title: 'Ultimate Thailand Travel Guide 2025: Temples, Beaches & Culture',
    excerpt: 'Everything you need to know before visiting Thailand — from Bangkok city tours to island escapes, visa requirements, and local cuisine tips.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    category: 'Destination Guide',
    date: 'March 15, 2025',
    readTime: '8 min read',
  },
  {
    slug: 'dubai-travel-tips',
    title: 'Dubai on a Budget: Top 10 Tips for a Luxury Feel Without Breaking the Bank',
    excerpt: 'Experience Dubai\'s glamour without the premium price tag. Discover free attractions, affordable dining spots, and smart money-saving travel hacks.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    category: 'Travel Tips',
    date: 'February 28, 2025',
    readTime: '6 min read',
  },
  {
    slug: 'maldives-honeymoon-guide',
    title: 'Planning Your Dream Maldives Honeymoon: What Nobody Tells You',
    excerpt: 'The Maldives is magical — but only if you plan right. Learn which atolls to choose, overwater villa tips, and how to save thousands on your honeymoon.',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
    category: 'Honeymoon',
    date: 'January 10, 2025',
    readTime: '10 min read',
  },
  {
    slug: 'bangladesh-to-thailand-visa',
    title: 'Bangladesh to Thailand Visa Guide: Step-by-Step Application Process',
    excerpt: 'Complete guide for Bangladeshi travelers applying for Thailand tourist visa. Documents required, processing time, fees, and tips for guaranteed approval.',
    image: 'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=800&q=80',
    category: 'Visa Guide',
    date: 'December 5, 2024',
    readTime: '7 min read',
  },
  {
    slug: 'bali-vs-phuket',
    title: 'Bali vs Phuket: Which Tropical Paradise Should You Visit in 2025?',
    excerpt: 'Can\'t decide between Bali and Phuket? We break down beaches, food, budget, nightlife, culture, and what each destination does best.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    category: 'Comparison',
    date: 'November 18, 2024',
    readTime: '9 min read',
  },
  {
    slug: 'family-tour-singapore',
    title: 'Singapore Family Tour: 7 Must-Visit Attractions for Kids & Parents',
    excerpt: 'Singapore is a dream destination for families. Discover the top 7 family-friendly attractions, the best time to visit, and how to plan without stress.',
    image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=80',
    category: 'Family Travel',
    date: 'October 30, 2024',
    readTime: '5 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-800 py-16 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Travel Blog & Guides</h1>
        <p className="text-gray-300 text-lg">Expert advice to plan your perfect journey</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured post */}
        <div className="mb-10">
          <Link href={`/blog/${posts[0].slug}`} className="group grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative h-64 md:h-auto">
              <Image src={posts[0].image} alt={posts[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 w-fit">
                {posts[0].category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-800 mb-3 group-hover:text-amber-600 transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{posts[0].excerpt}</p>
              <div className="text-xs text-gray-400">{posts[0].date} · {posts[0].readTime}</div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group card">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-display font-bold text-navy-800 text-lg leading-tight mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="text-xs text-gray-400">{post.date} · {post.readTime}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
