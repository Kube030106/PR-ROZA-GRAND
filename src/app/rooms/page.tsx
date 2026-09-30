import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Check, MessageCircle, ArrowRight, ShieldCheck, Sparkles, Wind } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export const metadata: Metadata = {
  title: 'Rooms & Tariffs | Couple & Family Stays in Auroville',
  description:
    'Browse our clean, air-conditioned and non-AC rooms at PR ROZA GRAND on ECR Auroville. Couple rooms from ₹999/night, Family Suites from ₹1999/night with 24/7 hot water and free Wi-Fi.',
};

export default function RoomsPage() {
  return (
    <div className="pt-28 pb-20 bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
            Accommodation Collection
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            Rooms & Tariffs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Spotless, quiet rooms tailored for couples, families, and solo travellers. Each room includes private hot-water bathrooms, in-room television, high-speed Wi-Fi, and safe on-site parking.
          </p>
        </div>

        {/* Detailed Room Cards */}
        <div className="space-y-12 mb-20">
          {GUEST_HOUSE_DATA.rooms.map((room, index) => {
            const isReversed = index % 2 === 1;
            const waBookingUrl = buildWhatsAppLink({
              roomType: room.name,
              customMessage: `Hello, I would like to book the ${room.name} at PR Roza Grand.`
            });

            return (
              <article
                key={room.id}
                id={room.slug}
                className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Photo Column */}
                  <div className={`lg:col-span-6 relative h-80 sm:h-96 w-full overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                    <Image
                      src={room.featuredImage}
                      alt={`${room.name} at PR Roza Grand`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-black/50 text-white border border-white/20">
                        {room.type} Room
                      </span>
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                          room.hasAC
                            ? 'bg-[var(--french-teal)] text-white'
                            : 'bg-[var(--french-yellow)] text-gray-900 font-bold'
                        }`}
                      >
                        {room.hasAC ? 'AC Room' : 'Non-AC Fan'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 backdrop-blur-md bg-black/60 text-white px-3.5 py-1.5 rounded-full text-xs flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                        {room.name}
                      </h2>
                    </div>

                    <p className="text-xs uppercase tracking-wider text-[var(--accent-primary)] font-semibold mb-3">
                      {room.tagline}
                    </p>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Room Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs">
                      <div>
                        <span className="text-[11px] text-[var(--charcoal-muted)] uppercase block">Bed Type</span>
                        <strong className="text-[var(--text-primary)]">{room.specs.bed}</strong>
                      </div>
                      <div>
                        <span className="text-[11px] text-[var(--charcoal-muted)] uppercase block">Room Size</span>
                        <strong className="text-[var(--text-primary)]">{room.specs.roomSize}</strong>
                      </div>
                      <div>
                        <span className="text-[11px] text-[var(--charcoal-muted)] uppercase block">Hot Water</span>
                        <strong className="text-[var(--text-primary)]">24x7 Solar/Geyser</strong>
                      </div>
                      <div>
                        <span className="text-[11px] text-[var(--charcoal-muted)] uppercase block">Occupancy</span>
                        <strong className="text-[var(--text-primary)]">{room.specs.occupancy}</strong>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[var(--charcoal-muted)] block">
                          Base Tariff (Weekday)
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-heading text-3xl font-bold text-[var(--roza-purple)] dark:text-[var(--roza-gold)]">
                            ₹{room.basePrice}
                          </span>
                          <span className="text-xs text-[var(--text-secondary)]">/ night</span>
                        </div>
                        <span className="text-[11px] text-[var(--charcoal-muted)] block">
                          Weekend: ₹{room.weekendPrice} / night
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/rooms/${room.slug}`}
                          className="px-4 py-2.5 rounded-xl border border-[var(--border-medium)] text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors"
                        >
                          View Details
                        </Link>
                        <a
                          href={waBookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[var(--roza-purple)] hover:bg-[var(--french-teal)] transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          <span>Book on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Room Comparison Table */}
        <div className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-10 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-2">
            Side-by-Side Room Comparison
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Compare features, bed sizes, and amenities to choose the right room for your trip.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] text-xs uppercase tracking-wider text-[var(--charcoal-muted)]">
                  <th className="py-3 px-4">Feature</th>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <th key={r.id} className="py-3 px-4">{r.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-xs sm:text-sm">
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">Base Price</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 font-bold text-[var(--roza-purple)] dark:text-[var(--roza-gold)]">
                      ₹{r.basePrice} / night
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">Weekend Tariff</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 text-[var(--text-secondary)]">
                      ₹{r.weekendPrice} / night
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">Climate Control</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 text-[var(--text-secondary)]">
                      {r.hasAC ? 'Split Air Conditioning' : 'High-Speed Ceiling Fan'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">Capacity</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 text-[var(--text-secondary)]">{r.capacity}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">Bed Setup</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 text-[var(--text-secondary)]">{r.bedType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">Hot Water (24x7)</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">Included</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">High-Speed Wi-Fi</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">Free</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">Safe Car/Bike Parking</td>
                  {GUEST_HOUSE_DATA.rooms.map((r) => (
                    <td key={r.id} className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">Free On-site</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
