export interface Package {
  id: string;
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  currency: string;
  stars: number;
  image: string;
  tags: string[];
  tours: string[];
  transfers: boolean;
  insurance: boolean;
  featured: boolean;
  description: string;
  itinerary: { day: number; title: string; details: string }[];
}

export const PACKAGES: Package[] = [
  {
    id: '1',
    slug: 'thailand-discovery-5d',
    title: 'Thailand Discovery',
    destination: 'Bangkok & Pattaya, Thailand',
    duration: '5 Days / 4 Nights',
    price: 299,
    currency: 'USD',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    tags: ['Popular', 'Family'],
    tours: ['Grand Palace', 'Wat Pho', 'Coral Island', 'Nong Nooch Garden'],
    transfers: true,
    insurance: true,
    featured: true,
    description: 'Explore the heart of Thailand with guided city tours, temple visits, and tropical beach experiences in Pattaya.',
    itinerary: [
      { day: 1, title: 'Arrival Bangkok', details: 'Airport pickup, hotel check-in, evening Chao Phraya cruise.' },
      { day: 2, title: 'Bangkok City Tour', details: 'Grand Palace, Wat Pho, Wat Arun, floating market.' },
      { day: 3, title: 'Bangkok to Pattaya', details: 'Transfer to Pattaya, Nong Nooch Garden, evening walking street.' },
      { day: 4, title: 'Coral Island', details: 'Full-day coral island tour with water sports and seafood lunch.' },
      { day: 5, title: 'Departure', details: 'Hotel checkout, airport transfer, departure.' },
    ],
  },
  {
    id: '2',
    slug: 'maldives-honeymoon-6d',
    title: 'Maldives Honeymoon Escape',
    destination: 'Maldives',
    duration: '6 Days / 5 Nights',
    price: 1299,
    currency: 'USD',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
    tags: ['Honeymoon', 'Luxury'],
    tours: ['Snorkeling', 'Sunset Cruise', 'Dolphin Watching', 'Private Beach Dinner'],
    transfers: true,
    insurance: true,
    featured: true,
    description: 'A dreamy overwater villa escape with crystal-clear lagoons, coral reefs, and world-class luxury.',
    itinerary: [
      { day: 1, title: 'Arrival Malé', details: 'Speedboat transfer to resort, welcome drink, sunset.' },
      { day: 2, title: 'Snorkeling & Reef', details: 'House reef snorkeling, marine biology tour.' },
      { day: 3, title: 'Dolphin Cruise', details: 'Morning dolphin watching, afternoon spa session.' },
      { day: 4, title: 'Private Sandbank', details: 'Exclusive sandbank picnic, sunset cruise.' },
      { day: 5, title: 'Leisure & Spa', details: 'Couples spa treatment, private beach dinner.' },
      { day: 6, title: 'Departure', details: 'Speedboat to Malé, international departure.' },
    ],
  },
  {
    id: '3',
    slug: 'dubai-luxury-7d',
    title: 'Dubai Luxury Experience',
    destination: 'Dubai, UAE',
    duration: '7 Days / 6 Nights',
    price: 899,
    currency: 'USD',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    tags: ['Luxury', 'City'],
    tours: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Dhow Cruise', 'Palm Jumeirah'],
    transfers: true,
    insurance: true,
    featured: true,
    description: 'Experience the pinnacle of modern luxury in Dubai — from soaring skyscrapers to golden desert dunes.',
    itinerary: [
      { day: 1, title: 'Arrival Dubai', details: 'VIP airport pickup, 5-star hotel check-in.' },
      { day: 2, title: 'City Tour', details: 'Burj Khalifa (124th floor), Dubai Mall, Dubai Fountain.' },
      { day: 3, title: 'Desert Safari', details: 'Dune bashing, camel ride, BBQ dinner under stars.' },
      { day: 4, title: 'Palm & Marina', details: 'Palm Jumeirah monorail, Dubai Marina yacht tour.' },
      { day: 5, title: 'Old Dubai', details: 'Gold Souk, Spice Souk, Dhow cruise with dinner.' },
      { day: 6, title: 'Leisure', details: 'Free time for shopping at Mall of the Emirates.' },
      { day: 7, title: 'Departure', details: 'Hotel checkout, VIP airport drop.' },
    ],
  },
  {
    id: '4',
    slug: 'singapore-malaysia-8d',
    title: 'Singapore & Malaysia Twin Tour',
    destination: 'Singapore & Kuala Lumpur',
    duration: '8 Days / 7 Nights',
    price: 749,
    currency: 'USD',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    tags: ['Popular', 'Family', 'Budget'],
    tours: ['Gardens by the Bay', 'Sentosa', 'Petronas Towers', 'Genting Highlands', 'Batu Caves'],
    transfers: true,
    insurance: true,
    featured: true,
    description: 'A perfect blend of futuristic Singapore and culturally rich Malaysia in one seamless twin-city itinerary.',
    itinerary: [
      { day: 1, title: 'Arrive Singapore', details: 'Airport transfer, Orchard Road shopping.' },
      { day: 2, title: 'Singapore City', details: 'Merlion Park, Gardens by the Bay, Marina Bay Sands.' },
      { day: 3, title: 'Sentosa Island', details: 'Universal Studios or cable car, S.E.A. Aquarium.' },
      { day: 4, title: 'Singapore to KL', details: 'Coach/flight to Kuala Lumpur, hotel check-in.' },
      { day: 5, title: 'KL City Tour', details: 'Petronas Twin Towers, KL Tower, Batu Caves.' },
      { day: 6, title: 'Genting Highlands', details: 'Cable car ride, theme park, cool highland weather.' },
      { day: 7, title: 'Shopping Day', details: 'Bukit Bintang, Pavilion Mall, street food night.' },
      { day: 8, title: 'Departure', details: 'Airport transfer from KL, international departure.' },
    ],
  },
  {
    id: '5',
    slug: 'bali-retreat-6d',
    title: 'Bali Spiritual Retreat',
    destination: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    price: 549,
    currency: 'USD',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    tags: ['Honeymoon', 'Wellness'],
    tours: ['Tanah Lot', 'Ubud Rice Terraces', 'Sacred Monkey Forest', 'Uluwatu Temple', 'Kecak Fire Dance'],
    transfers: true,
    insurance: true,
    featured: false,
    description: 'Reconnect with your soul amid Bali\'s lush terraces, sacred temples, and rejuvenating spa culture.',
    itinerary: [
      { day: 1, title: 'Arrive Bali', details: 'Ngurah Rai airport transfer, Seminyak hotel, sunset beach.' },
      { day: 2, title: 'Ubud Day Trip', details: 'Rice terraces, Sacred Monkey Forest, Ubud Palace.' },
      { day: 3, title: 'Temple Tour', details: 'Tanah Lot sea temple, Taman Ayun royal temple.' },
      { day: 4, title: 'Wellness Day', details: 'Traditional Balinese spa, yoga session, cooking class.' },
      { day: 5, title: 'Uluwatu', details: 'Uluwatu cliff temple, Kecak fire dance at sunset.' },
      { day: 6, title: 'Departure', details: 'Morning rice paddy walk, airport transfer.' },
    ],
  },
  {
    id: '6',
    slug: 'europe-grand-12d',
    title: 'Europe Grand Tour',
    destination: 'Paris, Rome & Amsterdam',
    duration: '12 Days / 11 Nights',
    price: 2499,
    currency: 'USD',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    tags: ['Luxury', 'Premium'],
    tours: ['Eiffel Tower', 'Louvre Museum', 'Colosseum', 'Vatican', 'Anne Frank House', 'Canal Cruise'],
    transfers: true,
    insurance: true,
    featured: false,
    description: 'A meticulously crafted European adventure covering iconic landmarks across France, Italy, and the Netherlands.',
    itinerary: [
      { day: 1, title: 'Arrive Paris', details: 'CDG airport transfer, boutique hotel, Eiffel Tower evening.' },
      { day: 2, title: 'Paris Highlights', details: 'Louvre, Notre-Dame, Champs-Élysées, Seine cruise.' },
      { day: 3, title: 'Versailles', details: 'Day trip to Palace of Versailles and its gardens.' },
      { day: 4, title: 'Paris to Rome', details: 'Flight to Rome, hotel check-in, Trastevere dinner.' },
      { day: 5, title: 'Ancient Rome', details: 'Colosseum, Roman Forum, Palatine Hill.' },
      { day: 6, title: 'Vatican', details: 'Vatican Museums, Sistine Chapel, St. Peter\'s Basilica.' },
      { day: 7, title: 'Rome to Amsterdam', details: 'Flight to Amsterdam, canal-side hotel.' },
      { day: 8, title: 'Amsterdam Tour', details: 'Anne Frank House, Rijksmuseum, canal boat tour.' },
      { day: 9, title: 'Day Trip', details: 'Zaanse Schans windmills, Volendam fishing village.' },
      { day: 10, title: 'Free Day', details: 'Vondelpark, Jordaan district, markets.' },
      { day: 11, title: 'Leisure', details: 'Keukenhof (seasonal) or cycling tour.' },
      { day: 12, title: 'Departure', details: 'Schiphol airport transfer, departure.' },
    ],
  },
];

