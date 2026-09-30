import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { AvailabilityBar } from './AvailabilityBar';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to PR Roza Grand Guest House"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-12 sm:pb-16 overflow-hidden bg-neutral-900"
    >
      {/* Background Image with layered gradient overlays for legibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auroville-beach.jpg"
          alt="Coromandel coastal sunrise along Auroville Beach"
          fill
          priority
          className="object-cover object-center scale-105 animate-fade-in"
          sizes="100vw"
          quality={90}
        />
        {/* Coastal French Colonial Tinted Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-black/50 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--roza-purple)]/60 via-transparent to-black/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <div className="max-w-3xl animate-hero-entrance">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-medium mb-6">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>ECR Main Road, Opposite McDonald&apos;s, Auroville</span>
          </div>

          {/* Large Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-md">
            Quiet coastal comfort, steps from Auroville.
          </h1>

          {/* One-line subtext */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl drop-shadow">
            Spotless couple and family rooms on East Coast Road with 24/7 hot water, high-speed Wi-Fi, safe parking, and rental bike assistance.
          </p>

          {/* Tariff Pill Indicator */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/85">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Rooms from <strong>₹999 / night</strong></span>
            </div>
            <span className="hidden sm:inline text-white/40">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>3 Mins to Auroville Beach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Availability Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-hero-bar mt-6">
        <AvailabilityBar />
      </div>
    </section>
  );
}
