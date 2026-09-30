import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Mail, Navigation, Heart } from 'lucide-react';
import { LotusLogo } from './LotusLogo';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--roza-purple)] text-white/90 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <LotusLogo variant="light" size="lg" />
            </Link>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed pr-4">
              {GUEST_HOUSE_DATA.tagline}. Located opposite McDonald&apos;s on ECR, Chinna Mudhaliyar Chavadi. Quiet, comfortable, and affordable accommodation for couples, families, and global tourists visiting Auroville.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Call front desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${GUEST_HOUSE_DATA.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                aria-label="Message on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Google Maps location"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-amber-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Rooms & Tariffs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/things-to-do" className="hover:text-white transition-colors">
                  Things To Do
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-white transition-colors">
                  Guest Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Rooms List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-amber-300">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              {GUEST_HOUSE_DATA.rooms.map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{room.name}</span>
                    <span className="text-amber-300 font-semibold text-xs">
                      ₹{room.basePrice}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs text-white/60">
                * Tariffs may differ during weekends & holidays.
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-amber-300">
              Location & Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-white/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>{GUEST_HOUSE_DATA.contact.address.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <a
                  href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                  className="hover:text-white font-medium"
                >
                  {GUEST_HOUSE_DATA.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span className="hover:text-white">
                  {GUEST_HOUSE_DATA.contact.email}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {currentYear} {GUEST_HOUSE_DATA.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/policies" className="hover:text-white transition-colors">
              Terms & Cancellation Policy
            </Link>
            <Link href="/#location" className="hover:text-white transition-colors">
              Directions & Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
