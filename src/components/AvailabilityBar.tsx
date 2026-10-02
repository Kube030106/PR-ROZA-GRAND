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
      setErrorMessage('Check-out must be after check-in.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setCheckIn(v);
    validateDates(v, checkOut);
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setCheckOut(v);
    validateDates(checkIn, v);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDates(checkIn, checkOut)) return;

    const payload: BookingData = { checkIn, checkOut, guests, roomType };

    if (onBookingEngineSubmit) {
      onBookingEngineSubmit(payload);
      return;
    }

    const waUrl = buildWhatsAppLink({ checkIn, checkOut, guests, roomType });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const fieldClasses = "flex flex-col gap-1.5 p-3 rounded-xl bg-white/8 border border-white/10 hover:border-white/20 transition-colors";
  const labelClasses = "text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 flex items-center gap-1.5";
  const inputClasses = "w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer placeholder:text-white/30";

  return (
    <div className={`w-full ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--ocean-deep)]/95 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 relative"
        aria-label="Check room availability"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
          {/* Check-in */}
          <div className={fieldClasses}>
            <label htmlFor={checkInId} className={labelClasses}>
              <Calendar className="w-3 h-3 text-[var(--sunset-gold)]" />
              Check-In
            </label>
            <input
              id={checkInId}
              type="date"
              min={today}
              value={checkIn}
              onChange={handleCheckInChange}
              required
              className={inputClasses}
            />
          </div>

          {/* Check-out */}
          <div className={fieldClasses}>
            <label htmlFor={checkOutId} className={labelClasses}>
              <Calendar className="w-3 h-3 text-[var(--sunset-gold)]" />
              Check-Out
            </label>
            <input
              id={checkOutId}
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={handleCheckOutChange}
              required
              className={inputClasses}
            />
          </div>

          {/* Room Type */}
          <div className={fieldClasses}>
            <label htmlFor={roomTypeId} className={labelClasses}>
              <BedDouble className="w-3 h-3 text-[var(--sunset-gold)]" />
              Room
            </label>
            <select
              id={roomTypeId}
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className={`${inputClasses} [&>option]:text-gray-900 [&>option]:bg-white`}
            >
              {GUEST_HOUSE_DATA.rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name} (₹{room.basePrice})
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div className={fieldClasses}>
            <label htmlFor={guestsId} className={labelClasses}>
              <Users className="w-3 h-3 text-[var(--sunset-gold)]" />
              Guests
            </label>
            <select
              id={guestsId}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={`${inputClasses} [&>option]:text-gray-900 [&>option]:bg-white`}
            >
              <option value="1 Guest (Solo)">1 Guest (Solo)</option>
              <option value="2 Guests (Couple)">2 Guests (Couple)</option>
              <option value="3 Guests (Family/Group)">3 Guests (Family)</option>
              <option value="4 Guests (Family/Group)">4 Guests (Suite)</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-gold flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide w-full"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Error */}
        {errorMessage && (
          <div
            role="alert"
            className="mt-3 flex items-center gap-2 text-xs font-medium text-red-300 bg-red-500/10 border border-red-500/20 p-2.5 rounded-xl"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Bottom info */}
        <div className="mt-4 pt-3 flex items-center justify-center gap-2 text-[10px] text-white/30 border-t border-white/8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Direct WhatsApp confirmation · Best tariff · Zero booking fees</span>
        </div>
      </form>
    </div>
  );
}
