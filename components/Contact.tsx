import { useState } from 'react';
import { Mail, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

const levels = ['A1 – Beginner', 'A2 – Elementary', 'B1 – Intermediate', 'B2 – Upper Intermediate', 'C1 – Advanced', 'C2 – Proficiency'];
const goals = ['Conversational English', 'Business English', 'IELTS / TOEFL Prep', 'Pronunciation', 'Academic Writing', 'General English', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', whatsapp: '', level: '', goal: '', message: '', schedule: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1428] to-[#0a0f1e]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to <span className="gradient-text">Start Learning?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fill in the form and I'll get back to you within 24 hours to schedule your free consultation. Let's begin your English journey!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: <Mail size={22} />,
                title: 'Email Me',
                value: 'sarah@englishwithsarah.com',
                sub: 'Reply within 24 hours',
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
              },
              {
                icon: <MessageSquare size={22} />,
                title: 'WhatsApp',
                value: '+1 (555) 234-5678',
                sub: 'For quick questions',
                color: 'text-green-400',
                bg: 'bg-green-500/10',
              },
              {
                icon: <Clock size={22} />,
                title: 'Available Hours',
                value: 'Mon – Sat: 8am – 8pm UTC',
                sub: 'Flexible scheduling for all time zones',
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-500/20 transition-all">
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">{item.title}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">Find Me Online</div>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', emoji: '📸' },
                  { label: 'LinkedIn', emoji: '💼' },
                  { label: 'YouTube', emoji: '▶️' },
                  { label: 'TikTok', emoji: '🎵' },
                ].map((s, i) => (
                  <button
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1 py-3 rounded-xl bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/30 border border-transparent transition-all text-xs text-gray-400 hover:text-amber-400"
                  >
                    <span className="text-lg">{s.emoji}</span>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Currently Accepting Students</span>
              </div>
              <p className="text-gray-400 text-sm">
                Limited spots available this month. Book early to secure your preferred time slot!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-3xl p-12 text-center">
                <CheckCircle2 size={60} className="text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Message Sent! 🎉
                </h3>
                <p className="text-gray-400 text-lg max-w-sm mx-auto">
                  Thank you for reaching out! I'll review your details and be in touch within 24 hours to schedule your free lesson.
                </p>
                <p className="mt-4 text-amber-400 font-semibold">See you in class! 📚</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
              >
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Lesson</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Current English Level</label>
                    <select
                      name="level"
                      value={form.level}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/60 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0d1428]">Select level...</option>
                      {levels.map(l => <option key={l} value={l} className="bg-[#0d1428]">{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">I Want To Learn</label>
                    <select
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/60 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0d1428]">Select course...</option>
                      {goals.map(g => <option key={g} value={g} className="bg-[#0d1428]">{g}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Best Time for Classes</label>
                  <input
                    type="text"
                    name="schedule"
                    value={form.schedule}
                    onChange={handleChange}
                    placeholder="e.g. Weekday mornings, weekends, evenings UTC+2..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/60 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Tell Me About Your Goals *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What do you want to achieve? Any specific challenges with English?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/60 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shine w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-amber-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message & Book Free Lesson
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-xs">
                  🔒 Your information is safe. No spam, ever. I reply within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
