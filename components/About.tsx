import { CheckCircle2, GraduationCap, Globe2, Heart } from 'lucide-react';

const skills = [
  { label: 'Conversational English', level: 98 },
  { label: 'Business English', level: 92 },
  { label: 'IELTS / TOEFL Prep', level: 95 },
  { label: 'Grammar & Writing', level: 90 },
];

const badges = [
  { icon: <GraduationCap size={20} />, text: 'MA in English Linguistics – Oxford' },
  { icon: <Globe2 size={20} />, text: 'CELTA & DELTA Certified Teacher' },
  { icon: <Heart size={20} />, text: 'Taught in 30+ countries online' },
  { icon: <CheckCircle2 size={20} />, text: 'Google Certified Educator' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] to-[#0d1428]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Meet Your{' '}
            <span className="gradient-text">English Teacher</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center">
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border-2 border-amber-500/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute w-96 h-96 rounded-full border border-amber-500/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            </div>

            {/* Photo */}
            <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-amber-500/40 shadow-2xl shadow-amber-500/20">
              <img
                src="/images/teacher.jpg"
                alt="English with Khawla"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 -right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg float-anim">
              ⭐ 4.9/5 Rating
            </div>
            <div className="absolute bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full float-anim" style={{ animationDelay: '1s' }}>
              🎓 Oxford Graduate
            </div>
            <div className="absolute top-1/2 -right-8 zoom-badge bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
              📹 Live on Zoom
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hi, I'm <span className="gradient-text">Khawla</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a passionate English teacher with over <strong className="text-white">8 years of experience</strong> teaching students from all over the world. 
              I hold a Master's in English Linguistics from Oxford and am fully CELTA & DELTA certified.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My teaching philosophy? English should be <strong className="text-white">fun, practical, and empowering</strong>. 
              Through live Zoom sessions, interactive exercises and personalized feedback, I help my students go from hesitant speakers to confident communicators.
            </p>

            {/* Credential badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:border-amber-500/30 transition-all duration-300"
                >
                  <span className="text-amber-400 shrink-0">{b.icon}</span>
                  <span className="text-gray-300 text-sm">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm font-medium">{skill.label}</span>
                    <span className="text-amber-400 text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
