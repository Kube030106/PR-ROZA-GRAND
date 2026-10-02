import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Waves, Sun, Compass } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function IntroSection() {
  const pillars = [
    {
      icon: Waves,
      title: 'Steps from the Coast',
      desc: '1.2 km to Auroville Beach. Walk to sunrise, wade in calm Bay of Bengal waters, and return refreshed.',
    },
    {
      icon: Compass,
      title: 'Perfectly Located',
      desc: 'On ECR opposite McDonald\'s — effortless access to Auroville, Pondicherry French Quarter, and Matrimandir.',
    },
    {
      icon: Sun,
      title: 'Honest Tamil Hospitality',
      desc: 'Spotless rooms, 24x7 hot water, free Wi-Fi, safe parking, and a host who feels like family.',
    },
  ];

  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="py-20 sm:py-28 bg-[var(--bg-base)] text-[var(--text-primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Top editorial split ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 sm:mb-24">

          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <div className="section-label mb-5">
              Welcome to Auroville
            </div>

            <h2
              id="intro-heading"
              className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-[1.1] tracking-tight"
            >
              Where coastal quietude meets{' '}
              <em className="not-italic text-[var(--ocean-deep)] dark:text-[var(--accent-primary)]">
                honest Tamil hospitality.
              </em>
            </h2>

            <div className="gold-line mt-6 mb-7" />

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {GUEST_HOUSE_DATA.about}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/rooms"
                className="btn-ocean inline-flex items-center gap-2.5 px-7 py-3.5 text-sm"
              >
                <span>View Our Rooms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/policies"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-[var(--border-medium)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-200"
              >
                Guest Policies
              </Link>
            </div>
          </div>

          {/* Right: Image with decorative frame */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative background block */}
            <div className="absolute -top-5 -right-5 w-3/4 h-full rounded-3xl bg-[var(--ocean-soft)] dark:bg-[var(--french-teal-soft)] -z-10" />

            <div className="relative overflow-hidden coastal-arch shadow-2xl">
              <Image
                src="/images/building-facade.jpg"
                alt="PR Roza Grand Guest House exterior — ECR Main Road, Auroville"
                width={620}
                height={760}
                className="w-full h-[460px] sm:h-[520px] object-cover hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/70 via-transparent to-transparent" />

              {/* Caption overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-heading text-2xl font-medium">PR Roza Grand</p>
                <p className="text-sm text-white/70 mt-1">99, ECR Main Road · Auroville, Tamil Nadu</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl px-4 py-3.5 rounded-2xl flex items-center gap-3 animate-float">
              <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900" />
              <div>
                <p className="text-xs font-bold text-[var(--text-primary)]">Open 24/7 for Guests</p>
                <p className="text-[10px] text-[var(--text-muted)]">Immediate Check-in Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Three Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group relative bg-[var(--bg-surface)] rounded-3xl p-7 sm:p-8 border border-[var(--border-subtle)] hover-lift overflow-hidden"
              >
                {/* Subtle ocean tint on hover */}
                <div className="absolute inset-0 bg-[var(--ocean-deep)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 rounded-3xl" />

                <div className="w-12 h-12 rounded-2xl bg-[var(--ocean-soft)] dark:bg-[var(--french-teal-soft)] text-[var(--accent-primary)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-[var(--text-primary)] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--sunset-gold)] to-[var(--accent-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
