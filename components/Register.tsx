'use client';

import { useState } from 'react';
import {
  Send, CheckCircle, Sparkles,
  User, Mail, Phone, BookOpen, MessageSquare,
} from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { saveRegistration } from '../lib/registrationService';



const BENEFITS = [
  'register.benefit1',
  'register.benefit2',
  'register.benefit3',
  'register.benefit4',
] as const;

const LEVELS = [
  { value: 'beginner',     key: 'register.levelBeginner'     },
  { value: 'intermediate', key: 'register.levelIntermediate' },
  { value: 'advanced',     key: 'register.levelAdvanced'     },
  { value: 'exam',         key: 'register.levelExam'         },
  { value: 'professional', key: 'register.levelProfessional' },
] as const;

const inputBase = [
  'w-full bg-white/80 border border-[#C4B5FD]/40 rounded-2xl',
  'px-4 py-3 ps-10 text-sm text-[#1a1a2e] placeholder-gray-400',
  'focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20',
  'transition-all backdrop-blur-sm',
].join(' ');

function Field({
  icon: Icon,
  label,
  required,
  children,
}: {
  icon: React.ElementType;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#7C3AED] mb-1.5">
        {label}
        {required && <span className="text-rose-400 ms-0.5">*</span>}
      </label>
      <div className="relative">
        <Icon
          size={15}
          className="absolute start-3 top-1/2 -translate-y-1/2 text-[#C4B5FD] pointer-events-none"
        />
        {children}
      </div>
    </div>
  );
}

