import {
  Sunrise, Sun, Sunset,
  Wifi, Tv, Car, ShowerHead, Coffee, Bike, Clock, MapPin, Sparkles, Check
} from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function ADayWithUs() {
  const iconMap: Record<string, React.ElementType> = {
    Wifi, Tv, Car, ShowerHead, Coffee, Bike, Clock, MapPin
  };
  const periodIcons = [Sunrise, Sun, Sunset];
  const periodColors = [
    { bg: 'bg-amber-50 dark:bg-amber-950/30', icon: 'text-amber-600 dark:text-amber-300', accent: 'border-l-amber-400' },
    { bg: 'bg-[var(--ocean-soft)] dark:bg-[var(--french-teal-soft)]', icon: 'text-[var(--accent-primary)]', accent: 'border-l-[var(--accent-primary)]' },
    { bg: 'bg-[var(--sunset-pale)]', icon: 'text-[var(--sunset-warm)]', accent: 'border-l-[var(--sunset-gold)]' },
  ];

  return (
    <section
      id="day-plan"
      aria-labelledby="day-plan-heading"
      className="py-20 sm:py-28 bg-[var(--ocean-deep)] text-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label mb-5 text-[var(--sunset-gold)]">
            The Auroville Rhythm
          </div>
          <h2
            id="day-plan-heading"
            className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]"
          >
            A day with us on the{' '}
            <em className="not-italic text-[var(--sunset-gold)]">Coromandel coast.</em>
          </h2>
          <div className="gold-line mt-5 mb-5 mx-auto" />
          <p className="text-base text-white/60 leading-relaxed">
            From the first morning glow over the Bay of Bengal to the illuminated colonial boulevards of Pondicherry at night.
          </p>
        </div>

        {/* ── Day Timeline ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {GUEST_HOUSE_DATA.dayPlan.map((step, idx) => {
            const PeriodIcon = periodIcons[idx];
            const colors = periodColors[idx];
            return (
              <div
                key={idx}
                className={`relative bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-8 hover-lift border-l-4 ${colors.accent} backdrop-blur-sm`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${colors.bg} ${colors.icon} flex items-center justify-center`}>
                    <PeriodIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    {step.period}
                  </span>
                </div>

                <p className="text-[11px] text-white/40 font-semibold tracking-wider uppercase mb-3">{step.time}</p>
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[var(--sunset-gold)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{step.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Facilities Grid ── */}
        <div>
          <div className="text-center mb-10">
            <div className="section-label mb-4 text-[var(--sunset-gold)]">What's Included</div>
            <h3 className="font-heading font-light text-3xl sm:text-4xl text-white">
              Everything you need for a perfect stay.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GUEST_HOUSE_DATA.facilities.map((fac) => {
              const Icon = iconMap[fac.icon] || Sparkles;
              return (
                <div
                  key={fac.id}
                  className={`group p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                    fac.isHighlight
                      ? 'bg-white/10 border-white/15 hover:bg-white/15'
                      : 'bg-white/5 border-white/8 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--sunset-gold)]/15 text-[var(--sunset-gold)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--sunset-gold)]/25 transition-colors">
                      <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-tight">{fac.title}</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed">{fac.description}</p>
                      {fac.isHighlight && (
                        <span className="inline-flex items-center gap-1 mt-2 text-[10px] text-emerald-400 font-semibold">
                          <Check className="w-3 h-3" /> Included
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
