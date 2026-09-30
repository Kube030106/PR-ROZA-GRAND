'use client';

import { useState, useId } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Navigation, Send, Check } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

export function ContactSection() {
  const nameId = useId();
  const phoneId = useId();
  const checkInId = useId();
  const checkOutId = useId();
  const roomTypeId = useId();
  const messageId = useId();

  const [name, setName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('Couple AC Room');
  const [customMessage, setCustomMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waUrl = buildWhatsAppLink({
      name,
      checkIn: checkIn || undefined,
      checkOut: checkOut || undefined,
      roomType,
      customMessage: customMessage || undefined
    });

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 bg-[var(--bg-base)] text-[var(--text-primary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Quick Call */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
                Connect Directly
              </span>
              <h2
                id="contact-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
              >
                We are here to assist your stay.
              </h2>
              <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
                Reach out to our Auroville front desk directly for booking inquiries, room availability, weekend tariffs, or local travel guidance.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                className="flex items-start gap-4 p-5 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover-lift group"
              >
                <div className="p-3 rounded-2xl bg-[var(--french-teal-soft)] text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--charcoal-muted)] font-semibold">
                    Direct Front Desk Phone
                  </p>
                  <p className="text-lg font-heading font-bold text-[var(--text-primary)] mt-0.5">
                    {GUEST_HOUSE_DATA.contact.phoneDisplay}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">Available 24 hours daily</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${GUEST_HOUSE_DATA.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover-lift group"
              >
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--charcoal-muted)] font-semibold">
                    WhatsApp Chat Support
                  </p>
                  <p className="text-lg font-heading font-bold text-[var(--text-primary)] mt-0.5">
                    {GUEST_HOUSE_DATA.contact.whatsappDisplay}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">Instant booking & date queries</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="p-3 rounded-2xl bg-[var(--french-yellow-light)] text-amber-700 dark:text-amber-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--charcoal-muted)] font-semibold">
                    Guest House Address
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-1">
                    {GUEST_HOUSE_DATA.contact.address.fullAddress}
                  </p>
                  <a
                    href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-primary)] font-semibold mt-2 hover:underline"
                  >
                    <Navigation className="w-3 h-3 text-emerald-500" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="p-3 rounded-2xl bg-[var(--roza-purple-soft)] text-[var(--roza-purple)] dark:text-[var(--roza-gold)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--charcoal-muted)] font-semibold">
                    Official Email
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                    {GUEST_HOUSE_DATA.contact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message / WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--bg-surface)] p-7 sm:p-10 rounded-3xl border border-[var(--border-subtle)] shadow-xl">
              <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-2">
                Send a Booking Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                Fill in your expected dates. This form formats an immediate pre-filled WhatsApp message directly to our reservations team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor={nameId} className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)]">
                      Your Full Name *
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor={phoneId} className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)]">
                      Your Mobile Number
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Check-in */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor={checkInId} className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)]">
                      Expected Check-In
                    </label>
                    <input
                      id={checkInId}
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  {/* Check-out */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor={checkOutId} className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)]">
                      Expected Check-Out
                    </label>
                    <input
                      id={checkOutId}
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor={roomTypeId} className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)]">
                    Preferred Room
                  </label>
                  <select
                    id={roomTypeId}
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    {GUEST_HOUSE_DATA.rooms.map((r) => (
                      <option key={r.id} value={r.name} className="text-gray-900 bg-white">
                        {r.name} (from ₹{r.basePrice})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor={messageId} className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)]">
                    Notes or Special Requests
                  </label>
                  <textarea
                    id={messageId}
                    rows={3}
                    placeholder="e.g. We require safe car parking and would like to arrange rental bike assistance."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold text-white bg-[var(--roza-purple)] hover:bg-[var(--french-teal)] transition-colors shadow-md text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--roza-purple)]"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-xs text-center text-emerald-600 dark:text-emerald-400 font-medium">
                    WhatsApp opened in a new tab! If it didn&apos;t open, tap the green floating button.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
