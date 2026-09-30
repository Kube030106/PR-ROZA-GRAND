export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  type: 'Couple' | 'Family';
  capacity: string;
  maxGuests: number;
  bedType: string;
  hasAC: boolean;
  basePrice: number;
  weekendPrice: number;
  featuredImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  specs: {
    roomSize: string;
    bed: string;
    bathroom: string;
    view: string;
    occupancy: string;
  };
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  isHighlight?: boolean;
}

export interface Attraction {
  name: string;
  category: 'Beach' | 'Culture' | 'Dining' | 'Heritage';
  distance: string;
  timeByFoot?: string;
  timeByVehicle: string;
  description: string;
  image: string;
  mapQuery: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'booking' | 'stay' | 'policies' | 'location';
}

export interface ReviewItem {
  id: string;
  author: string;
  origin: string;
  rating: number;
  date: string;
  comment: string;
  stayType: string;
}

export const GUEST_HOUSE_DATA = {
  name: "PR ROZA GRAND",
  legalName: "PR Roza Grand Guest House",
  tagline: "Comfortable Stay, Memorable Moments",
  heroSubtitle: "A calm, coastal retreat on the East Coast Road, directly opposite McDonald's and just minutes from Auroville Beach.",
  about: "Experience a pleasant and peaceful stay with modern amenities and warm hospitality in the heart of Auroville. Located right on ECR main road, PR Roza Grand offers spotless couple and family rooms, 24x7 hot water, high-speed Wi-Fi, safe parking, and rental bike assistance to explore the French-colonial streets of Pondicherry and the tranquil avenues of Auroville.",
  
  contact: {
    phone: "+91 9360222305",
    phoneDisplay: "93602 22305",
    phoneRaw: "9360222305",
    whatsapp: "+919360222305",
    whatsappDisplay: "+91 93602 22305",
    email: "info@prrozagrand.com",
    address: {
      doorNo: "No. 99",
      street: "ECR Main Road",
      locality: "Chinna Mudhaliyar Chavadi",
      city: "Auroville",
      state: "Tamil Nadu",
      postalCode: "605 101",
      country: "India",
      landmark: "Opposite to McDonald's, ECR",
      fullAddress: "99, ECR Main Road, opposite McDonald's, Chinna Mudhaliyar Chavadi, Auroville, Tamil Nadu 605 101"
    },
    googleMapsUrl: "https://maps.app.goo.gl/bYo141mVBBeMScvj7?g_st=aw",
    coordinates: {
      latitude: 11.9868,
      longitude: 79.8458
    }
  },

  policies: {
    checkIn: "12:00 PM",
    checkOut: "11:30 AM",
    smoking: "Strictly No Smoking inside rooms and corridors",
    alcohol: "No alcohol permitted on guest house premises",
    pets: "No pets allowed on premises",
    cancellation: "50% cancellation fee applies for reservations cancelled prior to check-in",
    weekendNotice: "Tariff may vary on weekends, long weekends, and festive holidays",
    idProof: "Government-approved photo identification (Aadhaar, Passport, Driving License) is mandatory for all adult guests at check-in",
    quietHours: "10:00 PM to 07:00 AM (to ensure rest for all fellow guests)"
  },

  rooms: [
    {
      id: "couple-ac",
      slug: "couple-ac",
      name: "Couple AC Room",
      tagline: "Cool, peaceful comfort for couples and solo travelers",
      type: "Couple",
      capacity: "2 Members",
      maxGuests: 2,
      bedType: "1 Queen Bed with golden runner",
      hasAC: true,
      basePrice: 1499,
      weekendPrice: 1799,
      featuredImage: "/images/room-couple-ac.jpg",
      gallery: [
        "/images/room-couple-ac.jpg",
        "/images/room-standard-1.jpg",
        "/images/building-facade.jpg"
      ],
      description: "Our Couple AC Room is designed for refreshing comfort after a day under the Coromandel sun. It features a calming sky-blue accent wall, whisper-quiet split air conditioning, a comfortable wooden queen-size bed, flat-screen television, bedside electrical charging points, and an en-suite private bathroom with 24x7 hot shower.",
      highlights: [
        "Individual Split Air Conditioning",
        "Queen Bed with Fresh Linens",
        "24x7 Solar & Geyser Hot Water",
        "Free High-Speed Wi-Fi"
      ],
      amenities: [
        "Air Conditioning",
        "High-Speed Wi-Fi",
        "24x7 Hot Water",
        "Flat-Screen TV",
        "Queen Wooden Bed",
        "Private Bathroom",
        "Complimentary Morning Tea/Coffee",
        "Daily Housekeeping",
        "Safe & Secure Parking",
        "Bike Rental Assistance"
      ],
      specs: {
        roomSize: "180 sq.ft",
        bed: "Queen Size (6x5 ft)",
        bathroom: "Attached with 24x7 Hot Shower",
        view: "Balcony / Coastal corridor view",
        occupancy: "2 Adults (1 child under 5 free)"
      }
    },
    {
      id: "couple-non-ac",
      slug: "couple-non-ac",
      name: "Couple Non-AC Room",
      tagline: "Breezy, budget-conscious comfort with modern essentials",
      type: "Couple",
      capacity: "2 Members",
      maxGuests: 2,
      bedType: "1 Queen Bed with floral bedcover",
      hasAC: false,
      basePrice: 999,
      weekendPrice: 1199,
      featuredImage: "/images/room-standard-1.jpg",
      gallery: [
        "/images/room-standard-1.jpg",
        "/images/room-couple-ac.jpg",
        "/images/building-facade.jpg"
      ],
      description: "An economical, spotless option for travelers who love fresh natural sea breezes. Equipped with high-speed ceiling fans, wide windows for cross-ventilation, a solid wood queen bed, wall-mounted television, and a pristine private bathroom with hot water available around the clock.",
      highlights: [
        "Starting at just ₹999/night",
        "High-Speed Ceiling Fan Ventilation",
        "24x7 Hot Water Supply",
        "In-Room Entertainment TV"
      ],
      amenities: [
        "Ceiling Fan",
        "High-Speed Wi-Fi",
        "24x7 Hot Water",
        "Flat-Screen TV",
        "Queen Bed",
        "Private Attached Bathroom",
        "Complimentary Morning Tea/Coffee",
        "Safe Parking",
        "Luggage Table"
      ],
      specs: {
        roomSize: "165 sq.ft",
        bed: "Queen Size Wooden Bed",
        bathroom: "Attached Western Bathroom",
        view: "Courtyard / Street View",
        occupancy: "2 Adults"
      }
    },
    {
      id: "family-suite",
      slug: "family-suite",
      name: "Family Suite Room (AC)",
      tagline: "Spacious multi-bed setup designed for families & friend groups",
      type: "Family",
      capacity: "3 - 4 Members",
      maxGuests: 4,
      bedType: "2 Separate Beds (Queen + Single/Double setup)",
      hasAC: true,
      basePrice: 1999,
      weekendPrice: 2399,
      featuredImage: "/images/room-family-suite.jpg",
      gallery: [
        "/images/room-family-suite.jpg",
        "/images/room-couple-ac.jpg",
        "/images/building-facade.jpg"
      ],
      description: "Traveling with family or close companions? Our Family Suite offers generous floor space, multiple comfortable wooden beds, split air conditioning, and plenty of wardrobe/luggage space. Conveniently located on ECR, it is an easy base for visiting Auroville and Pondicherry without having to split your group into separate hotels.",
      highlights: [
        "Accommodates up to 4 Guests",
        "Two Independent Wooden Beds",
        "Powerful Air Conditioning",
        "Ideal for Families with Children"
      ],
      amenities: [
        "Air Conditioning",
        "Multiple Beds",
        "High-Speed Wi-Fi",
        "24x7 Hot Water",
        "Flat-Screen TV",
        "Spacious Layout",
        "Complimentary Tea/Coffee",
        "Secure Parking for Cars",
        "Rental Bike Help"
      ],
      specs: {
        roomSize: "260 sq.ft",
        bed: "1 Queen Bed + 1 Single Bed (Extra mattress on request)",
        bathroom: "Spacious En-Suite with Hot Water",
        view: "Upper floor balcony view",
        occupancy: "3 - 4 Guests"
      }
    }
  ] as Room[],

  facilities: [
    {
      id: "wifi",
      title: "High-Speed Wi-Fi",
      description: "Stay connected seamlessly with fast internet for remote work and streaming.",
      icon: "Wifi",
      isHighlight: true
    },
    {
      id: "tv",
      title: "Flat-Screen TV",
      description: "Enjoy your favourite cable shows, sports, and movies in every room.",
      icon: "Tv",
      isHighlight: true
    },
    {
      id: "parking",
      title: "Safe & Secure Parking",
      description: "Dedicated on-site parking spaces for cars and two-wheelers with night security.",
      icon: "Car",
      isHighlight: true
    },
    {
      id: "hot-water",
      title: "24x7 Hot Water",
      description: "Round-the-clock solar and geyser hot water for comfortable, refreshing baths.",
      icon: "ShowerHead",
      isHighlight: true
    },
    {
      id: "tea-coffee",
      title: "Complimentary Tea & Coffee",
      description: "Wake up to freshly prepared morning tea or authentic South Indian coffee.",
      icon: "Coffee",
      isHighlight: false
    },
    {
      id: "rental-bikes",
      title: "Rental Bike Assistance",
      description: "Hassle-free scooter and geared bike rentals arranged right at the front desk.",
      icon: "Bike",
      isHighlight: true
    },
    {
      id: "front-desk",
      title: "24-Hour Front Desk",
      description: "Warm, attentive local staff available at all hours for assistance and travel tips.",
      icon: "Clock",
      isHighlight: false
    },
    {
      id: "location",
      title: "Opposite McDonald's",
      description: "Unbeatable convenience on ECR with 24-hour food, bakeries, and ATMs steps away.",
      icon: "MapPin",
      isHighlight: false
    }
  ] as Amenity[],

  timeline: [
    {
      name: "McDonald's ECR Main Road",
      category: "Dining",
      distance: "30 meters",
      timeByFoot: "30 seconds",
      timeByVehicle: "Directly opposite",
      description: "Right across the street from PR Roza Grand. Perfect for quick burgers, coffee, breakfasts, and easy late-night dining.",
      image: "/images/building-facade.jpg",
      mapQuery: "McDonald's Chinna Mudhaliyar Chavadi ECR"
    },
    {
      name: "Auroville Beach (Kottakuppam)",
      category: "Beach",
      distance: "1.2 km",
      timeByFoot: "12 mins walk",
      timeByVehicle: "3 mins drive",
      description: "Golden sand beach along the Bay of Bengal. Renowned for spectacular sunrises, gentle waves, and peaceful morning strolls.",
      image: "/images/auroville-beach.jpg",
      mapQuery: "Auroville Beach Tamil Nadu"
    },
    {
      name: "Serenity Beach & Surf Schools",
      category: "Beach",
      distance: "2.5 km",
      timeByFoot: "25 mins walk",
      timeByVehicle: "5 mins drive",
      description: "Famous for its picturesque rocky pier, vibrant surf schools, seaside shacks, and panoramic ocean views.",
      image: "/images/auroville-beach.jpg",
      mapQuery: "Serenity Beach Pondicherry"
    },
    {
      name: "Matrimandir & Auroville Visitors Centre",
      category: "Culture",
      distance: "6.5 km",
      timeByVehicle: "10 - 12 mins drive",
      description: "The architectural jewel of Auroville. Surrounded by peaceful shaded gardens, boutique craft stores, organic cafes, and cycling tracks.",
      image: "/images/matrimandir.jpg",
      mapQuery: "Matrimandir Auroville"
    },
    {
      name: "Pondicherry French Quarter (White Town)",
      category: "Heritage",
      distance: "6.8 km",
      timeByVehicle: "15 mins drive",
      description: "Mustard-yellow French-colonial villas, vintage teal shutters, bougainvillea archways, Parisian bakeries, and the iconic Rock Promenade Beach.",
      image: "/images/french-quarter.jpg",
      mapQuery: "White Town Pondicherry"
    }
  ] as Attraction[],

  dayPlan: [
    {
      period: "Morning",
      time: "06:00 AM – 10:00 AM",
      title: "Sunrise at Auroville Beach & Filter Coffee",
      description: "Walk or ride 3 minutes to Auroville Beach to catch the sunrise painting the Coromandel sky in gold and violet. Return to PR Roza Grand for freshly brewed tea/coffee, then plan your day.",
      badge: "Coastal Serenity"
    },
    {
      period: "Afternoon",
      time: "11:00 AM – 04:00 PM",
      title: "Explore the Soul of Auroville",
      description: "Hop on a rented scooter from our front desk. Head down tree-canopied paths to the Matrimandir gardens, browse handmade pottery, and indulge in wood-fired pizza and sourdough at Auroville's charming forest cafes.",
      badge: "Culture & Cuisine"
    },
    {
      period: "Evening",
      time: "05:00 PM – 10:00 PM",
      title: "Sunset at White Town & Seaside Dining",
      description: "Take a scenic 15-minute coastal ride to Pondicherry's French Quarter. Walk along the Promenade, feel the ocean spray, explore colonial streets, and return to peaceful AC comfort at PR Roza Grand.",
      badge: "Heritage Promenade"
    }
  ],

  reviews: [
    {
      id: "rev-1",
      author: "Anand & Deepa",
      origin: "Bengaluru",
      rating: 5,
      date: "September 2026",
      comment: "PR Roza Grand is in the best spot on ECR. Directly opposite McDonald's so grabbing quick food is effortless. The room was super clean, AC was chilled, and the host arranged a rental scooter within 15 minutes. We will definitely stay here again!",
      stayType: "Couple Stay"
    },
    {
      id: "rev-2",
      author: "Rachel Moreau",
      origin: "Lyon, France",
      rating: 5,
      date: "August 2026",
      comment: "A lovely and very quiet guest house just minutes from Auroville beach. The 24/7 hot water and clean linens made our stay so pleasant. The staff is exceptionally helpful with local directions.",
      stayType: "Foreign Tourist"
    },
    {
      id: "rev-3",
      author: "Karthik Subramanian & Family",
      origin: "Chennai",
      rating: 5,
      date: "July 2026",
      comment: "Booked the Family Suite for 4 of us. Very spacious with safe car parking right in the compound. ECR location made it very easy to drive to both Matrimandir and Pondicherry city. Excellent value for money.",
      stayType: "Family Trip"
    }
  ] as ReviewItem[],

  faqs: [
    {
      category: "booking",
      question: "What are your check-in and check-out timings?",
      answer: "Check-in time is from 12:00 PM onwards, and check-out is by 11:30 AM. Early check-in or late check-out is subject to room availability upon request."
    },
    {
      category: "booking",
      question: "How do I book a room at PR Roza Grand?",
      answer: "You can book directly by tapping our WhatsApp button or calling +91 9360222305. We confirm your reservation instantly with zero platform booking surcharges."
    },
    {
      category: "stay",
      question: "Do you have safe parking for cars and two-wheelers?",
      answer: "Yes! We provide safe and secure parking space right on our premises for our resident guests' cars, bikes, and rental scooters."
    },
    {
      category: "stay",
      question: "Can you help arrange rental bikes or scooters?",
      answer: "Yes, our front desk assists guests with booking rental two-wheelers (scooters and motorcycles) at competitive local daily rates to explore Auroville and Pondicherry."
    },
    {
      category: "policies",
      question: "What is your policy on smoking, alcohol, and pets?",
      answer: "To ensure a peaceful and family-friendly environment, smoking and alcohol consumption are strictly prohibited on premises. Pets are also not allowed."
    },
    {
      category: "policies",
      question: "What is your cancellation policy?",
      answer: "A cancellation fee of 50% of the total booking tariff applies if you cancel your reservation before your check-in date."
    },
    {
      category: "location",
      question: "How far is PR Roza Grand from Auroville Beach and the Matrimandir?",
      answer: "We are just 1.2 km (3 minutes drive / 12 minutes walk) from Auroville Beach, and roughly 6.5 km (10-12 minutes drive) from the Matrimandir Visitors Centre."
    },
    {
      category: "stay",
      question: "Are food and dining options available nearby?",
      answer: "McDonald's is directly opposite our guest house (30 seconds walk). Additionally, there are numerous coastal seafood restaurants, Chettinad messes, French cafes, bakeries, and grocery stores along the ECR stretch within 2 to 5 minutes."
    }
  ] as FaqItem[],

  analytics: {
    googleAnalyticsId: "G-PRROZAGRAND" // Placeholder GA4 ID
  }
};

/**
 * Generates an instant WhatsApp message link
 */
export function buildWhatsAppLink(details: {
  checkIn?: string;
  checkOut?: string;
  guests?: string | number;
  roomType?: string;
  name?: string;
  customMessage?: string;
}) {
  const phone = GUEST_HOUSE_DATA.contact.whatsapp.replace(/\D/g, "");
  const lines = [
    `*Booking Enquiry for PR ROZA GRAND*`,
    `Hello! I would like to check room availability for a stay.`
  ];

  if (details.roomType) lines.push(`🛏️ *Room Type:* ${details.roomType}`);
  if (details.checkIn) lines.push(`📅 *Check-in:* ${details.checkIn}`);
  if (details.checkOut) lines.push(`📅 *Check-out:* ${details.checkOut}`);
  if (details.guests) lines.push(`👥 *Guests:* ${details.guests}`);
  if (details.name) lines.push(`👤 *Guest Name:* ${details.name}`);
  if (details.customMessage) lines.push(`💬 *Note:* ${details.customMessage}`);

  lines.push(`\nPlease share availability and the tariff for these dates. Thank you!`);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phone}?text=${text}`;
}
