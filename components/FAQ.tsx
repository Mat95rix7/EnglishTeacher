import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do the online lessons work?',
    a: 'All lessons are conducted live via Zoom, Google Meet, or Skype — whichever you prefer. I share my screen for materials, use an interactive whiteboard, and can even record sessions so you can review them afterwards.',
  },
  {
    q: 'What equipment do I need?',
    a: 'Just a computer, tablet, or smartphone with a stable internet connection, a microphone, and ideally a webcam. I recommend using a desktop or laptop for the best experience, but mobile works too!',
  },
  {
    q: 'How often should I take lessons?',
    a: 'This depends on your goals and availability. For noticeable progress, I recommend 2–3 lessons per week. Even 1 lesson per week can lead to significant improvement over time when combined with self-study.',
  },
  {
    q: 'What is your teaching approach?',
    a: 'I use a communicative approach focused on real-life usage. Lessons are interactive, varied, and adapted to your learning style. I combine structured exercises with natural conversation for well-rounded learning.',
  },
  {
    q: 'Do you teach children?',
    a: 'Yes! I teach learners aged 8 and above. Lessons for younger students are designed with more games, visuals, and engaging activities to keep them motivated and focused.',
  },
  {
    q: 'What if I miss a lesson?',
    a: 'Life happens! Please give me at least 24 hours notice and we\'ll reschedule at no extra cost. Late cancellations (under 12 hours) may be charged, but I\'m always flexible for genuine emergencies.',
  },
  {
    q: 'Can I switch courses or goals mid-way?',
    a: 'Absolutely. Your learning journey evolves, and so do your lessons. We can adjust the curriculum, pace, or focus at any time. All I ask is that you communicate your changing needs so I can adapt accordingly.',
  },
  {
    q: 'Do you offer group classes?',
    a: 'Yes! Small group classes (2–5 students) are available at a reduced rate from $12/session. Group classes are great for conversational practice and a more social learning experience.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1428] to-[#0a0f1e]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before booking your first lesson.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? 'border-amber-500/40 bg-amber-500/5'
                  : 'border-white/10 bg-white/3 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-semibold text-base ${openIndex === i ? 'text-amber-400' : 'text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-amber-400' : 'text-gray-500'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions?{' '}
            <a href="#contact" className="text-amber-400 hover:underline font-medium">
              Send me a message →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
