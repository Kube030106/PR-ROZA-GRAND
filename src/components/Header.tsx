'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { LotusLogo } from './LotusLogo';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Rooms',        href: '/rooms' },
    { name: 'Location',     href: isHomePage ? '#location' : '/#location' },
    { name: 'Experience',   href: isHomePage ? '#day-plan' : '/#day-plan' },
    { name: 'Gallery',      href: '/gallery' },
    { name: 'Things to Do', href: '/things-to-do' },
    { name: 'Contact',      href: isHomePage ? '#contact' : '/#contact' },
  ];

  const transparent = !isScrolled && isHomePage;

  const whatsappUrl = buildWhatsAppLink({
    customMessage: "Hello PR Roza Grand, I would like to book a room. Please share availability."
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-[var(--bg-surface)]/96 backdrop-blur-lg shadow-[0_1px_24px_rgba(11,61,70,0.08)] border-b border-[var(--border-subtle)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link
              href="/"
              className="group focus-visible:outline-none rounded-lg"
              aria-label="PR Roza Grand Guest House — Home"
            >
              <LotusLogo
                variant={transparent ? 'light' : 'dark'}
                size="md"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-semibold tracking-wide transition-all duration-200 relative group ${
                    transparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 rounded-full ${
                    transparent ? 'bg-[var(--sunset-gold)]' : 'bg-[var(--accent-gold)]'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">

              <a
                href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 border ${
                  transparent
                    ? 'border-white/25 text-white/80 hover:text-white hover:bg-white/10'
                    : 'border-[var(--border-medium)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]'
                }`}
                aria-label={`Call ${GUEST_HOUSE_DATA.contact.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">{GUEST_HOUSE_DATA.contact.phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-[13px] rounded-full ${
                  transparent ? '' : 'shadow-sm'
                }`}
                aria-label="Book a room on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className={`p-2.5 rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] ${
                  transparent
                    ? 'border-white/25 text-white bg-white/10'
                    : 'border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)]'
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Full-Screen Mobile Menu ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--ocean-deep)]/97 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col h-full px-6 pt-24 pb-10">
          {/* Nav Links */}
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-heading text-3xl font-medium">{link.name}</span>
                <span className="text-[var(--sunset-gold)] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Block */}
          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full py-4 px-5 rounded-2xl border border-white/20 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[var(--sunset-gold)]" />
              Call: {GUEST_HOUSE_DATA.contact.phoneDisplay}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2.5 w-full py-4 px-5 rounded-2xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
