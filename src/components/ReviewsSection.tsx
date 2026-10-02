import { Star, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function ReviewsSection() {
  const featured = GUEST_HOUSE_DATA.reviews[0];
  const otherReviews = GUEST_HOUSE_DATA.reviews.slice(1);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 sm:py-28 bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 sm:mb-18 gap-8">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Guest Impressions</div>
            <h2
              id="reviews-heading"
              className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-[1.1]"
            >
              Quiet moments,{' '}
              <em className="not-italic text-[var(--ocean-deep)] dark:text-[var(--accent-primary)]">
                memorable stays.
              </em>
            </h2>
            <div className="gold-line mt-5 mb-5" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Read how couples, families, and solo explorers experience the hospitality and convenience of PR Roza Grand.
            </p>
          </div>

          {/* Rating Card */}
          <div className="flex items-center gap-6 p-6 bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] shadow-sm flex-shrink-0">
            <div className="text-center">
              <span className="font-heading text-5xl font-semibold text-[var(--ocean-deep)] dark:text-[var(--accent-primary)] block leading-none">
                4.8
              </span>
              <div className="flex items-center justify-center gap-0.5 mt-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                Google Rating
              </span>
            </div>

            <div className="h-14 w-px bg-[var(--border-subtle)]" />

            <div className="flex flex-col gap-2.5">
              <a
                href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-primary)] hover:text-[var(--accent-gold)] transition-colors"
              >
                Read on Google <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`https://www.tripadvisor.com/Search?q=${encodeURIComponent('PR Roza Grand Auroville')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                Search Tripadvisor <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Featured Review ── */}
        <div className="relative bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] shadow-lg overflow-hidden mb-8">
          {/* Subtle gold accent top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[var(--sunset-gold)] via-[var(--accent-primary)] to-[var(--sunset-gold)]" />

          <div className="p-8 sm:p-12 lg:p-14 relative">
            <Quote className="absolute -top-2 right-8 w-32 h-32 text-[var(--border-subtle)] opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
                <span className="ml-2 text-xs font-bold text-[var(--sunset-warm)]">5.0 Star Stay</span>
              </div>

              <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-[var(--text-primary)] leading-snug italic">
                &ldquo;{featured.comment}&rdquo;
              </blockquote>

              <div className="mt-10 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[var(--ocean-deep)] text-white font-heading font-bold flex items-center justify-center text-base">
                    {featured.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                      {featured.author}
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      {featured.origin} · {featured.stayType}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  Stayed {featured.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Secondary Reviews ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] p-7 sm:p-8 hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed font-heading italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--sunset-pale)] text-[var(--sunset-warm)] font-heading font-bold flex items-center justify-center text-xs">
                    {rev.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-[var(--text-primary)]">{rev.author}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">{rev.origin} · {rev.stayType}</p>
                  </div>
                </div>
                <span className="text-[10px] text-[var(--text-muted)] font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
