import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Ban, ShieldCheck, AlertCircle, FileText, Phone, MessageCircle } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export const metadata: Metadata = {
  title: 'Guest Policies & Terms | PR ROZA GRAND Auroville',
  description:
    'Review PR ROZA GRAND guest house policies: Check-in 12:00 PM, Check-out 11:30 AM, strictly no smoking or alcohol, no pets, and 50% cancellation terms.',
};

export default function PoliciesPage() {
  const policySections = [
    {
      icon: Clock,
      title: 'Check-in and Check-out Timings',
      details: [
        'Standard Check-in time: 12:00 PM (Noon) onwards.',
        'Standard Check-out time: strictly by 11:30 AM.',
        'Early check-in or late check-out is subject to room availability on the date and may attract an additional nominal fee. Please inform our front desk in advance.',
      ],
    },
    {
      icon: Ban,
      title: 'Smoking and Alcohol Prohibition',
      details: [
        'PR ROZA GRAND maintains a strictly alcohol-free and smoke-free environment to ensure the safety, comfort, and peace of our family and couple guests.',
        'Smoking is strictly prohibited inside all guest bedrooms, bathrooms, hallways, and stairwells.',
        'Possession or consumption of alcoholic beverages is strictly forbidden on all guest house premises.',
        'Violation of this policy will result in immediate termination of stay without refund.',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Pet Policy',
      details: [
        'To ensure hygiene and comfort for all resident guests and travelers with allergies, pets of any kind are NOT permitted on the property premises.',
      ],
    },
    {
      icon: FileText,
      title: 'Cancellation and Refund Policy',
      details: [
        'A cancellation charge of 50% of the total booking tariff applies if a confirmed reservation is cancelled prior to check-in.',
        'No refunds are applicable for no-shows or same-day cancellations.',
        'Date rescheduling is accommodated subject to room availability with at least 48 hours advance notice.',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Identification and Registration Requirements',
      details: [
        'In compliance with local government hospitality regulations, all adult guests (18 years and above) must present a valid government-approved original photo ID card (Aadhaar Card, Passport, Voter ID, or Driver’s License) upon arrival.',
        'Foreign nationals must provide a valid original Passport with an active Indian Visa.',
        'PAN cards are not accepted as valid identity proof.',
      ],
    },
    {
      icon: Clock,
      title: 'Weekend and Festive Tariffs',
      details: [
        'Room rates listed on our brochure and website are base weekday rates (Monday through Thursday).',
        'Tariffs may differ during weekends (Friday through Sunday), national long weekends, and regional festival dates.',
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
            Guest Information
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            House Policies & Guidelines
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            We are committed to providing a calm, clean, and secure sanctuary for families, couples, and foreign visitors. Please review our house rules before booking.
          </p>
        </div>

        {/* Policy Blocks */}
        <div className="space-y-8 mb-16">
          {policySections.map((sec, index) => {
            const Icon = sec.icon;
            return (
              <div
                key={index}
                className="bg-[var(--bg-surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] shadow-sm hover-lift"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-[var(--french-teal-soft)] text-[var(--accent-primary)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {sec.title}
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pl-2">
                  {sec.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact Assistance Box */}
        <div className="bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border-subtle)] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-[var(--text-primary)]">
              Have questions regarding policies?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              Our front desk manager is happy to clarify any specific queries regarding your stay.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-medium)] text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${GUEST_HOUSE_DATA.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--roza-purple)] text-white text-xs font-semibold hover:bg-[var(--french-teal)] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
