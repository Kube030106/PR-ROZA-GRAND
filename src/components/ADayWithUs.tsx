import {
  Sunrise,
  Sun,
  Sunset,
  Wifi,
  Tv,
  Car,
  ShowerHead,
  Coffee,
  Bike,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function ADayWithUs() {
  const iconMap: Record<string, React.ElementType> = {
    Wifi,
    Tv,
    Car,
    ShowerHead,
    Coffee,
    Bike,
    Clock,
    MapPin
  };

  const periodIcons = [Sunrise, Sun, Sunset];

  return (
    <section
      id="day-plan"
      aria-labelledby="day-plan-heading"
      className="py-20 bg-[var(--bg-surface)] text-[var(--text-primary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
            The Auroville Rhythm
          </span>
          <h2
            id="day-plan-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            A day with us on the Coromandel coast.
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            From the first morning glow over the Bay of Bengal to the illuminated colonial boulevards of Pondicherry at night.
          </p>
        </div>

        {/* Morning, Afternoon, Evening Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {GUEST_HOUSE_DATA.dayPlan.map((step, idx) => {
            const PeriodIcon = periodIcons[idx];
            return (
              <div
                key={idx}
                className="relative bg-[var(--bg-base)] p-8 rounded-3xl border border-[var(--border-subtle)] hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-surface)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                      {step.period}
                    </span>
                    <span className="text-xs font-medium text-[var(--charcoal-muted)]">
                      {step.time}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[var(--french-yellow-light)] text-amber-700 dark:text-amber-300 flex items-center justify-center mb-5">
                    <PeriodIcon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center gap-1.5 text-xs font-medium text-[var(--accent-primary)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{step.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="pt-12 border-t border-[var(--border-subtle)]">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-1 block">
              Guest Comforts
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Facilities included in your stay.
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Everything you need for an easy, restorative stay without unexpected surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUEST_HOUSE_DATA.facilities.map((fac) => {
              const Icon = iconMap[fac.icon] || Sparkles;
              return (
                <div
                  key={fac.id}
                  className="p-6 rounded-3xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover-lift flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[var(--french-teal-soft)] text-[var(--accent-primary)] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-[var(--text-primary)] mb-1.5">
                      {fac.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  {fac.isHighlight && (
                    <span className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                      Included
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
