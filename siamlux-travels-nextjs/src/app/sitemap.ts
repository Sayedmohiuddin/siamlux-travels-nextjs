import { MetadataRoute } from 'next';
import { PACKAGES } from '@/data/packages';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://siamlux.com';
  const staticPages = [
    '', '/about', '/packages', '/visa', '/air-ticket',
    '/hotel-booking', '/airport-transfer', '/travel-insurance',
    '/gallery', '/blog', '/faq', '/contact',
  ].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const packagePages = PACKAGES.map(p => ({
    url: `${base}/packages/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...packagePages];
}
