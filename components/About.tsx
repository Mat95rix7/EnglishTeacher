import { CheckCircle2, GraduationCap, Globe2, Heart } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function About() {
  const { t } = useI18n();

  const skills = [
    { labelKey: 'about.skill1', level: 98 },
    { labelKey: 'about.skill2', level: 92 },
    { labelKey: 'about.skill3', level: 95 },
    { labelKey: 'about.skill4', level: 90 },
  ];

  const badges = [
    { icon: <GraduationCap size={20} />, labelKey: 'about.badge1' },
    { icon: <Globe2 size={20} />,        labelKey: 'about.badge2' },
    { icon: <Heart size={20} />,         labelKey: 'about.badge3' },
    { icon: <CheckCircle2 size={20} />,  labelKey: 'about.badge4' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#f7f3ed]">

      {/* Glows */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-[#C4B5FD]/18 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#F9A8D4]/14 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#FDE68A]/10 blur-3xl pointer-events-none" />

      {/* Grille de points */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
            {t('about.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800" style={{ fontFamily: "'Nunito', sans-serif" }}>
            {t('about.title1')}{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
              {t('about.titleHighlight')}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Gauche : photo ── */}
          <div className="relative flex justify-center">

            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#EDE9FE] via-[#FCE7F3] to-[#FEF9C3] blur-2xl opacity-70" />

            <div
              className="absolute w-80 h-80 rounded-full border-2 border-dashed border-[#C4B5FD]/40"
              style={{ animation: 'spin 20s linear infinite' }}
            />
            <div
              className="absolute w-96 h-96 rounded-full border border-dashed border-[#F9A8D4]/25"
              style={{ animation: 'spin 30s linear infinite reverse' }}
            />

            <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-purple-200/50">
              <img
                src="/images/teacher.jpg"
                alt="English with Khawla"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute top-4 -right-2 flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-purple-300/40"
              style={{ animation: 'float-bg 3.5s ease-in-out 0s infinite alternate' }}
            >
              ⭐ {t('about.floatingRating')}
            </div>

            <div
              className="absolute bottom-4 -left-2 bg-white/90 backdrop-blur-sm border border-[#EDE9FE] text-gray-700 text-xs font-semibold px-4 py-2 rounded-full shadow-md"
              style={{ animation: 'float-bg 4s ease-in-out 1s infinite alternate' }}
            >
              🎓 {t('about.floatingOxford')}
            </div>

            <div
              className="absolute top-1/2 -right-6 bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-xs font-bold px-3 py-2 rounded-full shadow-md"
              style={{ animation: 'float-bg 4.8s ease-in-out 2s infinite alternate' }}
            >
              📹 {t('about.floatingZoom')}
            </div>
          </div>

          {/* ── Droite : contenu ── */}
          <div>
            <h3
              className="text-3xl font-black text-gray-800 mb-4"
              style={{ fontFamily: "'Nunito', 'Playfair Display', serif" }}
            >
              {t('about.hi')}{' '}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                {t('about.name')}
              </span>
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              {t('about.description1')}
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {t('about.description2')}
            </p>

            {/* Credential badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-[#E9E1F8] rounded-xl p-3 hover:border-[#C4B5FD] hover:shadow-sm transition-all duration-300"
                >
                  <span className="text-[#8B5CF6] shrink-0">{b.icon}</span>
                  <span className="text-gray-600 text-sm">{t(b.labelKey)}</span>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-gray-700 text-sm font-medium">{t(skill.labelKey)}</span>
                    <span className="text-[#8B5CF6] text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#EDE9FE] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float-bg {
          0%   { transform: translateY(0px)   rotate(-4deg) scale(1);    }
          50%  { transform: translateY(-12px) rotate(2deg)  scale(1.08); }
          100% { transform: translateY(-20px) rotate(-2deg) scale(0.96); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}