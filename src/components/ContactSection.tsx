'use client';

import { useState, useId } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Navigation, Send, Clock, ChevronRight } from 'lucide-react';
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

  const inputClasses = "w-full px-4 py-3.5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all duration-200";
  const labelClasses = "text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1.5 block";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="section-label mb-5">Let&apos;s Plan Your Stay</div>
              <h2
                id="contact-heading"
                className="font-heading font-light text-4xl sm:text-5xl text-[var(--text-primary)] leading-[1.1]"
              >
                We are here{' '}
                <em className="not-italic text-[var(--ocean-deep)] dark:text-[var(--accent-primary)]">
                  to help.
                </em>
              </h2>
              <div className="gold-line mt-5 mb-5" />
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Reach our Auroville front desk for booking inquiries, room availability, weekend tariffs, or local travel advice.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <a
                href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover-lift group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3F1] border border-[#B8D8D4] text-[#0B5961] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-[#0B5961]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">Front Desk</p>
                  <p className="font-heading text-lg font-semibold text-[var(--text-primary)] mt-0.5">{GUEST_HOUSE_DATA.contact.phoneDisplay}</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Available 24 hours</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#0B5961] transition-colors flex-shrink-0" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${GUEST_HOUSE_DATA.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover-lift group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3F1] border border-[#B8D8D4] text-[#0B5961] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-5 h-5 text-[#0B5961]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">WhatsApp</p>
                  <p className="font-heading text-lg font-semibold text-[var(--text-primary)] mt-0.5">{GUEST_HOUSE_DATA.contact.whatsappDisplay}</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Instant booking confirmation</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#0B5961] transition-colors flex-shrink-0" />
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3F1] border border-[#B8D8D4] text-[#0B5961] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C99A4A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">Address</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-1">{GUEST_HOUSE_DATA.contact.address.fullAddress}</p>
                  <a
                    href={GUEST_HOUSE_DATA.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0B5961] font-bold mt-2 hover:text-[#C99A4A] transition-colors"
                  >
                    <Navigation className="w-3 h-3 text-[#C99A4A]" /> Get Directions
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3F1] border border-[#B8D8D4] text-[#0B5961] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0B5961]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">Email</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">{GUEST_HOUSE_DATA.contact.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3F1] border border-[#B8D8D4] text-[#0B5961] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#0B5961]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">Check-in / Out</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">12:00 PM / 11:30 AM</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Quiet hours: 10 PM – 7 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Enquiry Form ── */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] shadow-lg overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[var(--sunset-gold)] via-[var(--accent-primary)] to-[var(--sunset-gold)]" />

              <div className="p-7 sm:p-10">
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[var(--text-primary)] mb-2">
                  Send a Booking Enquiry
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-8">
                  Fill in your dates below. This generates a pre-filled WhatsApp message directly to our front desk — no account needed, no booking fees.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={nameId} className={labelClasses}>Your Full Name *</label>
                      <input id={nameId} type="text" required placeholder="Anand Sharma" value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor={phoneId} className={labelClasses}>Mobile Number</label>
                      <input id={phoneId} type="tel" placeholder="+91 98765 43210" value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} className={inputClasses} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={checkInId} className={labelClasses}>Check-In Date</label>
                      <input id={checkInId} type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor={checkOutId} className={labelClasses}>Check-Out Date</label>
                      <input id={checkOutId} type="date" min={checkIn} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={inputClasses} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={roomTypeId} className={labelClasses}>Preferred Room</label>
                    <select id={roomTypeId} value={roomType} onChange={(e) => setRoomType(e.target.value)} className={inputClasses}>
                      {GUEST_HOUSE_DATA.rooms.map((r) => (
                        <option key={r.id} value={r.name} className="text-gray-900 bg-white">
                          {r.name} (from ₹{r.basePrice})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor={messageId} className={labelClasses}>Special Requests</label>
                    <textarea id={messageId} rows={3} placeholder="e.g. We need safe car parking and would like rental bike assistance." value={customMessage} onChange={(e) => setCustomMessage(e.target.value)} className={`${inputClasses} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full flex items-center justify-center gap-2.5 py-4 text-sm font-bold tracking-wide rounded-2xl"
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry via WhatsApp
                  </button>

                  {submitted && (
                    <p className="text-xs text-center text-emerald-600 dark:text-emerald-400 font-semibold animate-fade-slide-up">
                      ✓ WhatsApp opened! If it didn&apos;t open, tap the floating green button below.
                    </p>
                  )}

                  <p className="text-[10px] text-center text-[var(--text-muted)]">
                    Your data is only used to generate a WhatsApp message. We don&apos;t store anything.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
