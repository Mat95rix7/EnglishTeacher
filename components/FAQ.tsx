'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function FAQ() {
  const { t, dir } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { qKey: 'faq.1.q', aKey: 'faq.1.a' },
    { qKey: 'faq.2.q', aKey: 'faq.2.a' },
    { qKey: 'faq.3.q', aKey: 'faq.3.a' },
    { qKey: 'faq.4.q', aKey: 'faq.4.a' },
    { qKey: 'faq.5.q', aKey: 'faq.5.a' },
    { qKey: 'faq.6.q', aKey: 'faq.6.a' },
    { qKey: 'faq.7.q', aKey: 'faq.7.a' },
    { qKey: 'faq.8.q', aKey: 'faq.8.a' },
  ];

  return (
    <section
      id="faq"
      dir={dir}
      className="relative py-24 overflow-hidden bg-[#f7f3ed]"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glows */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#C4B5FD]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-60px] w-72 h-72 rounded-full bg-[#F9A8D4]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FDE68A]/10 blur-3xl pointer-events-none" />

      {/* Dashed decorative circles */}
      <svg
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.06] hidden lg:block pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
      >
        <circle cx="160" cy="160" r="155" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="12 9" />
        <circle cx="160" cy="160" r="128" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="5 12" opacity=".5" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
            ✦ {t('faq.badge')}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight"
          >
            {t('faq.title1')}{' '}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
              {t('faq.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t('faq.description')}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  isOpen
                    ? 'border-[#C4B5FD]/70 bg-white/80 shadow-lg shadow-purple-100/40'
                    : 'border-[#C4B5FD]/25 bg-white/50 hover:border-[#C4B5FD]/50 hover:bg-white/70'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5"
                >
                  <span
                    className={`font-semibold text-base text-start ${
                      isOpen ? 'text-[#7C3AED]' : 'text-[#1a1a2e]'
                    }`}
                  >
                    {t(faq.qKey)}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 ms-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#7C3AED]' : 'text-gray-400'
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {/* Separator */}
                  <div className="mx-6 h-px bg-[#C4B5FD]/30" />
                  <p className="px-6 py-5 text-gray-500 text-sm leading-relaxed">
                    {t(faq.aKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-linear-to-r from-[#EDE9FE] via-[#FCE7F3] to-[#FEF9C3] border border-[#C4B5FD]/30 rounded-3xl px-8 py-8">
          <div className="text-3xl mb-3">💬</div>
          <p className="text-[#1a1a2e] font-semibold mb-1">
            {t('faq.still')}
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 text-sm font-bold text-[#7C3AED] hover:text-[#EC4899] transition-colors"
          >
            {t('faq.contact')}
          </a>
        </div>

      </div>
    </section>
  );
}