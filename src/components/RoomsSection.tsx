import Image from 'next/image';
import Link from 'next/link';
import { Users, Check, MessageCircle, ArrowRight, Wind, Thermometer } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function RoomsSection() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="py-20 sm:py-28 bg-[var(--bg-surface)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Accommodations</div>
            <h2
              id="rooms-heading"
              className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-[1.1]"
            >
              Find your perfect stay.
            </h2>
            <div className="gold-line mt-5 mb-5" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Every room at PR Roza Grand is spotless, secure, and thoughtfully furnished — with private en-suite bathrooms, 24x7 hot water, and high-speed Wi-Fi.
            </p>
          </div>

          <Link
            href="/rooms"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-gold)] transition-colors group"
          >
            <span>Compare All Rooms</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Room Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {GUEST_HOUSE_DATA.rooms.map((room, idx) => {
            const checkDatesUrl = buildWhatsAppLink({
              roomType: room.name,
              customMessage: `I'd like to check availability for the ${room.name}.`
            });

            const isFeatured = idx === 0;

            return (
              <article
                key={room.id}
                className={`group flex flex-col bg-[var(--bg-base)] rounded-3xl border overflow-hidden hover-lift transition-all duration-300 ${
                  isFeatured
                    ? 'border-[var(--sunset-gold)] shadow-[0_0_0_1px_var(--sunset-gold)] md:col-span-2 lg:col-span-1'
                    : 'border-[var(--border-subtle)] shadow-sm'
                }`}
              >
                {/* ── Image ── */}
                <div className="relative h-64 sm:h-72 overflow-hidden img-hover-zoom">
                  <Image
                    src={room.featuredImage}
                    alt={`${room.name} at PR Roza Grand Guest House, Auroville`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {isFeatured && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[var(--sunset-gold)] text-[var(--ocean-deep)] tracking-wide">
                        POPULAR
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md bg-black/40 text-white border border-white/15">
                      {room.type} Room
                    </span>
                  </div>

                  {/* AC Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold backdrop-blur-md ${
                      room.hasAC
                        ? 'bg-[var(--ocean-deep)] text-white'
                        : 'bg-[var(--sunset-gold)] text-[var(--ocean-deep)]'
                    }`}>
                      {room.hasAC ? <Thermometer className="w-3 h-3" /> : <Wind className="w-3 h-3" />}
                      {room.hasAC ? 'Air Conditioned' : 'Natural Breeze'}
                    </span>
                  </div>

                  {/* Capacity */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <Users className="w-3.5 h-3.5 text-[var(--sunset-gold)]" />
                    {room.capacity}
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-tight mb-1">
                    <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] italic mb-4">{room.tagline}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {room.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA row */}
                  <div className="mt-auto pt-5 border-t border-[var(--border-subtle)] flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">From</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="font-heading text-3xl font-semibold text-[var(--ocean-deep)] dark:text-[var(--accent-primary)]">
                          ₹{room.basePrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">/night</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-medium)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] text-[var(--text-primary)] transition-all duration-200"
                      >
                        Details
                      </Link>
                      <a
                        href={checkDatesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Check Dates
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Policies footnote ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
          <p>
            ✦ Check-in 12:00 PM · Check-out 11:30 AM · {GUEST_HOUSE_DATA.policies.weekendNotice}
          </p>
          <Link
            href="/policies"
            className="text-[var(--accent-primary)] font-semibold underline underline-offset-4 hover:text-[var(--accent-gold)] transition-colors flex-shrink-0"
          >
            View All Policies →
          </Link>
        </div>
      </div>
    </section>
  );
}
