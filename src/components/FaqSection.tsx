'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 bg-[var(--bg-surface)] text-[var(--text-primary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="section-label mb-5">Common Questions</div>
          <h2
            id="faq-heading"
            className="font-heading font-light text-4xl sm:text-5xl text-[var(--text-primary)] leading-[1.1]"
          >
            Frequently asked{' '}
            <em className="not-italic text-[var(--ocean-deep)] dark:text-[var(--accent-primary)]">questions.</em>
          </h2>
          <div className="gold-line mt-5 mx-auto" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {GUEST_HOUSE_DATA.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[var(--accent-primary)] bg-[var(--bg-base)] shadow-sm'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-medium)]'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-medium text-[var(--text-primary)] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[var(--accent-primary)]' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-1">
                      <div className="w-full h-px bg-[var(--border-subtle)] mb-4" />
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
