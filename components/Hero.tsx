'use client';

import { Play, Globe, Users, Star } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import Image from 'next/image';

const BG_ELEMENTS = [
  { content: '★', top: '6%',   left: '4%',   size: 28, color: '#FACC15', delay: '0s',   dur: '3.2s' },
  { content: '★', top: '12%',  left: '78%',  size: 22, color: '#F472B6', delay: '1s',   dur: '4s'   },
  { content: '★', top: '55%',  left: '92%',  size: 18, color: '#38BDF8', delay: '2s',   dur: '3.6s' },
  { content: '★', top: '80%',  left: '6%',   size: 24, color: '#FACC15', delay: '0.5s', dur: '4.2s' },
  { content: '★', top: '88%',  left: '55%',  size: 16, color: '#8B5CF6', delay: '1.8s', dur: '3s'   },
  { content: '★', top: '35%',  left: '1%',   size: 14, color: '#34D399', delay: '3s',   dur: '5s'   },
  { content: '★', top: '70%',  left: '85%',  size: 20, color: '#FACC15', delay: '2.5s', dur: '3.8s' },
  { content: '✦', top: '22%',  left: '88%',  size: 18, color: '#C4B5FD', delay: '0.8s', dur: '4.5s' },
  { content: '✦', top: '65%',  left: '3%',   size: 14, color: '#F9A8D4', delay: '1.5s', dur: '3.4s' },
  { content: '✦', top: '47%',  left: '95%',  size: 12, color: '#FDE68A', delay: '2.2s', dur: '4s'   },
  { content: '♥', top: '18%',  left: '14%',  size: 22, color: '#F472B6', delay: '0.3s', dur: '3.5s' },
  { content: '♥', top: '76%',  left: '72%',  size: 18, color: '#EC4899', delay: '2s',   dur: '4s'   },
  { content: '♥', top: '90%',  left: '30%',  size: 14, color: '#F9A8D4', delay: '1.2s', dur: '5s'   },
  { content: '♥', top: '42%',  left: '89%',  size: 16, color: '#FB7185', delay: '3.2s', dur: '3.2s' },
  { content: '📚', top: '30%', left: '5%',   size: 26, color: '',        delay: '1s',   dur: '4s'   },
  { content: '📚', top: '72%', left: '90%',  size: 22, color: '',        delay: '2.4s', dur: '5s'   },
  { content: '📖', top: '8%',  left: '60%',  size: 24, color: '',        delay: '0.6s', dur: '3.8s' },
  { content: '📖', top: '85%', left: '18%',  size: 20, color: '',        delay: '1.8s', dur: '4.5s' },
  { content: '✏️', top: '10%', left: '40%',  size: 24, color: '',        delay: '1.4s', dur: '4.2s' },
  { content: '✏️', top: '60%', left: '8%',   size: 20, color: '',        delay: '0.9s', dur: '3.6s' },
  { content: '✏️', top: '50%', left: '97%',  size: 18, color: '',        delay: '2.8s', dur: '5s'   },
  { content: '💡', top: '78%', left: '45%',  size: 22, color: '',        delay: '1.6s', dur: '4s'   },
  { content: '💡', top: '5%',  left: '25%',  size: 20, color: '',        delay: '3s',   dur: '5s'   },
  { content: '🌍', top: '92%', left: '80%',  size: 24, color: '',        delay: '0.7s', dur: '4.8s' },
  { content: '🌍', top: '25%', left: '96%',  size: 20, color: '',        delay: '2.6s', dur: '3.5s' },
  { content: 'A',   top: '14%', left: '52%', size: 22, color: '#8B5CF6', delay: '0.4s', dur: '4s',  bold: true },
  { content: 'B',   top: '82%', left: '60%', size: 20, color: '#EC4899', delay: '1.3s', dur: '3.8s', bold: true },
  { content: 'C',   top: '48%', left: '2%',  size: 18, color: '#FACC15', delay: '2.1s', dur: '4.5s', bold: true },
  { content: 'ABC', top: '95%', left: '10%', size: 14, color: '#8B5CF6', delay: '3.5s', dur: '5s',  bold: true },
  { content: '✨', top: '40%',  left: '93%',  size: 20, color: '',       delay: '1.1s', dur: '3.2s' },
  { content: '✨', top: '20%',  left: '30%',  size: 16, color: '',       delay: '2.9s', dur: '4s'   },
  { content: '✨', top: '68%',  left: '50%',  size: 14, color: '',       delay: '0.2s', dur: '5s'   },
];

