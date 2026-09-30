import { Star, Wifi, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function TrustStrip() {
  const trustPoints = [
    {
      icon: Star,
      title: "4.8 / 5.0 Google Rating",
      subtitle: "Verified couple & family stays",
      color: "text-amber-500",
    },
    {
      icon: Wifi,
      title: "High-Speed Wi-Fi & Tea",
      subtitle: "Included with every room",
      color: "text-[var(--accent-primary)]",
    },
    {
      icon: MapPin,
      title: "Opposite McDonald's ECR",
      subtitle: "3 mins to Auroville Beach",
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Clock,
      title: "24-Hour Front Desk",
      subtitle: "Safe parking & rental bikes",
      color: "text-[var(--roza-purple-light)] dark:text-[var(--roza-purple)]",
    },
  ];

  return (
    <section
      aria-label="Guest House Highlights & Accreditations"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-6 sm:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 group"
              >
                <div className={`p-2.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
