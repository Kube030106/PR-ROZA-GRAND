import Link from 'next/link';
import { Home, Compass, Phone } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="max-w-lg w-full text-center bg-[var(--bg-surface)] p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] shadow-xl">
        <span className="font-heading text-6xl sm:text-7xl font-bold text-[var(--accent-primary)] block">
          404
        </span>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-3">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
          The page or room you are looking for might have been relocated or is temporarily unavailable. Let us help you find your way back to PR Roza Grand.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--roza-purple)] text-white text-xs sm:text-sm font-semibold hover:bg-[var(--french-teal)] transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-medium)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold hover:bg-[var(--bg-base)] transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Rooms</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] text-xs text-[var(--charcoal-muted)]">
          Need immediate assistance? Call our Auroville desk:{' '}
          <a
            href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
            className="font-bold text-[var(--text-primary)] hover:underline"
          >
            {GUEST_HOUSE_DATA.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
