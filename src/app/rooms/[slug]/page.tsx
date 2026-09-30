import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Users,
  Check,
  Phone,
  MessageCircle,
  ArrowLeft,
  ShieldAlert,
  Clock,
  Wifi,
  ShowerHead,
  Tv,
  Car,
  Bike
} from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUEST_HOUSE_DATA.rooms.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = GUEST_HOUSE_DATA.rooms.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: 'Room Not Found',
    };
  }

  return {
    title: `${room.name} | PR ROZA GRAND Auroville`,
    description: `${room.description.slice(0, 155)}... Starting from ₹${room.basePrice}/night.`,
    openGraph: {
      title: `${room.name} | PR ROZA GRAND Auroville`,
      description: room.description,
      images: [{ url: room.featuredImage }],
    },
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = GUEST_HOUSE_DATA.rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const directWhatsAppUrl = buildWhatsAppLink({
    roomType: room.name,
    customMessage: `Hello PR Roza Grand, I would like to reserve the ${room.name}. Please confirm availability and tariff.`
  });

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs text-[var(--charcoal-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--accent-primary)]">
            Home
          </Link>
          <span>/</span>
          <Link href="/rooms" className="hover:text-[var(--accent-primary)]">
            Rooms
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-semibold">{room.name}</span>
        </div>

        {/* Room Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--french-teal-soft)] text-[var(--accent-primary)]">
                {room.type} Accommodations
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--french-yellow-light)] text-amber-800 dark:text-amber-300">
                {room.hasAC ? 'Split Air Conditioned' : 'Ceiling Fan Cooling'}
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {room.name}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)]">
              {room.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:items-end flex-shrink-0">
            <span className="text-xs uppercase tracking-wider text-[var(--charcoal-muted)] font-medium">
              Tariff per night
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-4xl font-bold text-[var(--roza-purple)] dark:text-[var(--roza-gold)]">
                ₹{room.basePrice}
              </span>
              <span className="text-xs text-[var(--text-secondary)]">/ weekday</span>
            </div>
            <span className="text-xs text-[var(--charcoal-muted)]">
              ₹{room.weekendPrice} / weekend & holiday
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2 relative h-80 sm:h-[460px] rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-md">
            <Image
              src={room.featuredImage}
              alt={`${room.name} main view at PR Roza Grand`}
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="flex flex-col gap-4">
            {room.gallery.slice(1, 3).map((img, idx) => (
              <div
                key={idx}
                className="relative h-44 sm:h-[222px] rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-sm"
              >
                <Image
                  src={img}
                  alt={`${room.name} detail view ${idx + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Details vs Booking Action Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Description */}
            <div className="bg-[var(--bg-surface)] p-7 sm:p-9 rounded-3xl border border-[var(--border-subtle)]">
              <h2 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-4">
                About this room
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {room.description}
              </p>

              {/* Specs */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--charcoal-muted)] block">Size</span>
                  <strong className="text-sm text-[var(--text-primary)]">{room.specs.roomSize}</strong>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--charcoal-muted)] block">Bed Setup</span>
                  <strong className="text-sm text-[var(--text-primary)]">{room.specs.bed}</strong>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--charcoal-muted)] block">Capacity</span>
                  <strong className="text-sm text-[var(--text-primary)]">{room.capacity}</strong>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--charcoal-muted)] block">Hot Shower</span>
                  <strong className="text-sm text-[var(--text-primary)]">24x7 Ready</strong>
                </div>
              </div>
            </div>

            {/* Inclusions & Amenities */}
            <div className="bg-[var(--bg-surface)] p-7 sm:p-9 rounded-3xl border border-[var(--border-subtle)]">
              <h2 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-6">
                Room Amenities & Inclusions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Policies Box */}
            <div className="bg-[var(--bg-surface)] p-7 sm:p-9 rounded-3xl border border-[var(--border-subtle)]">
              <h2 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>Room Policies & Check-in Details</span>
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                  <span><strong>Check-in:</strong> 12:00 PM | <strong>Check-out:</strong> 11:30 AM</span>
                </li>
                <li>• <strong>No Smoking & No Alcohol:</strong> Strictly prohibited inside rooms and corridors.</li>
                <li>• <strong>No Pets:</strong> Pets are not allowed on the guest house premises.</li>
                <li>• <strong>Cancellation:</strong> 50% cancellation fee applies prior to check-in.</li>
                <li>• <strong>ID Proof:</strong> Valid government ID is mandatory for all adult guests at arrival.</li>
              </ul>
            </div>
          </div>

          {/* Right Sticky Booking Box */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-[var(--bg-surface)] p-7 sm:p-8 rounded-3xl border border-[var(--border-subtle)] shadow-xl">
              <span className="text-xs uppercase tracking-wider text-[var(--charcoal-muted)] font-semibold block">
                Instant Reservation
              </span>
              <div className="mt-2 mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-bold text-[var(--roza-purple)] dark:text-[var(--roza-gold)]">
                    ₹{room.basePrice}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">/ night</span>
                </div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                  Direct WhatsApp booking • Zero commission
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold text-white bg-[var(--roza-purple)] hover:bg-[var(--french-teal)] transition-all duration-300 shadow-md text-sm"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Book {room.name} on WhatsApp</span>
                </a>

                <a
                  href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-semibold border border-[var(--border-medium)] text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Call Front Desk: {GUEST_HOUSE_DATA.contact.phoneDisplay}</span>
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] text-xs text-[var(--charcoal-muted)] space-y-2">
                <p>✓ 24x7 Hot water & Wi-Fi included</p>
                <p>✓ Safe car & two-wheeler parking on-site</p>
                <p>✓ Scooter rental assistance upon check-in</p>
              </div>
            </div>

            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)] hover:underline px-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all rooms</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
