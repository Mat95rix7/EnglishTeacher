import { BookOpen, Briefcase, Trophy, MessageCircle, PenLine, Mic } from 'lucide-react';

const courses = [
  {
    icon: <MessageCircle size={28} />,
    emoji: '💬',
    title: 'Conversational English',
    subtitle: 'All Levels',
    description: 'Build real-world speaking skills through live discussions, role-plays, and dynamic conversations. Perfect for daily life and travel.',
    features: ['Daily life vocabulary', 'Pronunciation coaching', 'Accent reduction', 'Confidence building'],
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30',
    tag: 'Most Popular',
    tagColor: 'bg-blue-500/20 text-blue-300',
    accent: 'text-blue-400',
  },
  {
    icon: <Briefcase size={28} />,
    emoji: '💼',
    title: 'Business English',
    subtitle: 'Intermediate – Advanced',
    description: 'Master professional communication — emails, presentations, meetings, and negotiations in English for the workplace.',
    features: ['Email & report writing', 'Presentations & pitches', 'Meeting & negotiation phrases', 'LinkedIn & CV English'],
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/30',
    tag: 'Career Booster',
    tagColor: 'bg-amber-500/20 text-amber-300',
    accent: 'text-amber-400',
  },
  {
    icon: <Trophy size={28} />,
    emoji: '🏆',
    title: 'IELTS / TOEFL Prep',
    subtitle: 'Intermediate – Advanced',
    description: 'Structured exam preparation with proven strategies, practice tests, and personalized feedback to hit your target score.',
    features: ['Mock exams & scoring', 'Reading & listening skills', 'Writing band improvement', 'Speaking test coaching'],
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/30',
    tag: 'Exam Focused',
    tagColor: 'bg-purple-500/20 text-purple-300',
    accent: 'text-purple-400',
  },
  {
    icon: <BookOpen size={28} />,
    emoji: '📚',
    title: 'General English',
    subtitle: 'Beginner – Advanced',
    description: 'A comprehensive approach to grammar, vocabulary, reading and writing. Build a solid foundation or fill in the gaps.',
    features: ['Grammar mastery', 'Vocabulary expansion', 'Reading comprehension', 'Creative writing'],
    color: 'from-green-500/20 to-green-600/5',
    border: 'border-green-500/30',
    tag: 'All Levels',
    tagColor: 'bg-green-500/20 text-green-300',
    accent: 'text-green-400',
  },
  {
    icon: <Mic size={28} />,
    emoji: '🎙️',
    title: 'Pronunciation & Accent',
    subtitle: 'All Levels',
    description: 'Sound like a native speaker! Focus on phonetics, intonation, rhythm, and clear articulation to be understood everywhere.',
    features: ['IPA phonetics basics', 'Minimal pairs practice', 'British vs. American accent', 'Intonation & rhythm'],
    color: 'from-pink-500/20 to-pink-600/5',
    border: 'border-pink-500/30',
    tag: 'Speak Clearly',
    tagColor: 'bg-pink-500/20 text-pink-300',
    accent: 'text-pink-400',
  },
  {
    icon: <PenLine size={28} />,
    emoji: '✍️',
    title: 'Academic Writing',
    subtitle: 'Intermediate – Advanced',
    description: 'Essays, dissertations, research papers — improve your academic English writing with structured feedback and coaching.',
    features: ['Essay structure', 'Academic vocabulary', 'Citation & referencing', 'Thesis & argument building'],
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/30',
    tag: 'Academic',
    tagColor: 'bg-orange-500/20 text-orange-300',
    accent: 'text-orange-400',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1428] to-[#0a0f1e]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            What I Teach
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From total beginners to advanced speakers — every course is tailored to <em>your</em> goals, pace, and learning style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`relative group bg-gradient-to-br ${course.color} border ${course.border} rounded-3xl p-6 hover:scale-[1.02] card-glow transition-all duration-300 cursor-pointer`}
            >
              {/* Tag */}
              <span className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${course.tagColor}`}>
                {course.tag}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 ${course.accent} group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{course.emoji}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                {course.title}
              </h3>
              <p className={`text-sm font-medium mb-3 ${course.accent}`}>{course.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{course.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {course.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full bg-current ${course.accent} shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-2xl font-semibold text-sm border ${course.border} ${course.accent} hover:bg-white/10 transition-all duration-200`}
              >
                Book This Course →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-base">
            Not sure which course is right for you?{' '}
            <a href="#contact" className="text-amber-400 font-semibold hover:underline">
              Book a free 30-min consultation
            </a>{' '}
            and let's find the perfect fit together.
          </p>
        </div>
      </div>
    </section>
  );
}
