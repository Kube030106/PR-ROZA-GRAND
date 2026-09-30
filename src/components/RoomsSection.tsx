import Image from 'next/image';
import Link from 'next/link';
import { Users, Wind, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function RoomsSection() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="py-20 bg-[var(--bg-surface)] text-[var(--text-primary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
              Accommodations
            </span>
            <h2
              id="rooms-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Curated rooms for couples and families.
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
              Every room at PR Roza Grand is spotless, secure, and thoughtfully furnished with en-suite hot water bathrooms, high-speed Wi-Fi, and in-room TV.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors group"
            >
              <span>View Full Room Comparison</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {GUEST_HOUSE_DATA.rooms.map((room) => {
            const checkDatesUrl = buildWhatsAppLink({
              roomType: room.name,
              customMessage: `Hello, I'd like to check dates and availability for the ${room.name}.`
            });

            return (
              <article
                key={room.id}
                className="group flex flex-col bg-[var(--bg-base)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden hover-lift shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Photo Frame (Arched Heritage styling) */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                  <Image
                    src={room.featuredImage}
                    alt={`${room.name} at PR Roza Grand Guest House`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Room Type Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-black/40 text-white border border-white/20">
                      {room.type} Room
                    </span>
                  </div>

                  {/* AC / Non-AC Pill */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        room.hasAC
                          ? 'bg-[var(--french-teal)] text-white'
                          : 'bg-[var(--french-yellow)] text-gray-900 font-bold'
                      }`}
                    >
                      {room.hasAC ? 'Air Conditioned' : 'Non-AC Fan'}
                    </span>
                  </div>

                  {/* Capacity badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/95 font-medium">
                    <Users className="w-3.5 h-3.5" />
                    <span>{room.capacity}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      <Link href={`/rooms/${room.slug}`}>
                        {room.name}
                      </Link>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 mb-5">
                    {room.description}
                  </p>

                  {/* Features highlights */}
                  <div className="space-y-2 mb-6 text-xs text-[var(--text-secondary)]">
                    {room.highlights.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and Action row */}
                  <div className="mt-auto pt-5 border-t border-[var(--border-subtle)] flex items-end justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[var(--charcoal-muted)] block">
                        Starting from
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--roza-purple)] dark:text-[var(--roza-gold)]">
                          ₹{room.basePrice}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)]">
                          / night
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="px-3.5 py-2 rounded-xl text-xs font-medium border border-[var(--border-medium)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
                      >
                        Details
                      </Link>
                      <a
                        href={checkDatesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--roza-purple)] text-white hover:bg-[var(--french-teal)] transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Check Dates</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Weekend tariff footnote */}
        <div className="mt-10 p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-secondary)] gap-3">
          <p>
            * {GUEST_HOUSE_DATA.policies.weekendNotice}. Check-in: 12:00 PM | Check-out: 11:30 AM.
          </p>
          <Link
            href="/policies"
            className="text-[var(--accent-primary)] font-medium underline underline-offset-4 hover:text-[var(--accent-hover)]"
          >
            Review all house policies
          </Link>
        </div>
      </div>
    </section>
  );
}
