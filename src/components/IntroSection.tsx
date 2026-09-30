import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Home, Sun } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function IntroSection() {
  const keyPoints = [
    {
      icon: Compass,
      title: "Prime Coastal ECR Gateway",
      description: "Positioned directly on the scenic East Coast Road opposite McDonald's, offering effortless connectivity to both Auroville's serene center and Pondicherry's French Quarter without city traffic hassles."
    },
    {
      icon: Home,
      title: "Hand-Crafted Homely Comfort",
      description: "Spotless AC and non-AC rooms equipped with 24x7 hot water, high-speed Wi-Fi, fresh linens, secure car parking, and an attentive 24-hour host ready to make your holiday effortless."
    },
    {
      icon: Sun,
      title: "Authentic Coastal Living",
      description: "Wake up to morning sea breezes, walk to Auroville Beach for sunrise, rent a bike at the front desk, and return to quiet, family-friendly sanctuary after sunset."
    }
  ];

  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="py-16 sm:py-24 bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Confident Statement & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-3 block">
              Welcome to Auroville
            </span>
            <h2
              id="intro-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]"
            >
              Where coastal quietude meets honest Tamil hospitality.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {GUEST_HOUSE_DATA.about}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[var(--roza-purple)] hover:bg-[var(--french-teal)] transition-colors shadow-sm"
              >
                <span>Explore Our Rooms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/policies"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-medium text-[var(--text-primary)] border border-[var(--border-medium)] hover:bg-[var(--bg-surface)] transition-colors"
              >
                <span>Read Guest Policies</span>
              </Link>
            </div>
          </div>

          {/* Right Image: Real Exterior Building with Arched Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="relative overflow-hidden coastal-arch shadow-2xl border-4 border-white dark:border-[var(--bg-card)]">
                <Image
                  src="/images/building-facade.jpg"
                  alt="PR Roza Grand Guest House exterior building and balconies on ECR Auroville"
                  width={600}
                  height={800}
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-heading text-lg font-semibold">PR Roza Grand Facade</p>
                  <p className="text-xs text-white/80">99, ECR Main Road, Auroville</p>
                </div>
              </div>

              {/* Decorative Accent Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-xl p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="text-xs font-semibold leading-tight">
                  <p>Open 24/7 for Guests</p>
                  <p className="text-[10px] text-[var(--text-secondary)] font-normal">Immediate Check-in Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Key Points */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border-subtle)] hover-lift"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--french-teal-soft)] text-[var(--accent-primary)] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
