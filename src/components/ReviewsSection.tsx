import { Star, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function ReviewsSection() {
  const featured = GUEST_HOUSE_DATA.reviews[0];
  const otherReviews = GUEST_HOUSE_DATA.reviews.slice(1);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
              Guest Impressions
            </span>
            <h2
              id="reviews-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Quiet moments, memorable stays.
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
              Read how couples, families, and solo explorers experience the hospitality and convenience of PR Roza Grand.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-5 p-5 bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] shadow-sm flex-shrink-0">
            <div className="text-center">
              <span className="font-heading text-4xl font-bold text-[var(--text-primary)] block">
                4.8
              </span>
              <div className="flex items-center justify-center gap-1 text-amber-500 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-[var(--text-secondary)] block">
                Google Rating
              </span>
            </div>

            <div className="h-12 w-px bg-[var(--border-subtle)]" />

            <div className="flex flex-col gap-2">
              <a
                href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:underline"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`https://www.tripadvisor.com/Search?q=${encodeURIComponent('PR Roza Grand Auroville')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline"
              >
                <span>Tripadvisor Search</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Big Quote Card */}
        <div className="relative bg-[var(--bg-surface)] p-8 sm:p-12 lg:p-14 rounded-3xl border border-[var(--border-subtle)] shadow-xl mb-10 overflow-hidden">
          <Quote className="absolute -top-4 -right-4 w-36 h-36 text-[var(--border-subtle)]/40 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-1 text-amber-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-xs font-semibold text-[var(--charcoal-muted)]">
                5.0 Star Stay
              </span>
            </div>

            <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-primary)] leading-snug tracking-tight">
              &ldquo;{featured.comment}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[var(--roza-purple)] text-white font-heading font-bold flex items-center justify-center text-sm">
                  {featured.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[var(--text-primary)] flex items-center gap-1.5">
                    <span>{featured.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {featured.origin} • {featured.stayType}
                  </p>
                </div>
              </div>

              <span className="text-xs text-[var(--charcoal-muted)] font-medium">
                Stayed {featured.date}
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Guest Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[var(--bg-surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <div>
                  <p className="font-heading font-bold text-sm text-[var(--text-primary)]">
                    {rev.author}
                  </p>
                  <p className="text-[11px] text-[var(--text-secondary)]">
                    {rev.origin} • {rev.stayType}
                  </p>
                </div>
                <span className="text-[11px] text-[var(--charcoal-muted)]">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
