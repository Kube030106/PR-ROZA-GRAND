'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pr-roza-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('pr-roza-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('pr-roza-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 z-40 max-w-sm bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] p-4 rounded-3xl shadow-2xl animate-fade-in"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-2xl bg-[var(--french-yellow-light)] text-amber-700 dark:text-amber-300 flex-shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            We use essential cookies and anonymous analytics to ensure smooth browsing and booking experience.{' '}
            <Link href="/policies" className="text-[var(--accent-primary)] underline hover:text-[var(--accent-hover)]">
              Learn more
            </Link>
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={accept}
              type="button"
              className="px-3.5 py-1.5 rounded-xl bg-[var(--roza-purple)] text-white text-xs font-semibold hover:bg-[var(--french-teal)] transition-colors"
            >
              Accept
            </button>
            <button
              onClick={decline}
              type="button"
              className="px-3 py-1.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-medium hover:bg-[var(--bg-base)] transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={decline}
          type="button"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1 rounded focus:outline-none"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
