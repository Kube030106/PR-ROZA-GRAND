import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppLink } from '@/data/guestHouseData';

export function EmotionalCTA() {
  const whatsappUrl = buildWhatsAppLink({
    customMessage: "Hello, I'd like to plan a stay at PR Roza Grand."
  });

  return (
    <section
      aria-label="Plan your stay at PR Roza Grand"
      className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] py-28 sm:py-36 lg:py-44 flex items-center justify-center bg-[#083D46]"
    >
      {/* ── Background Image & Cinematic Overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auroville-beach.jpg"
          alt="Golden sunrise at Auroville Beach — close to PR Roza Grand"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Soft cinematic gradient overlay: 30% top -> 45% mid -> 78% bottom */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: 'linear-gradient(to bottom, rgba(8, 61, 70, 0.30) 0%, rgba(8, 61, 70, 0.45) 55%, rgba(8, 61, 70, 0.78) 100%)'
          }} 
        />
        {/* Subtle radial center highlight to keep text crystal clear */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(8,61,70,0.30)_0%,_transparent_75%)] pointer-events-none" />
        {/* Smooth transition into deep ocean footer */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#083D46] via-[#083D46]/60 to-transparent pointer-events-none" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto">
        <p className="text-[#D6A24A] text-xs font-semibold tracking-[0.3em] uppercase mb-8 [text-shadow:_0_2px_12px_rgba(0,0,0,0.3)]">
          Auroville · East Coast Road
        </p>

        <h2 className="font-heading font-light text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-3 sm:mb-4 [text-shadow:_0_2px_18px_rgba(0,0,0,0.25)]">
          Slow down.
        </h2>
        <h2 className="font-heading italic text-[#D6A24A] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-3 sm:mb-4 [text-shadow:_0_2px_18px_rgba(0,0,0,0.25)]">
          Breathe deep.
        </h2>
        <h2 className="font-heading font-light text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-8 sm:mb-10 lg:mb-12 [text-shadow:_0_2px_18px_rgba(0,0,0,0.25)]">
          Stay a little longer.
        </h2>

        <p className="text-[#F1F3EF] text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 sm:mb-12 max-w-xl mx-auto [text-shadow:_0_2px_14px_rgba(0,0,0,0.3)]">
          Mornings on Auroville Beach. Afternoons in shaded forest paths. Evenings along Pondicherry&apos;s promenade. Your coastal escape awaits.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-bold tracking-wide bg-[#D6A24A] text-[#083D46] hover:bg-[#E2B866] hover:-translate-y-[2px] transition-all duration-300 shadow-xl"
          >
            Plan Your Stay
          </a>
          <Link
            href="/rooms"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-white/[0.06] border border-white/50 backdrop-blur-[8px] hover:bg-white/[0.14] hover:-translate-y-[2px] transition-all duration-300 shadow-lg"
          >
            View Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
