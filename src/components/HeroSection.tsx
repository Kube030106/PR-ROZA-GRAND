import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ChevronDown, Phone } from 'lucide-react';
import { AvailabilityBar } from './AvailabilityBar';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function HeroSection() {
  const whatsappUrl = buildWhatsAppLink({
    customMessage: "Hello PR Roza Grand, I would like to book a room."
  });

  return (
    <section
      aria-label="Welcome to PR Roza Grand Guest House"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[var(--ocean-deep)]"
    >
      {/* ── Full-bleed Background Image & Layered Cinematic Overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auroville-beach.jpg"
          alt="Auroville Beach golden sunrise — steps from PR Roza Grand Guest House, ECR"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center animate-hero-image"
        />
        
        {/* Cinematic Left-to-Right Gradient Overlay: strong behind text (left), transparent on right for sunset */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040D10]/95 via-[#040D10]/75 via-50% sm:via-45% lg:via-40% to-transparent pointer-events-none" />
        
        {/* Soft vertical vignette: protects header (top) and availability bar (bottom) */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#040D10]/70 via-[#040D10]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#040D10]/95 via-[#040D10]/50 to-transparent pointer-events-none" />
      </div>

      {/* ── Floating Hero Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-10 sm:pb-14 pt-32 sm:pt-40">
        <div className="max-w-3xl lg:max-w-4xl">

          {/* Location badge */}
          <div className="animate-hero-label">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#040D10]/75 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-widest uppercase mb-7 shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              <MapPin className="w-3.5 h-3.5 text-[var(--sunset-gold)] flex-shrink-0" />
              ECR Main Road, Auroville · Tamil Nadu
            </span>
          </div>

          {/* Main headline — editorial, cinematic with drop-shadows */}
          <h1 className="animate-hero-title font-heading font-light text-white leading-[1.05] tracking-tight [text-shadow:_0_3px_15px_rgba(0,0,0,0.85)]">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem]">
              Wake up to
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] italic text-[var(--sunset-gold)] [text-shadow:_0_3px_15px_rgba(0,0,0,0.9)]">
              the sound of the sea.
            </span>
          </h1>

          {/* Subheadline with clear contrast */}
          <p className="animate-hero-subtitle mt-7 text-base sm:text-lg lg:text-xl text-white/95 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            A calm coastal retreat on the East Coast Road, just 3 minutes from Auroville Beach.
            Spotless rooms, warm hospitality, and a sunrise you will not forget.
          </p>

          {/* CTA Buttons */}
          <div className="animate-hero-cta mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold tracking-wide shadow-2xl hover:shadow-[0_8px_25px_rgba(216,169,93,0.4)] transition-all"
              aria-label="Book your stay via WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.113 1.52 5.847L0 24l6.335-1.484C8.05 23.454 10.003 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.843 0-3.603-.497-5.13-1.373l-.368-.214-3.76.881.936-3.637-.238-.385C2.526 15.662 2 13.876 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Book Your Stay
            </a>

            <Link
              href="/rooms"
              className="btn-ghost inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 shadow-lg text-white"
            >
              Explore Rooms
            </Link>

            <a
              href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium ml-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              aria-label={`Call ${GUEST_HOUSE_DATA.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[var(--sunset-gold)]" />
              <span className="hidden sm:inline">{GUEST_HOUSE_DATA.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Quick trust indicators */}
          <div className="animate-hero-bar mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 text-xs text-white/90 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Rooms from ₹999/night
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--sunset-gold)] shadow-[0_0_8px_rgba(216,169,93,0.8)]" />
              1.2 km to Auroville Beach
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              Zero booking fees
            </span>
          </div>
        </div>
      </div>

      {/* ── Availability Bar ── */}
      <div className="relative z-20 w-full animate-hero-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <AvailabilityBar />
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5 animate-hero-scroll">
        <span className="text-white/40 text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/40" />
      </div>
    </section>
  );
}
