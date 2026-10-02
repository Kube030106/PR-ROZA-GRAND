import { Star, Wifi, MapPin, Clock, Bike, ShieldCheck } from 'lucide-react';

export function TrustStrip() {
  const metrics = [
    {
      icon: Star,
      value: '4.8',
      label: 'Google Rating',
      sub: '120+ verified stays',
      color: 'text-[#C99A4A]',
      bg: 'bg-[#EAF3F1] border border-[#B8D8D4]',
    },
    {
      icon: MapPin,
      value: '1.2 km',
      label: 'to Auroville Beach',
      sub: '3 mins by vehicle',
      color: 'text-[#0B5961]',
      bg: 'bg-[#EAF3F1] border border-[#B8D8D4]',
    },
    {
      icon: Wifi,
      value: '24/7',
      label: 'High-Speed Wi-Fi',
      sub: 'Included in every room',
      color: 'text-[#0B5961]',
      bg: 'bg-[#EAF3F1] border border-[#B8D8D4]',
    },
    {
      icon: Clock,
      value: '24 hr',
      label: 'Front Desk',
      sub: 'Always here for you',
      color: 'text-[#0B5961]',
      bg: 'bg-[#EAF3F1] border border-[#B8D8D4]',
    },
    {
      icon: Bike,
      value: 'Free',
      label: 'Bike Rental Help',
      sub: 'Scooters from front desk',
      color: 'text-[#0B5961]',
      bg: 'bg-[#EAF3F1] border border-[#B8D8D4]',
    },
    {
      icon: ShieldCheck,
      value: '₹0',
      label: 'Booking Fees',
      sub: 'Direct WhatsApp booking',
      color: 'text-[#0B5961]',
      bg: 'bg-[#EAF3F1] border border-[#B8D8D4]',
    },
  ];

  return (
    <section
      aria-label="PR Roza Grand — Key Guest Highlights"
      className="bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-2.5 group"
              >
                <div className={`w-11 h-11 rounded-2xl ${m.bg} ${m.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-heading text-xl font-bold ${m.color}`}>{m.value}</div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] leading-tight">{m.label}</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{m.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
