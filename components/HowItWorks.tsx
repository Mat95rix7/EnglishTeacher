'use client';

import { CalendarCheck, Video, ClipboardList, TrendingUp } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const platforms = [
  { nameKey: 'Zoom',             emoji: '🎥', bg: 'bg-blue-50   border-blue-200   text-blue-700'     },
  { nameKey: 'Google Meet',      emoji: '📹', bg: 'bg-green-50  border-green-200  text-green-700'    },
  { nameKey: 'Skype',            emoji: '💻', bg: 'bg-cyan-50   border-cyan-200   text-cyan-700'     },
  { nameKey: 'WhatsApp',         emoji: '📱', bg: 'bg-emerald-50 border-emerald-200 text-emerald-700'},
  { nameKey: 'Google Classroom', emoji: '🏫', bg: 'bg-yellow-50 border-yellow-200 text-yellow-800'  },
  { nameKey: 'Notion',           emoji: '📓', bg: 'bg-gray-50   border-gray-200   text-gray-700'    },
];

export default function HowItWorks() {
  const { t, dir } = useI18n();

  const steps = [
    {
      step: '01',
      icon: <CalendarCheck size={28} />,
      titleKey: 'hiw.step1.title',
      descKey:  'hiw.step1.desc',
      iconClass: 'from-amber-400 to-amber-600 shadow-amber-400/40',
      delay: '0.05s',
    },
    {
      step: '02',
      icon: <ClipboardList size={28} />,
      titleKey: 'hiw.step2.title',
      descKey:  'hiw.step2.desc',
      iconClass: 'from-blue-400 to-blue-600 shadow-blue-400/40',
      delay: '0.15s',
    },
    {
      step: '03',
      icon: <Video size={28} />,
      titleKey: 'hiw.step3.title',
      descKey:  'hiw.step3.desc',
      iconClass: 'from-violet-400 to-violet-600 shadow-violet-400/40',
      delay: '0.25s',
    },
    {
      step: '04',
      icon: <TrendingUp size={28} />,
      titleKey: 'hiw.step4.title',
      descKey:  'hiw.step4.desc',
      iconClass: 'from-emerald-400 to-emerald-600 shadow-emerald-400/40',
      delay: '0.35s',
    },
  ];

  return (
    <section
      id="how-it-works"
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
      <div className="absolute top-0 right-[-60px] w-64 h-64 rounded-full bg-[#F9A8D4]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#FDE68A]/12 blur-3xl pointer-events-none" />

      {/* Dashed decorative circles */}
      <svg
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.06] hidden lg:block pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
      >
        <circle cx="160" cy="160" r="155" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="12 9" />
        <circle cx="160" cy="160" r="130" stroke="#EC4899" strokeWidth="1.2" strokeDasharray="5 12" opacity=".5" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
            ✦ {t('hiw.badge')}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight"
          >
            {t('hiw.title1')}{' '}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
              {t('hiw.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t('hiw.description')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white/70 backdrop-blur-sm border border-[#C4B5FD]/30 rounded-3xl p-6
                        hover:border-[#C4B5FD]/70 hover:shadow-xl hover:shadow-purple-100/60
                        hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: step.delay }}
            >
              {/* Step number watermark — côté extérieur selon dir */}
              <div
                className="absolute top-3 end-4 text-5xl font-black text-violet-500/[0.07] select-none"
              >
                {step.step}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-linear-to-br ${step.iconClass}
                              flex items-center justify-center text-white shadow-lg`}
                >
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e]">
                  {t(step.titleKey)}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="text-center mb-4">
          <h3
            className="text-2xl font-bold text-[#1a1a2e] mb-1"
          >
            {t('hiw.platforms.title')}
          </h3>
          <p className="text-gray-400 text-sm mb-5">{t('hiw.platforms.sub')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {platforms.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold hover:scale-105 transition-transform ${p.bg}`}
            >
              <span>{p.emoji}</span>
              {p.nameKey}
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-gradient-to-r from-[#EDE9FE] via-[#FCE7F3] to-[#FEF9C3] border border-[#C4B5FD]/30 rounded-3xl p-10 text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h3
            className="text-2xl font-bold text-[#1a1a2e] mb-3"
          >
            {t('hiw.guarantee.title')}
          </h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            {t('hiw.guarantee.desc')}
          </p>
        </div>

      </div>
    </section>
  );
}