import Image from 'next/image';
import { MapPin, Navigation, ExternalLink, Footprints, Car } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function LocationTimeline() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="py-20 bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
            Prime Coromandel Location
          </span>
          <h2
            id="location-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            A walking-distance timeline to the coast & cafes.
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            Positioned along the East Coast Road at Chinna Mudhaliyar Chavadi, right across from McDonald&apos;s. Step out for a beach sunrise or cruise along shade-dappled avenues toward the Matrimandir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--french-teal)]/30 space-y-8">
              {GUEST_HOUSE_DATA.timeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Icon */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--bg-surface)] border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] text-xs font-bold shadow-sm">
                    {index + 1}
                  </span>

                  <div className="bg-[var(--bg-surface)] p-5 sm:p-6 rounded-3xl border border-[var(--border-subtle)] shadow-sm hover-lift">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        {item.timeByFoot && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                            <Footprints className="w-3 h-3" />
                            {item.timeByFoot}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--french-teal-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                          <Car className="w-3 h-3" />
                          {item.timeByVehicle}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[var(--charcoal-muted)] pt-3 border-t border-[var(--border-subtle)]">
                      <span className="font-medium text-[var(--accent-primary)]">
                        Distance: {item.distance}
                      </span>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--accent-primary)] underline underline-offset-4"
                      >
                        <span>View on map</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card & Map Link */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-[var(--bg-surface)] p-6 sm:p-7 rounded-3xl border border-[var(--border-subtle)] shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[var(--french-yellow-light)] text-[var(--french-yellow)]">
                  <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                    PR Roza Grand Address
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">Chinna Mudhaliyar Chavadi, Auroville</p>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-[var(--text-secondary)] space-y-1.5 mb-6 p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <p className="font-semibold text-[var(--text-primary)]">No. 99, ECR Main Road</p>
                <p>Opposite to McDonald&apos;s</p>
                <p>Chinna Mudhaliyar Chavadi, Auroville</p>
                <p>Tamil Nadu – 605 101, India</p>
                <p className="text-[11px] text-[var(--accent-primary)] font-medium pt-1">
                  Landmark: Exactly opposite McDonald&apos;s on East Coast Road
                </p>
              </div>

              {/* Real location map button */}
              <a
                href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-[var(--roza-purple)] hover:bg-[var(--french-teal)] transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--roza-purple)]"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Open in Google Maps</span>
              </a>

              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] text-center">
                <p className="text-xs text-[var(--charcoal-muted)]">
                  Need navigation assistance? Call our front desk at{' '}
                  <a
                    href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                    className="font-semibold text-[var(--text-primary)] underline hover:text-[var(--accent-primary)]"
                  >
                    {GUEST_HOUSE_DATA.contact.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>

            {/* Auroville Beach Highlight Card */}
            <div className="relative overflow-hidden rounded-3xl h-56 border border-[var(--border-subtle)] shadow-md group">
              <Image
                src="/images/auroville-beach.jpg"
                alt="Auroville Beach sunrise near PR Roza Grand"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold">3 Mins Away</p>
                <h4 className="font-heading text-lg font-bold">Auroville Beach Sunrise</h4>
                <p className="text-xs text-white/80 mt-0.5">Golden hour morning walks along gentle Coromandel waves.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
