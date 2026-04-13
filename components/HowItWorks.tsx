import { CalendarCheck, Video, ClipboardList, TrendingUp } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: <CalendarCheck size={32} />,
    title: 'Book a Free Consultation',
    description: 'Fill in the contact form to schedule your free 30-minute discovery call. We\'ll discuss your goals, current level, and create your personalised learning plan.',
    color: 'from-amber-500 to-amber-600',
    glow: 'shadow-amber-500/30',
  },
  {
    step: '02',
    icon: <ClipboardList size={32} />,
    title: 'Receive Your Custom Plan',
    description: 'I\'ll design a tailor-made curriculum based on your needs — with materials, exercises, and a realistic timeline to reach your goal.',
    color: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/30',
  },
  {
    step: '03',
    icon: <Video size={32} />,
    title: 'Learn Live via Zoom',
    description: 'Join interactive 1-on-1 or group lessons on Zoom, Google Meet, or Skype. Interactive whiteboards, screen sharing & recorded sessions included.',
    color: 'from-purple-500 to-purple-600',
    glow: 'shadow-purple-500/30',
  },
  {
    step: '04',
    icon: <TrendingUp size={32} />,
    title: 'Track Your Progress',
    description: 'After each lesson you get detailed feedback, homework, and a progress report. Watch your English improve week by week — measurably and confidently.',
    color: 'from-green-500 to-green-600',
    glow: 'shadow-green-500/30',
  },
];

const platforms = [
  { name: 'Zoom', emoji: '🎥', bg: 'bg-blue-600/20 border-blue-500/30' },
  { name: 'Google Meet', emoji: '📹', bg: 'bg-green-600/20 border-green-500/30' },
  { name: 'Skype', emoji: '💻', bg: 'bg-cyan-600/20 border-cyan-500/30' },
  { name: 'WhatsApp', emoji: '📱', bg: 'bg-emerald-600/20 border-emerald-500/30' },
  { name: 'Google Classroom', emoji: '🏫', bg: 'bg-yellow-600/20 border-yellow-500/30' },
  { name: 'Notion', emoji: '📓', bg: 'bg-gray-600/20 border-gray-500/30' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] to-[#0d1428]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Start Learning in{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Getting started is easy. Your first lesson is just a few clicks away.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-amber-500/30 hover:bg-white/8 card-glow transition-all duration-300 h-full">
                {/* Step number */}
                <div className="text-5xl font-black text-white/5 absolute top-4 right-4 select-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-5 shadow-xl ${step.glow} group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Tools & Platforms I Use</h3>
          <p className="text-gray-500 text-sm">Everything you need, all in one learning experience</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {platforms.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border ${p.bg} text-white font-medium text-sm hover:scale-105 transition-transform`}
            >
              <span>{p.emoji}</span>
              {p.name}
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/20 rounded-3xl p-8">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-2xl font-bold text-white mb-3">100% Satisfaction Guarantee</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Not happy with your first paid lesson? I'll refund it — no questions asked. 
            I'm that confident you'll love learning with me.
          </p>
        </div>
      </div>
    </section>
  );
}
