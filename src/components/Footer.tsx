import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Mail, Navigation, ArrowUpRight } from 'lucide-react';
import { LotusLogo } from './LotusLogo';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home',         href: '/' },
    { name: 'Rooms & Tariffs', href: '/rooms' },
    { name: 'Photo Gallery', href: '/gallery' },
    { name: 'Things to Do', href: '/things-to-do' },
    { name: 'Guest Policies', href: '/policies' },
  ];

  return (
    <footer className="bg-[#083D46] text-white/80">

      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <LotusLogo variant="light" size="lg" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed pr-4 max-w-sm">
              {GUEST_HOUSE_DATA.tagline}. Quiet, comfortable, and affordable accommodation for couples, families, and travellers exploring Auroville and Pondicherry.
            </p>

            {/* Social / Quick Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                aria-label="Call front desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${GUEST_HOUSE_DATA.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600/80 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                aria-label="Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GUEST_HOUSE_DATA.contact.email}`}
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sunset-gold)]">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sunset-gold)]">
              Rooms
            </h4>
            <ul className="space-y-2.5">
              {GUEST_HOUSE_DATA.rooms.map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{room.name}</span>
                    <span className="text-[var(--sunset-gold)] text-xs font-semibold">
                      ₹{room.basePrice.toLocaleString('en-IN')}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-white/30 mt-3">
              * Tariffs may differ on weekends & holidays
            </p>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sunset-gold)]">
              Find Us
            </h4>
            <div className="space-y-3 text-sm text-white/50">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--sunset-gold)] flex-shrink-0 mt-0.5" />
                <span>{GUEST_HOUSE_DATA.contact.address.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--sunset-gold)] flex-shrink-0" />
                <a href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`} className="hover:text-white font-medium transition-colors">
                  {GUEST_HOUSE_DATA.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--sunset-gold)] flex-shrink-0" />
                <span>{GUEST_HOUSE_DATA.contact.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Brand Quote + Credits ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p>© {currentYear} {GUEST_HOUSE_DATA.legalName}. All rights reserved.</p>
            <span className="hidden sm:inline text-white/15">·</span>
            <p className="font-heading italic text-white/40">Made for slow mornings and unforgettable sunsets.</p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/policies" className="hover:text-white/60 transition-colors">
              Policies
            </Link>
            <Link href="/#location" className="hover:text-white/60 transition-colors">
              Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