export const DESTINATIONS = [
  { name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80', packages: 12 },
  { name: 'Malaysia', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80', packages: 8 },
  { name: 'Singapore', image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&q=80', packages: 6 },
  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', packages: 10 },
  { name: 'Maldives', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80', packages: 7 },
  { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', packages: 9 },
  { name: 'Europe', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80', packages: 5 },
];

export const TESTIMONIALS = [
  {
    name: 'Rahul Ahmed',
    location: 'Dhaka, Bangladesh',
    rating: 5,
    text: 'SiamLux handled our family trip to Thailand perfectly. The hotel was superb, transfers were on time, and the guide was excellent. Will book again!',
    trip: 'Thailand Family Tour',
  },
  {
    name: 'Nusrat Jahan',
    location: 'Chittagong, Bangladesh',
    rating: 5,
    text: 'Our Maldives honeymoon was beyond magical thanks to SiamLux. Every detail was taken care of. The overwater villa was a dream come true.',
    trip: 'Maldives Honeymoon',
  },
  {
    name: 'Tanvir Islam',
    location: 'Bangkok, Thailand',
    rating: 5,
    text: 'Best travel agency in Bangkok! Got my Dubai visa in just 3 days. Their visa service is fast and professional. Highly recommended.',
    trip: 'Dubai Visa & Package',
  },
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'The Singapore-Malaysia twin tour was incredible value. Smooth transfers, great hotels, and an amazing itinerary. SiamLux exceeded expectations.',
    trip: 'Singapore & Malaysia Tour',
  },
];

export const FAQS = [
  {
    q: 'How do I book a tour package?',
    a: 'You can book via our online inquiry form, WhatsApp, phone, or email. Our team will confirm availability and send you a booking confirmation within 24 hours.',
  },
  {
    q: 'Do you offer visa assistance for Thailand?',
    a: 'Yes! We provide visa on arrival assistance, tourist visa applications, and express visa services for Thailand and other destinations.',
  },
  {
    q: 'What is included in the tour packages?',
    a: 'Most packages include airport transfers, hotel accommodation, guided tours, travel insurance, and local transport. Full inclusions are listed on each package page.',
  },
  {
    q: 'Can I customize a package?',
    a: 'Absolutely. We specialize in tailor-made itineraries. Contact us via WhatsApp or email with your preferences and budget, and we\'ll create a custom package for you.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfer, bKash, Nagad, PayPal, and major credit/debit cards. A 30% deposit is required to confirm the booking.',
  },
  {
    q: 'Is travel insurance included?',
    a: 'All our standard and premium packages include basic travel insurance. You can also opt for upgraded coverage. Standalone insurance is also available.',
  },
  {
    q: 'How early should I book?',
    a: 'We recommend booking at least 2–4 weeks in advance for regular packages, and 4–8 weeks for peak season travel (Dec–Jan, Eid) or visa-required destinations.',
  },
  {
    q: 'Do you offer airport transfer services?',
    a: 'Yes, we provide 24/7 Bangkok airport transfer services (BKK Suvarnabhumi & DMK Don Mueang) in comfortable air-conditioned vehicles with English-speaking drivers.',
  },
];
