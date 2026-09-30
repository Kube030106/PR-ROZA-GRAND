'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Sparkles, MessageCircle } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'rooms' | 'exterior' | 'surroundings';
  caption: string;
  isRealPhoto: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'facade',
    src: '/images/building-facade.jpg',
    title: 'PR Roza Grand Facade',
    category: 'exterior',
    caption: 'Front exterior view of PR Roza Grand with balconies and purple & gold signage on ECR.',
    isRealPhoto: true,
  },
  {
    id: 'couple-ac',
    src: '/images/room-couple-ac.jpg',
    title: 'Couple AC Room',
    category: 'rooms',
    caption: 'Air-conditioned bedroom with sky-blue accent wall and wooden queen bed.',
    isRealPhoto: true,
  },
  {
    id: 'standard-room',
    src: '/images/room-standard-1.jpg',
    title: 'Comfort Queen Room with TV',
    category: 'rooms',
    caption: 'Queen bed, flat screen TV, side table, and en-suite hot water bathroom.',
    isRealPhoto: true,
  },
  {
    id: 'family-suite',
    src: '/images/room-family-suite.jpg',
    title: 'Family Suite Setup',
    category: 'rooms',
    caption: 'Spacious layout with multiple wooden beds, AC, and bright natural lighting.',
    isRealPhoto: true,
  },
  {
    id: 'pamphlet',
    src: '/images/pamphlet-poster.jpg',
    title: 'Official Tariff Flyer',
    category: 'exterior',
    caption: 'Official guest house flyer detailing amenities, tariffs, and contact info.',
    isRealPhoto: true,
  },
  {
    id: 'matrimandir',
    src: '/images/matrimandir.jpg',
    title: 'Auroville Matrimandir',
    category: 'surroundings',
    caption: 'The golden geodesic dome and tranquil lotus pond of Auroville (10 mins away).',
    isRealPhoto: false,
  },
  {
    id: 'beach',
    src: '/images/auroville-beach.jpg',
    title: 'Auroville Beach Sunrise',
    category: 'surroundings',
    caption: 'Pristine coastal sunrise along Auroville Beach, just 3 minutes from our doorstep.',
    isRealPhoto: false,
  },
  {
    id: 'french-quarter',
    src: '/images/french-quarter.jpg',
    title: 'French Quarter White Town',
    category: 'surroundings',
    caption: 'Heritage mustard-yellow walls, teal shutters, and bougainvillea (15 mins away).',
    isRealPhoto: false,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'exterior' | 'surroundings'>('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const directWhatsAppUrl = buildWhatsAppLink({
    customMessage: "Hello PR Roza Grand, I saw your photo gallery and would like to inquire about booking."
  });

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
            Visual Tour
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            Photo Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Real guest rooms, building exterior, and the captivating coastal surroundings of Auroville and Pondicherry.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'rooms', label: 'Guest Rooms' },
            { id: 'exterior', label: 'Building & Facade' },
            { id: 'surroundings', label: 'Auroville & Coast' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === tab.id
                  ? 'bg-[var(--roza-purple)] text-white shadow-sm'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {item.isRealPhoto && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-600 text-white shadow">
                      Real Property Photo
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[var(--bg-surface)] p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-bold text-[var(--text-primary)]">
              Like what you see? Reserve directly.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              Contact our Auroville front desk directly on WhatsApp for live room availability and best tariffs.
            </p>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-[var(--roza-purple)] hover:bg-[var(--french-teal)] transition-colors shadow-md text-sm flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
