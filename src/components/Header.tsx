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
    { name: 'Stay',         href: '/' },
    { name: 'Rooms',        href: '/rooms' },
    { name: 'Experience',   href: isHomePage ? '#day-plan' : '/#day-plan' },
    { name: 'Gallery',      href: '/gallery' },
    { name: 'Location',     href: isHomePage ? '#location' : '/#location' },
    { name: 'Contact',      href: isHomePage ? '#contact' : '/#contact' },
  ];

  const transparent = !isScrolled && isHomePage;

  const whatsappUrl = buildWhatsAppLink({
    customMessage: "Hello PR Roza Grand, I would like to book a room. Please share availability."
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-[#083D46]/95 backdrop-blur-lg shadow-lg border-b border-white/10'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">

            {/* Logo */}
            <Link
              href="/"
              className="group focus-visible:outline-none rounded-lg flex items-center"
              aria-label="PR Roza Grand Guest House — Home"
            >
              <LotusLogo
                variant={transparent ? 'light' : 'light'}
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
                      ? 'text-white/85 hover:text-white'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 rounded-full bg-[#D6A24A]" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 border border-white/25 text-white/90 hover:text-white hover:bg-white/10"
                aria-label={`Call ${GUEST_HOUSE_DATA.contact.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#D6A24A]" />
                <span className="hidden xl:inline">{GUEST_HOUSE_DATA.contact.phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 text-[13px] rounded-full !bg-[#D6A24A] !text-[#083D46] hover:!bg-[#E2B866] shadow-sm font-bold"
                aria-label="Book a room on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Controls — Glassmorphic Hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white/[0.08] border border-white/25 backdrop-blur-[10px] text-white active:scale-95 transition-all focus-visible:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Full-Screen Mobile Navigation ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#083D46]/98 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div 
          className="relative z-10 flex flex-col h-full px-6 pt-24 pb-8"
          style={{ paddingTop: 'calc(env(safe-area-inset-top) + 80px)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)' }}
        >
          {/* Nav Links */}
          <nav className="flex flex-col gap-1.5 my-auto" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-5 py-3.5 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              >
                <span className="font-heading text-2xl sm:text-3xl font-light tracking-wide">{link.name}</span>
                <span className="text-[#D6A24A] text-lg opacity-0 group-hover:opacity-100 transition-opacity">›</span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Block */}
          <div className="pt-6 border-t border-white/15 flex flex-col gap-3 max-w-sm mx-auto w-full">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full bg-[#D6A24A] text-[#083D46] font-bold text-sm hover:bg-[#E2B866] transition-colors shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Your Stay</span>
            </a>

            <a
              href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full border border-white/50 text-white font-semibold text-sm bg-white/[0.06] backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D6A24A]" />
              <span>Call: {GUEST_HOUSE_DATA.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
