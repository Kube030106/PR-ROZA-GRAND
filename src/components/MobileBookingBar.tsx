'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppLink({
    customMessage: "Hello! I'd like to book a room at PR Roza Grand."
  });

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="bg-[var(--ocean-deep)] border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <a
          href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white text-xs font-semibold transition-colors hover:bg-white/15"
          aria-label="Call PR Roza Grand"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] btn-gold flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold"
          aria-label="Book via WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