export default function Register() {
  const { t, dir, lang } = useI18n();

  const isRTL = dir === 'rtl';
  const sRow:  React.CSSProperties = { flexDirection: isRTL ? 'row-reverse' : 'row' };
  const sText: React.CSSProperties = { textAlign:     isRTL ? 'right'       : 'left' };

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', level: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  const set = (k: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await saveRegistration({ ...formData, lang });
      setSubmitted(true);
    } catch {
      setError(t('register.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
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
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C4B5FD]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-[-80px] w-72 h-72 rounded-full bg-[#F9A8D4]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#FDE68A]/12 blur-3xl pointer-events-none" />

      {/* Dashed circles */}
      <svg
        className="absolute end-[-60px] top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.06] hidden lg:block pointer-events-none"
        viewBox="0 0 320 320" fill="none"
      >
        <circle cx="160" cy="160" r="155" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="12 9" />
        <circle cx="160" cy="160" r="128" stroke="#EC4899" strokeWidth="1.2" strokeDasharray="5 12" opacity=".5" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
            <Sparkles className="inline w-3.5 h-3.5 me-1.5 -mt-0.5" />
            {t('register.badge')}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight"
          >
            {t('register.title1')}{' '}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
                {t('register.titleHighlight')}
              </span>
              <svg
                className="absolute -bottom-1 start-0 w-full"
                height="8" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q25 0 50 5 Q75 10 100 5 Q125 0 150 5 Q175 10 200 5"
                  stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none"
                />
              </svg>
            </span>
            {t('register.title2')}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t('register.description')}
          </p>
        </div>

        {/* ── Benefits 2 colonnes ── */}
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {BENEFITS.map((key) => (
            <div
              key={key}
              className="flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-[#C4B5FD]/25 rounded-2xl px-5 py-4 hover:border-[#C4B5FD]/60 hover:shadow-md hover:shadow-purple-100/40 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-[#EDE9FE] flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 text-[#7C3AED]" />
              </div>
              <span className="text-[#1a1a2e] text-sm font-semibold">{t(key)}</span>
            </div>
          ))}
        </div>

                {/* Availability pill */}
        <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-4 flex items-center justify-center gap-3 mb-8" style={sRow}>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
          <div style={sText}>
            <span className="text-green-700 font-semibold text-sm">{t('register.acceptingTitle')} </span>
            <span className="text-green-600 text-sm">{t('register.acceptingDesc')}</span>
          </div>
        </div>

        {/* ── Formulaire pleine largeur en bas ── */}
        <div className="bg-white/70 backdrop-blur-sm border border-[#C4B5FD]/30 rounded-3xl p-8 shadow-xl shadow-purple-100/30">

          {submitted ? (
            /* ── Succès ── */
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EDE9FE] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-[#7C3AED]" />
              </div>
              <div className="text-4xl">🎉</div>
              <h3
                className="text-2xl font-black text-[#1a1a2e]"
              >
                {t('register.successTitle')}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                {t('register.successMessage')}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', level: '', message: '' });
                }}
                className="mt-2 text-xs font-semibold text-[#7C3AED] hover:text-[#EC4899] transition-colors underline underline-offset-2"
              >
                {lang === 'ar' ? 'إرسال آخر' : 'Submit another'}
              </button>
            </div>
          ) : (
            /* ── Formulaire ── */
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* En-tête formulaire */}
              <div className="flex items-center gap-4 pb-5 border-b border-[#C4B5FD]/20 mb-2">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-purple-300/40">
                    K
                  </div>
                  <span className="absolute -bottom-1 -end-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  </span>
                </div>
                <div>
                  <h3
                    className="text-xl font-black text-[#1a1a2e] leading-tight"
                  >
                    {t('register.formTitle')}
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {lang === 'ar' ? '⚡ رد خلال 24 ساعة' : '⚡ Reply within 24 hours'}
                  </p>
                </div>
              </div>

              {/* Champs sur 2 colonnes */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field icon={User} label={t('register.name')} required>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={set('name')}
                    className={inputBase}
                    placeholder={t('register.namePlaceholder')}
                  />
                </Field>

                <Field icon={Mail} label={t('register.email')} required>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={set('email')}
                    className={inputBase}
                    placeholder={t('register.emailPlaceholder')}
                  />
                </Field>

                <Field icon={Phone} label={t('register.phone')}>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={set('phone')}
                    className={inputBase}
                    placeholder={t('register.phonePlaceholder')}
                  />
                </Field>

                <Field icon={BookOpen} label={t('register.level')}>
                  <select
                    value={formData.level}
                    onChange={set('level')}
                    className={`${inputBase} appearance-none cursor-pointer`}
                  >
                    <option value="">{t('register.levelPlaceholder')}</option>
                    {LEVELS.map(({ value, key }) => (
                      <option key={value} value={value}>{t(key)}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Message pleine largeur */}
              <div>
                <label className="block text-xs font-semibold text-[#7C3AED] mb-1.5">
                  {t('register.message')}
                </label>
                <div className="relative">
                  <MessageSquare
                    size={15}
                    className="absolute start-3 top-3.5 text-[#C4B5FD] pointer-events-none"
                  />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={set('message')}
                    className={`${inputBase} resize-none`}
                    placeholder={t('register.messagePlaceholder')}
                  />
                </div>
              </div>

              {error && (
                <p className="text-rose-500 text-xs font-medium">{error}</p>
              )}

              {/* CTA + trust */}
              <div className="flex flex-col items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white text-sm shadow-lg shadow-purple-200/50 hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: 'linear-gradient(135deg,#8B5CF6,#EC4899)' }}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t('register.submit')}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 shrink-0">
                  {[
                    { emoji: '🔒', text: lang === 'ar' ? 'آمن' : 'Secure' },
                    { emoji: '🚫', text: lang === 'ar' ? 'لا سبام' : 'No spam' },
                    { emoji: '✅', text: lang === 'ar' ? 'مجاني' : 'Free' },
                  ].map(({ emoji, text }) => (
                    <span key={text} className="flex items-center gap-1 text-[10px] text-gray-400">
                      <span style={{ fontSize: 12 }}>{emoji}</span>
                      {text}
                    </span>
                  ))}
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}