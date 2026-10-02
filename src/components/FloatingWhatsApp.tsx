'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past the hero
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Show tooltip after 4 seconds, auto-hide after 6 more
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 6000);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const waUrl = buildWhatsAppLink({
    customMessage: "Hello PR Roza Grand! I'd like to know about room availability."
  });

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      // Hide on mobile when MobileBookingBar is visible
      style={{ bottom: 'max(1.5rem, calc(env(safe-area-inset-bottom) + 1.5rem))' }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-slide-up">
          <div className="bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-xl rounded-2xl px-4 py-3 max-w-[220px] relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-full flex items-center justify-center"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3 text-[var(--text-muted)]" />
            </button>
            <p className="text-xs font-semibold">Need help booking?</p>
            <p className="text-[10px] text-[var(--text-muted)] mt-0.5">Chat with us on WhatsApp for instant confirmation.</p>
            {/* Arrow */}
            <div className="absolute bottom-0 right-6 translate-y-full">
              <div className="w-3 h-3 bg-[var(--bg-surface)] border-r border-b border-[var(--border-subtle)] rotate-45 -translate-y-1.5" />
            </div>
          </div>
        </div>
      )}

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-emerald-500/40 hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        aria-label={`Chat on WhatsApp — ${GUEST_HOUSE_DATA.contact.whatsappDisplay}`}
      >
        <MessageCircle className="w-6 h-6" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 pointer-events-none" />
      </a>
    </div>
  );
}
