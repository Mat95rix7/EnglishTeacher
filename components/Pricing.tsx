import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    emoji: '🌱',
    price: 25,
    period: '/ session',
    description: 'Perfect to try and see if online English learning is right for you.',
    features: [
      '1 × 60-min Zoom lesson',
      'Written feedback after class',
      'Access to lesson recording',
      'PDF study materials',
      'WhatsApp support (24h)',
    ],
    notIncluded: ['Progress tracking report', 'Priority booking'],
    color: 'border-white/10',
    buttonStyle: 'border border-amber-500/50 text-amber-400 hover:bg-amber-500/10',
    badge: null,
  },
  {
    name: 'Progress',
    emoji: '🚀',
    price: 85,
    period: '/ 4 sessions',
    description: 'The most popular plan for consistent, measurable improvement.',
    features: [
      '4 × 60-min Zoom lessons',
      'Personalised study plan',
      'Written feedback after class',
      'All lesson recordings',
      'PDF + interactive materials',
      'WhatsApp support (12h)',
      'Monthly progress report',
    ],
    notIncluded: ['Priority booking'],
    color: 'border-amber-500/60',
    buttonStyle: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/30',
    badge: 'Most Popular 🔥',
  },
  {
    name: 'Intensive',
    emoji: '🏆',
    price: 180,
    period: '/ 10 sessions',
    description: 'For serious learners who want rapid results and maximum support.',
    features: [
      '10 × 60-min Zoom lessons',
      'Full personalised curriculum',
      'Detailed written feedback',
      'All recordings + transcripts',
      'Premium resource library',
      'Priority WhatsApp support',
      'Weekly progress reports',
      'Priority lesson booking',
    ],
    notIncluded: [],
    color: 'border-purple-500/40',
    buttonStyle: 'border border-purple-500/50 text-purple-400 hover:bg-purple-500/10',
    badge: 'Best Value 💎',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] to-[#0d1428]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No contracts. Pay for what you need, upgrade anytime.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white/5 border-2 ${plan.color} rounded-3xl p-8 flex flex-col card-glow hover:scale-[1.02] transition-all duration-300 ${i === 1 ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold whitespace-nowrap shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Plan info */}
              <div className="text-4xl mb-4">{plan.emoji}</div>
              <h3 className="text-2xl font-black text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-gray-400 text-base ml-1">{plan.period}</span>
                {i === 1 && (
                  <div className="mt-1 text-green-400 text-xs font-semibold">
                    💡 Save $15 vs. per-session rate
                  </div>
                )}
                {i === 2 && (
                  <div className="mt-1 text-purple-400 text-xs font-semibold">
                    💡 Save $70 vs. per-session rate
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-green-400 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f, j) => (
                  <li key={`no-${j}`} className="flex items-start gap-3 text-gray-600 text-sm line-through">
                    <Check size={16} className="text-gray-700 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${plan.buttonStyle}`}
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-amber-400" />
            <span>All prices in USD. Billed after each package.</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-amber-400" />
            <span>Group classes available from $12/session</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-amber-400" />
            <span>Student discounts available — ask me!</span>
          </div>
        </div>

        {/* Free trial CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/20 rounded-3xl px-10 py-8">
            <p className="text-2xl font-black text-white mb-2">
              🎁 Try before you buy!
            </p>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Your first consultation (30 min) is completely free. No payment info needed.
            </p>
            <a
              href="#contact"
              className="btn-shine inline-block px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-amber-500/30"
            >
              Book My Free Lesson Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
