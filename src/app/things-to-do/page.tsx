import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, MapPin, Bike, Footprints, Clock, ArrowRight, Sun, Coffee } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export const metadata: Metadata = {
  title: 'Things to Do in Auroville & Pondicherry | Travel Guide',
  description:
    'Discover top attractions near PR ROZA GRAND on ECR Auroville: Matrimandir, Auroville Beach, Serenity Beach surfing, and Pondicherry French Quarter White Town.',
};

export default function ThingsToDoPage() {
  const attractions = [
    {
      title: 'Auroville Matrimandir & Gardens',
      distance: '6.5 km from PR Roza Grand (10-12 mins ride)',
      category: 'Spiritual & Architecture',
      image: '/images/matrimandir.jpg',
      description:
        'The soul of the international township of Auroville. A monumental golden geodesic sphere set amidst tranquil lotus ponds and 12 curated gardens. Visit the Visitors Centre for informative exhibitions, boutique craft stores, and serene forest cafes.',
      tips: 'Book passes for the inner chamber online at least 3-5 days in advance. Viewpoint passes are readily available at the Visitors Centre.',
    },
    {
      title: 'Auroville Beach (Kottakuppam)',
      distance: '1.2 km from PR Roza Grand (3 mins drive / 12 mins walk)',
      category: 'Coastal Nature & Sunrise',
      image: '/images/auroville-beach.jpg',
      description:
        'Just moments from our guest house on ECR, this expansive sandy stretch along the Bay of Bengal offers dramatic morning sunrises, cooling sea breezes, and peaceful morning jogging along the surf.',
      tips: 'Best visited at dawn (05:45 AM - 07:00 AM) to experience the sunrise painting the Coromandel coast.',
    },
    {
      title: 'French Quarter & White Town Pondicherry',
      distance: '6.8 km from PR Roza Grand (15 mins drive)',
      category: 'Colonial Heritage & Cuisine',
      image: '/images/french-quarter.jpg',
      description:
        'Pondicherry’s historic French Quarter features distinctive mustard-yellow colonial villas, vintage teal shutters, blooming bougainvillea, authentic Parisian bakeries, art galleries, and the breezy seaside Promenade.',
      tips: 'Rent a scooter from our front desk to easily navigate the heritage grid streets and park along the beachfront.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
            Local Explorer&apos;s Guide
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            Things to Do Around Auroville
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Positioned directly along ECR at Chinna Mudhaliyar Chavadi, PR Roza Grand is your ideal springboard to explore the tranquil green forests of Auroville and the vibrant seaside streets of Pondicherry.
          </p>
        </div>

        {/* Feature Attractions List */}
        <div className="space-y-12 mb-20">
          {attractions.map((spot, index) => (
            <article
              key={index}
              className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-72 sm:h-96 w-full overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-black/60 text-white border border-white/20">
                      {spot.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{spot.distance}</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                    {spot.title}
                  </h2>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {spot.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] mb-6">
                    <strong className="text-[var(--text-primary)] block mb-1">Local Insider Tip:</strong>
                    {spot.tips}
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)] hover:underline"
                  >
                    <span>Get directions on Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bike Rental Assistance Banner */}
        <div className="bg-[var(--roza-purple)] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <Bike className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              Rent a Bike Directly at Our Front Desk
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
              Exploring Auroville and White Town is best experienced on two wheels. We arrange reliable scooters and motorbikes at fair local daily rates for our resident guests.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={`https://wa.me/${GUEST_HOUSE_DATA.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello PR Roza Grand, I would like to inquire about rental bikes and room booking.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-white text-[var(--roza-purple)] hover:bg-[var(--roza-gold-light)] transition-colors shadow-md text-sm"
            >
              <span>Inquire on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
