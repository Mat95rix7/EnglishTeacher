const facts = [
  { emoji: '🌍', number: '45+', label: 'Countries Represented' },
  { emoji: '📅', number: '8', label: 'Years of Teaching' },
  { emoji: '👩‍🎓', number: '500+', label: 'Happy Students' },
  { emoji: '🎯', number: '97%', label: 'Exam Pass Rate' },
  { emoji: '⏱️', number: '3,000+', label: 'Hours Taught Online' },
  { emoji: '⭐', number: '4.9/5', label: 'Average Review Score' },
];

const marqueeItems = [
  '🗣️ Speak Confidently', '✈️ Travel English', '💼 Business Ready', '📝 Ace Your Exams',
  '🎓 Study Abroad', '🌍 Go Global', '📱 Learn Anywhere', '🎙️ Sound Natural',
  '🏆 Top IELTS Scores', '🤝 Network in English', '📚 Master Grammar', '💡 Think in English',
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1428]" />

      {/* Scrolling marquee */}
      <div className="mb-16 overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {fact.emoji}
              </div>
              <div
                className="text-3xl md:text-4xl font-black gradient-text mb-1"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {fact.number}
              </div>
              <div className="text-gray-500 text-xs font-medium">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
