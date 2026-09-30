'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsAppUrl = buildWhatsAppLink({
    customMessage: "Hello PR Roza Grand, I'd like to check room availability and tariffs."
  });

  return (
    <aside
      aria-label="Instant WhatsApp Booking Support"
      className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2"
    >
      {/* Tooltip message bubble */}
      {showTooltip && (
        <div
          role="status"
          className="relative bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-xl rounded-2xl p-3 pr-8 max-w-xs text-xs sm:text-sm animate-fade-in"
        >
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-0.5 rounded focus:outline-none"
            aria-label="Dismiss WhatsApp prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-[var(--accent-primary)] mb-0.5">Need instant booking?</p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Chat with our Auroville front desk directly on WhatsApp.
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with PR Roza Grand front desk"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <span className="sr-only">Chat on WhatsApp with PR Roza Grand</span>
        
        {/* Pulsing halo ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </aside>
  );
}
