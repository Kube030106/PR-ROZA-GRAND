'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { LotusLogo } from './LotusLogo';
import { ThemeToggle } from './ThemeToggle';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Rooms', href: '/rooms' },
    { name: 'Location', href: isHomePage ? '#location' : '/#location' },
    { name: 'A Day With Us', href: isHomePage ? '#day-plan' : '/#day-plan' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Things to Do', href: '/things-to-do' },
    { name: 'Policies', href: '/policies' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const headerBgClass = isScrolled || !isHomePage
    ? 'bg-[var(--bg-surface)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)] text-[var(--text-primary)]'
    : 'bg-transparent text-white';

  const defaultWhatsAppUrl = buildWhatsAppLink({
    customMessage: "Hello PR Roza Grand, I would like to book a room. Please let me know your availability."
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-lg p-1 -ml-1 flex items-center"
            aria-label="PR Roza Grand Guest House - Home"
          >
            <LotusLogo
              variant={isScrolled || !isHomePage ? 'dark' : 'light'}
              size="md"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--accent-primary)] ${
                  isScrolled || !isHomePage
                    ? 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <ThemeToggle
              className={isScrolled || !isHomePage ? '' : 'text-white border-white/30 hover:bg-white/10'}
            />

            <a
              href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
              className={`p-2 rounded-full border transition-colors ${
                isScrolled || !isHomePage
                  ? 'border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--french-teal-soft)] hover:text-[var(--accent-primary)]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              aria-label={`Call PR Roza Grand at ${GUEST_HOUSE_DATA.contact.phoneDisplay}`}
              title="Call Front Desk"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm bg-[var(--roza-purple)] text-white hover:bg-[var(--french-teal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--roza-purple)]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Book a Room</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center space-x-2">
            <ThemeToggle
              className={isScrolled || !isHomePage ? '' : 'text-white border-white/30'}
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2.5 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                isScrolled || !isHomePage
                  ? 'border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)]'
                  : 'border-white/30 text-white bg-black/20'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] px-5 pt-3 pb-6 space-y-3 shadow-xl transition-all"
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-[var(--text-primary)] hover:bg-[var(--french-teal-soft)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-col gap-2.5">
            <a
              href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-[var(--border-medium)] text-sm font-semibold text-[var(--text-primary)]"
            >
              <Phone className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Call: {GUEST_HOUSE_DATA.contact.phoneDisplay}</span>
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[var(--roza-purple)] text-white text-sm font-semibold shadow hover:bg-[var(--french-teal)] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
