import Image from 'next/image';
import { MapPin, Navigation, ExternalLink, Footprints, Car } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

const categoryColor: Record<string, string> = {
  Beach:   'badge-coastal-primary',
  Culture: 'badge-coastal-primary',
  Dining:  'badge-coastal-primary',
  Heritage:'badge-coastal-primary',
};

export function LocationTimeline() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="py-20 sm:py-28 bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14 sm:mb-18">
          <div>
            <div className="section-label mb-5">Prime Coromandel Location</div>
            <h2
              id="location-heading"
              className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-[1.1]"
            >
              The beach is closer{' '}
              <em className="not-italic text-[#0B5961]">
                than you think.
              </em>
            </h2>
            <div className="gold-line mt-5" />
          </div>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed lg:pb-2">
            Positioned on the East Coast Road at Chinna Mudhaliyar Chavadi, directly opposite McDonald&apos;s.
            Step outside for a beach sunrise or cruise along Auroville&apos;s shaded avenues toward the iconic Matrimandir.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Timeline List */}
          <div className="lg:col-span-7 space-y-5">
            {GUEST_HOUSE_DATA.timeline.map((item, index) => (
              <div key={index} className="relative flex gap-5 group">
                {/* Step number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#0B5961] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 group-hover:bg-[#C99A4A] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {index + 1}
                  </div>
                  {index < GUEST_HOUSE_DATA.timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#C9D6D4] mt-2 min-h-[32px]" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-5 sm:p-6 hover-lift mb-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <span className={`badge-coastal-primary uppercase tracking-wider mb-2 text-[10px]`}>
                        <span className="badge-accent-dot" />
                        {item.category}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-medium text-[var(--text-primary)] mt-1">
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap mt-1">
                      {item.timeByFoot && (
                        <span className="badge-coastal-primary text-[11px]">
                          <Footprints className="w-3 h-3 text-[#C99A4A]" />
                          {item.timeByFoot}
                        </span>
                      )}
                      <span className="badge-coastal-secondary text-[11px]">
                        <Car className="w-3 h-3 text-[#C99A4A]" />
                        {item.timeByVehicle}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EAF3F1] text-xs">
                    <span className="font-semibold text-[#0B5961]">
                      {item.distance} from guest house
                    </span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[#0B5961] transition-colors font-medium"
                    >
                      View on map <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Right Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            {/* Address card */}
            <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF3F1] border border-[#B8D8D4] text-[#0B5961] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C99A4A]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">Our Address</h3>
                  <p className="text-xs text-[var(--text-muted)]">Chinna Mudhaliyar Chavadi, Auroville</p>
                </div>
              </div>

              <div className="bg-[#F7F3EA] rounded-2xl border border-[#C9D6D4] p-4 text-sm text-[var(--text-secondary)] space-y-1.5 mb-5">
                <p className="font-semibold text-[var(--text-primary)]">No. 99, ECR Main Road</p>
                <p>Opposite McDonald&apos;s, ECR</p>
                <p>Chinna Mudhaliyar Chavadi</p>
                <p>Auroville, Tamil Nadu — 605 101</p>
                <div className="pt-2">
                  <span className="badge-coastal-primary text-xs font-semibold">
                    <span className="badge-accent-dot" />
                    📍 Directly opposite McDonald&apos;s on ECR
                  </span>
                </div>
              </div>

              <a
                href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ocean w-full flex items-center justify-center gap-2.5 py-3.5 text-sm rounded-2xl"
              >
                <Navigation className="w-4 h-4 text-[#C99A4A]" />
                Open in Google Maps
              </a>
            </div>

            {/* Beach image card */}
            <div className="relative overflow-hidden rounded-3xl h-60 img-hover-zoom group shadow-sm border border-[var(--border-subtle)]">
              <Image
                src="/images/auroville-beach.jpg"
                alt="Auroville Beach sunrise — 1.2 km from PR Roza Grand"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D46]/85 via-[#0B3D46]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="badge-coastal-primary text-[10px] font-semibold tracking-wider mb-2">
                  <span className="badge-accent-dot" />
                  3 Mins · 1.2 km Away
                </span>
                <h4 className="font-heading text-xl font-medium mt-1">Auroville Beach Sunrise</h4>
                <p className="text-xs text-white/80 mt-0.5">Golden hour walks along the Coromandel coast</p>
              </div>
            </div>

            {/* Matrimandir card */}
            <div className="relative overflow-hidden rounded-3xl h-56 img-hover-zoom group shadow-sm border border-[var(--border-subtle)]">
              <Image
                src="/images/matrimandir.jpg"
                alt="Matrimandir at Auroville — 10 mins from PR Roza Grand"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D46]/85 via-[#0B3D46]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="badge-coastal-secondary text-[10px] font-semibold tracking-wider mb-2 !bg-[#EAF3F1]/90 !text-[#0B5961] !border-[#B8D8D4]">
                  <span className="badge-accent-dot" />
                  10–12 Mins · 6.5 km Away
                </span>
                <h4 className="font-heading text-xl font-medium mt-1">Matrimandir, Auroville</h4>
                <p className="text-xs text-white/80 mt-0.5">The golden sphere and tranquil gardens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
