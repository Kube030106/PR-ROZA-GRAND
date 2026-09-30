'use client';

import { useState, useId } from 'react';
import { Calendar, Users, BedDouble, ArrowRight, AlertCircle } from 'lucide-react';
import { GUEST_HOUSE_DATA, buildWhatsAppLink } from '@/data/guestHouseData';

interface AvailabilityBarProps {
  className?: string;
  defaultRoom?: string;
  onBookingEngineSubmit?: (data: BookingData) => void;
}

export interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
}

export function AvailabilityBar({
  className = '',
  defaultRoom = 'Couple AC Room',
  onBookingEngineSubmit
}: AvailabilityBarProps) {
  const checkInId = useId();
  const checkOutId = useId();
  const guestsId = useId();
  const roomTypeId = useId();

  // Helper to format date YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2 Guests (Couple)');
  const [roomType, setRoomType] = useState(defaultRoom);
  const [errorMessage, setErrorMessage] = useState('');

  const validateDates = (inDate: string, outDate: string): boolean => {
    if (!inDate || !outDate) {
      setErrorMessage('Please select both check-in and check-out dates.');
      return false;
    }
    const dIn = new Date(inDate);
    const dOut = new Date(outDate);
    if (dOut <= dIn) {
      setErrorMessage('Check-out date must be at least one day after check-in.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIn = e.target.value;
    setCheckIn(newIn);
    validateDates(newIn, checkOut);
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOut = e.target.value;
    setCheckOut(newOut);
    validateDates(checkIn, newOut);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDates(checkIn, checkOut)) {
      return;
    }

    const bookingPayload: BookingData = {
      checkIn,
      checkOut,
      guests,
      roomType
    };

    // If an external booking engine or payment gateway callback is registered
    if (onBookingEngineSubmit) {
      onBookingEngineSubmit(bookingPayload);
      return;
    }

    // Default: seamless instant WhatsApp reservation flow
    const waUrl = buildWhatsAppLink({
      checkIn,
      checkOut,
      guests,
      roomType
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--bg-surface)] text-[var(--text-primary)] rounded-3xl p-4 sm:p-6 lg:p-7 shadow-2xl border border-[var(--border-subtle)] relative backdrop-blur-md"
        aria-label="Check room availability form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Check-in Date */}
          <div className="flex flex-col space-y-1.5 p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <label
              htmlFor={checkInId}
              className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)] flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              Check-In (12 PM)
            </label>
            <input
              id={checkInId}
              type="date"
              min={today}
              value={checkIn}
              onChange={handleCheckInChange}
              required
              className="w-full bg-transparent font-medium text-sm text-[var(--text-primary)] focus:outline-none cursor-pointer"
            />
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col space-y-1.5 p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <label
              htmlFor={checkOutId}
              className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)] flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              Check-Out (11:30 AM)
            </label>
            <input
              id={checkOutId}
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={handleCheckOutChange}
              required
              className="w-full bg-transparent font-medium text-sm text-[var(--text-primary)] focus:outline-none cursor-pointer"
            />
          </div>

          {/* Room Type */}
          <div className="flex flex-col space-y-1.5 p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <label
              htmlFor={roomTypeId}
              className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)] flex items-center gap-1.5"
            >
              <BedDouble className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              Room Type
            </label>
            <select
              id={roomTypeId}
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-transparent font-medium text-sm text-[var(--text-primary)] focus:outline-none cursor-pointer"
            >
              {GUEST_HOUSE_DATA.rooms.map((room) => (
                <option key={room.id} value={room.name} className="text-gray-900 bg-white">
                  {room.name} (from ₹{room.basePrice})
                </option>
              ))}
            </select>
          </div>

          {/* Guests Count & Submit */}
          <div className="flex flex-col space-y-1.5 p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <label
              htmlFor={guestsId}
              className="text-xs font-semibold uppercase tracking-wider text-[var(--charcoal-muted)] flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              Guests
            </label>
            <select
              id={guestsId}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent font-medium text-sm text-[var(--text-primary)] focus:outline-none cursor-pointer"
            >
              <option value="1 Guest (Solo)">1 Guest (Solo)</option>
              <option value="2 Guests (Couple)">2 Guests (Couple)</option>
              <option value="3 Guests (Family/Group)">3 Guests (Family/Group)</option>
              <option value="4 Guests (Family/Group)">4 Guests (Family Suite)</option>
            </select>
          </div>
        </div>

        {/* Validation error display */}
        {errorMessage && (
          <div
            role="alert"
            className="mt-3 flex items-center gap-2 text-xs font-medium text-red-600 bg-red-50 dark:bg-red-950/40 p-2.5 rounded-xl border border-red-200 dark:border-red-900"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit action */}
        <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct WhatsApp confirmation • Best tariff guaranteed • Zero booking fees</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-white bg-[var(--roza-purple)] hover:bg-[var(--french-teal)] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--roza-purple)]"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