const facts = [
  { emoji: '🌍',  number: '45+',   labelKey: 'stats.countries' },
  { emoji: '📅',  number: '8',     labelKey: 'stats.years'     },
  { emoji: '👩‍🎓', number: '500+', labelKey: 'stats.students'  },
  { emoji: '🎯',  number: '97%',   labelKey: 'stats.passRate'  },
  { emoji: '⏱️', number: '3000+', labelKey: 'stats.hours'     },
  { emoji: '⭐',  number: '4.9/5', labelKey: 'stats.rating'    },
];

export default function Hero() {
  const { t } = useI18n();

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

        <style>{`
          @keyframes float-bg {
            0%   { transform: translateY(0px)   rotate(-4deg) scale(1);    }
            50%  { transform: translateY(-12px) rotate(2deg)  scale(1.08); }
            100% { transform: translateY(-20px) rotate(-2deg) scale(0.96); }
          }
          @keyframes fade-in    { from { opacity:0 } to { opacity:1 } }
          @keyframes fade-in-up { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
          @keyframes marquee    { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes spin       { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

          .animate-fade-in    { animation: fade-in    0.8s ease both; }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease both; }
          .animate-marquee    { animation: marquee 28s linear infinite; }
        `}</style>

        {/* Fond beige */}
        <div className="absolute inset-0 bg-[#f7f3ed]" />

        {/* Glows */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#C4B5FD]/20 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-[-120px] w-[400px] h-[400px] rounded-full bg-[#F9A8D4]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full bg-[#FDE68A]/12 blur-3xl pointer-events-none" />

        {/* Grille de points */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Cercles pointillés */}
        <svg className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[580px] h-[580px] opacity-[0.07] hidden lg:block pointer-events-none" viewBox="0 0 580 580" fill="none">
          <circle cx="290" cy="290" r="278" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="14 10" />
          <circle cx="290" cy="290" r="240" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="6 14" opacity="0.5" />
        </svg>
        <svg className="absolute left-[-60px] top-1/4 w-[280px] h-[280px] opacity-[0.06] hidden md:block pointer-events-none" viewBox="0 0 280 280" fill="none">
          <circle cx="140" cy="140" r="132" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="10 8" />
        </svg>

        {/* BG elements */}
        {BG_ELEMENTS.map((el, i) => (
          <span
            key={i}
            className="absolute select-none pointer-events-none"
            style={{
              top: el.top,
              left: el.left,
              fontSize: el.size,
              color: el.color || undefined,
              fontWeight: (el as any).bold ? 900 : undefined,
              opacity: 0.15,
              animation: `float-bg ${el.dur} ease-in-out ${el.delay} infinite alternate`,
              lineHeight: 1,
              filter: 'blur(0.3px)',
            }}
          >
            {el.content}
          </span>
        ))}

        {/* Contenu */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Gauche : texte */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#EDE9FE] text-[#7C3AED] border border-[#C4B5FD]/50 animate-fade-in">
                <Globe className="w-4 h-4" />
                {t('hero.badge')}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] animate-fade-in-up">
                {t('hero.title1')}{' '}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent imperial-script-regular">
                    {t('hero.titleHighlight')}
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                    <path d="M0 6 Q25 0 50 6 Q75 12 100 6 Q125 0 150 6 Q175 12 200 6" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-base shadow-lg shadow-purple-300/40 transition-transform hover:scale-105 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)' }}
                >
                  {t('hero.cta')}
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#7C3AED] text-base border-2 border-[#C4B5FD] bg-white/80 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95 hover:bg-[#F5F3FF]"
                >
                  <Play className="w-4 h-4 fill-[#7C3AED]" />
                  {t('hero.seeCourses')}
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-sm text-gray-500">
                    <strong className="text-gray-800">500+</strong> {t('hero.students')}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">4.9/5</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                {[
                  { label: '📚 Learn',                 bg: '#EDE9FE', color: '#7C3AED', border: '#C4B5FD' },
                  { label: '✨ Fun',                   bg: '#FCE7F3', color: '#BE185D', border: '#F9A8D4' },
                  { label: '🌍 Speak with Confidence', bg: '#FEF9C3', color: '#92400E', border: '#FDE68A' },
                ].map(({ label, bg, color, border }, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-bold border" style={{ background: bg, color, borderColor: border }}>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Droite : logo */}
            <div
              className="relative hidden lg:flex items-center justify-center animate-fade-in"
              style={{ animationDelay: '0.3s', minHeight: '520px' }}
            >
              <div className="absolute w-[480px] h-[480px] rounded-full border-[3px] border-dashed border-[#C4B5FD]/40" style={{ animation: 'spin 35s linear infinite' }} />
              <div className="absolute w-[420px] h-[420px] rounded-full border-[2px] border-dashed border-[#F9A8D4]/30" style={{ animation: 'spin 25s linear infinite reverse' }} />
              <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#EDE9FE] via-[#FCE7F3] to-[#FEF9C3] shadow-2xl shadow-purple-200/40" />

              {[
                { top: '2%',  left: '46%', color: '#FACC15', size: 32, delay: '0s'   },
                { top: '48%', left: '-2%', color: '#EC4899', size: 26, delay: '1s'   },
                { top: '90%', left: '26%', color: '#38BDF8', size: 24, delay: '2s'   },
                { top: '18%', left: '88%', color: '#8B5CF6', size: 28, delay: '0.5s' },
                { top: '74%', left: '84%', color: '#34D399', size: 22, delay: '1.8s' },
              ].map((s, i) => (
                <span
                  key={i}
                  className="absolute select-none"
                  style={{
                    top: s.top, left: s.left, fontSize: s.size, color: s.color,
                    opacity: 0.85,
                    animation: `float-bg 3.5s ease-in-out ${s.delay} infinite alternate`,
                    filter: 'drop-shadow(0 2px 6px currentColor)',
                  }}
                >★</span>
              ))}

              <div className="relative z-10 w-85 h-85">
                <Image
                  src="/Logo.jpeg"
                  alt="English Sahla with Khawla"
                  fill
                  sizes="340px"
                  priority
                  className="object-cover rounded-full shadow-2xl shadow-purple-300/50 border-4 border-white"
                />
              </div>

              <div className="absolute -left-8 top-14 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-[#EDE9FE]" style={{ animation: 'float-bg 4s ease-in-out 0s infinite alternate' }}>
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">{t('hero.online')}</p>
                  <p className="text-xs text-gray-400">{t('hero.available')}</p>
                </div>
              </div>

              <div className="absolute -right-6 bottom-24 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-[#EDE9FE]" style={{ animation: 'float-bg 5s ease-in-out 2s infinite alternate' }}>
                <div className="w-9 h-9 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">{t('hero.english')}</p>
                  <p className="text-xs text-gray-400">{t('hero.allLevels')}</p>
                </div>
              </div>

              <div className="absolute left-8 bottom-8 z-20 flex items-center gap-2 text-white rounded-2xl px-4 py-2.5 shadow-lg shadow-purple-400/40" style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', animation: 'float-bg 3.5s ease-in-out 1s infinite alternate' }}>
                <span className="text-lg font-extrabold tracking-wide">ABC</span>
                <span className="text-xs opacity-80">Let's learn!</span>
              </div>

              <div className="absolute right-4 top-16 z-20 flex items-center gap-1.5 bg-[#FEF9C3] border border-[#FDE68A] rounded-xl px-3 py-2 shadow-md" style={{ animation: 'float-bg 4.5s ease-in-out 3s infinite alternate' }}>
                <span className="text-base">✏️</span>
                <span className="text-xs font-bold text-[#92400E]">Fun!</span>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════
              STATS SECTION
          ══════════════════════════════ */}
          <section className="relative overflow-hidden bg-[#f7f3ed]">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                  {t('stats.title')}{' '}
                  <span className="bg-linear-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                    {t('stats.titleHighlight')}
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {facts.map((fact, i) => (
                  <div
                    key={i}
                    className="group text-center bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-6 border border-[#E9E1F8] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {fact.emoji}
                    </div>
                    <div className="text-3xl md:text-4xl font-black mb-1 bg-linear-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                      {fact.number}
                    </div>
                    <div className="text-gray-500 text-xs font-medium leading-tight">
                      {t(fact.labelKey)}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>
      </section>
    </>
  );
}