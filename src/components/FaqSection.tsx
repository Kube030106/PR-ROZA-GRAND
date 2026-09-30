'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 bg-[var(--bg-surface)] text-[var(--text-primary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2 block">
            Common Inquiries
          </span>
          <h2
            id="faq-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            Everything you need to know about checking in, parking, policies, and local transport around Auroville.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {GUEST_HOUSE_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-title-${index}`;
            const panelId = `faq-desc-${index}`;

            return (
              <div
                key={index}
                className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-base)] overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between p-6 text-left font-heading text-lg sm:text-xl font-bold text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-[var(--accent-primary)] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]/60 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 rounded-3xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
          <p className="text-sm text-[var(--text-secondary)]">
            Have a question that is not answered here? Reach out directly via WhatsApp or phone.
          </p>
          <a
            href={`tel:${GUEST_HOUSE_DATA.contact.phoneRaw}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline"
          >
            <span>Call Front Desk: {GUEST_HOUSE_DATA.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
