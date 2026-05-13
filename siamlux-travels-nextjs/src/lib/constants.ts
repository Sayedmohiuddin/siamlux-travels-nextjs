export const SITE = {
  name: 'SiamLux Travels',
  tagline: 'Your Premium Journey Begins in Bangkok',
  description: 'Bangkok-based premium travel agency specializing in Thailand tours, international packages, visa services, and luxury travel experiences.',
  phone: '01983485820',
  whatsapp: '01983485820',
  email: 'sayedmohiuddin448@gmail.com',
  facebook: 'https://facebook.com/sayed-shihab-II',
  address: 'Bangkok, Thailand',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496099.0535799645!2d100.35673!3d13.72498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1700000000000',
};

export const WHATSAPP_URL = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Packages', href: '/packages' },
  { label: 'Visa', href: '/visa' },
  { label: 'Air Ticket', href: '/air-ticket' },
  { label: 'Hotel', href: '/hotel-booking' },
  { label: 'Transfer', href: '/airport-transfer' },
  { label: 'Insurance', href: '/travel-insurance' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'bn', label: 'বা', name: 'Bangla' },
  { code: 'th', label: 'ไท', name: 'Thai' },
];
