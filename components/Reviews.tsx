'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, PlusCircle, X } from 'lucide-react';
import { useI18n } from '../lib/i18n';

/* ─────────────────────────────────────────────
   Types — prêts pour une future API/BDD
───────────────────────────────────────────── */
export interface Review {
  id?: string;
  name: string;
  country: string;
  avatar: string;          // initiales générées côté client
  rating: number;
  course: string;
  text: string;
  color: string;           // classe Tailwind, assignée à la création
  pending?: boolean;       // true = en attente de modération
}

/* ─────────────────────────────────────────────
   Données statiques initiales
   → à remplacer par un fetch() vers ton API
───────────────────────────────────────────── */
const INITIAL_REVIEWS: Review[] = [
  {
    name: 'Marie Dupont',
    country: '🇫🇷 France',
    avatar: 'MD',
    rating: 5,
    course: 'Business English',
    text: 'In just 3 months I went from being terrified of English meetings to confidently leading presentations. I got promoted, partly thanks to Khawla!',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Ahmed Hassan',
    country: '🇸🇦 Saudi Arabia',
    avatar: 'AH',
    rating: 5,
    course: 'IELTS Preparation',
    text: 'I needed a Band 7.5 for my university application and Khawla helped me achieve 8.0! Her structured approach and detailed feedback made all the difference.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Yuki Tanaka',
    country: '🇯🇵 Japan',
    avatar: 'YT',
    rating: 5,
    course: 'Conversational English',
    text: 'Before her lessons I was too shy to speak English. Now I travel alone and chat freely! Her patience is endless. Best teacher I have ever had.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    name: 'Carlos Mendez',
    country: '🇲🇽 Mexico',
    avatar: 'CM',
    rating: 5,
    course: 'Pronunciation',
    text: 'My accent was always a source of embarrassment but Khawla turned it into a strength! My colleagues now say I sound incredibly clear and professional.',
    color: 'from-emerald-400 to-green-500',
  },
  {
    name: 'Fatima Al-Rashid',
    country: '🇦🇪 UAE',
    avatar: 'FA',
    rating: 5,
    course: 'Academic Writing',
    text: "Khawla helped me with my Master's thesis. Her feedback was detailed and constructive. My supervisor was very impressed with the final quality.",
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Lucas Schmidt',
    country: '🇩🇪 Germany',
    avatar: 'LS',
    rating: 5,
    course: 'General English',
    text: "6 months from B1 and I just passed my C1 exam. Her lessons are fun, varied, never boring. The homework was exactly what I needed. 10/10!",
    color: 'from-indigo-400 to-blue-500',
  },
];

const AVATAR_COLORS = [
  'from-pink-400 to-rose-500',
  'from-blue-400 to-cyan-500',
  'from-violet-400 to-purple-500',
  'from-emerald-400 to-green-500',
  'from-amber-400 to-orange-500',
  'from-indigo-400 to-blue-500',
];

/* ─────────────────────────────────────────────
   StarRating — cliquable ou lecture seule
───────────────────────────────────────────── */
function StarRating({
  rating,
  interactive = false,
  onChange,
  size = 14,
}: {
  rating: number;
  interactive?: boolean;
  onChange?: (v: number) => void;
  size?: number;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          onClick={() => interactive && onChange?.(i)}
          onMouseEnter={() => interactive && setHovered(i)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={`transition-colors ${
            i <= (interactive ? hovered || rating : rating)
              ? 'fill-amber-400 text-amber-400'
              : 'text-gray-300'
          } ${interactive ? 'cursor-pointer' : ''}`}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Formulaire d'ajout de review
───────────────────────────────────────────── */
function AddReviewForm({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (r: Review) => void;
}) {
  const { t, dir } = useI18n();

  const [form, setForm] = useState({
    name: '',
    country: '',
    course: '',
    rating: 0,
    text: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [error, setError]           = useState('');

  const set = (k: keyof typeof form, v: string | number) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name || !form.country || !form.course || !form.rating || !form.text) {
      setError(t('reviews.add.required'));
      return;
    }
    setError('');
    setSubmitting(true);

    /* ── À remplacer par ton appel API ──────────────────
       Exemple :
       const res = await fetch('/api/reviews', {
         method: 'POST',
         body: JSON.stringify(form),
       });
       const data = await res.json();
    ──────────────────────────────────────────────────── */
    await new Promise((r) => setTimeout(r, 900)); // simulation

    const initials = form.name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newReview: Review = {
      ...form,
      avatar: initials,
      color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
      pending: true,
    };

    setSubmitting(false);
    setSuccess(true);
    onSubmit(newReview);
  };

  const inputClass = `w-full bg-white/70 border border-[#C4B5FD]/40 rounded-2xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all`;

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(26,20,50,0.5)', backdropFilter: 'blur(6px)' }}
    >
      <div
        dir={dir}
        className="relative w-full max-w-lg bg-[#f7f3ed] rounded-3xl p-8 shadow-2xl border border-[#C4B5FD]/30 max-h-[90vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
        >
          <X size={16} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3
              className="text-2xl font-black text-[#1a1a2e] mb-2"
            >
              {t('reviews.add.successTitle')}
            </h3>
            <p className="text-gray-500 text-sm">{t('reviews.add.successDesc')}</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg,#8B5CF6,#EC4899)' }}
            >
              OK
            </button>
          </div>
        ) : (
          <>
            <h3
              className="text-2xl font-black text-[#1a1a2e] mb-1"
            >
              {t('reviews.add.title')}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{t('reviews.add.subtitle')}</p>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#7C3AED] mb-1.5">
                  {t('reviews.add.name')}
                </label>
                <input
                  className={inputClass}
                  placeholder={t('reviews.add.namePh')}
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                />
              </div>

              {/* Country + Course */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#7C3AED] mb-1.5">
                    {t('reviews.add.country')}
                  </label>
                  <input
                    className={inputClass}
                    placeholder={t('reviews.add.countryPh')}
                    value={form.country}
                    onChange={(e) => set('country', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#7C3AED] mb-1.5">
                    {t('reviews.add.course')}
                  </label>
                  <input
                    className={inputClass}
                    placeholder={t('reviews.add.coursePh')}
                    value={form.course}
                    onChange={(e) => set('course', e.target.value)}
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-xs font-semibold text-[#7C3AED] mb-2">
                  {t('reviews.add.rating')}
                </label>
                <StarRating
                  rating={form.rating}
                  interactive
                  onChange={(v) => set('rating', v)}
                  size={28}
                />
              </div>

              {/* Text */}
              <div>
                <label className="block text-xs font-semibold text-[#7C3AED] mb-1.5">
                  {t('reviews.add.text')}
                </label>
                <textarea
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder={t('reviews.add.textPh')}
                  value={form.text}
                  onChange={(e) => set('text', e.target.value)}
                />
              </div>

              {error && (
                <p className="text-rose-500 text-xs font-medium">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full py-3 rounded-2xl text-sm font-bold text-white disabled:opacity-60 transition-opacity"
                style={{ background: 'linear-gradient(135deg,#8B5CF6,#EC4899)' }}
              >
                {submitting ? t('reviews.add.submitting') : t('reviews.add.submit')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Composant principal
───────────────────────────────────────────── */
export default function Reviews() {
  const { t, dir } = useI18n();

  const [reviews, setReviews]       = useState<Review[]>(INITIAL_REVIEWS);
  const [current, setCurrent]       = useState(0);
  const [showForm, setShowForm]     = useState(false);
  const visible = 3;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(reviews.length - visible, c + 1));

  const displayed = reviews.slice(current, current + visible);

  const handleNewReview = (r: Review) => {
    setReviews((prev) => [...prev, r]);
    /* ── Futur : invalider le cache / refetch depuis la BDD ── */
  };

  return (
    <>
      {showForm && (
        <AddReviewForm
          onClose={() => setShowForm(false)}
          onSubmit={(r) => {
            handleNewReview(r);
            setShowForm(false);
          }}
        />
      )}

      <section
        id="reviews"
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
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#F9A8D4]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-60px] w-72 h-72 rounded-full bg-[#C4B5FD]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FDE68A]/10 blur-3xl pointer-events-none" />

        {/* Dashed circles */}
        <svg
          className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.06] hidden lg:block pointer-events-none"
          viewBox="0 0 320 320"
          fill="none"
        >
          <circle cx="160" cy="160" r="155" stroke="#EC4899" strokeWidth="2" strokeDasharray="12 9" />
          <circle cx="160" cy="160" r="128" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="5 12" opacity=".5" />
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
              ✦ {t('reviews.badge')}
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight"
            >
              {t('reviews.title1')}{' '}
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
                {t('reviews.titleHighlight')}
              </span>
            </h2>

            {/* Overall rating */}
            <div className="inline-flex items-center gap-3 mt-2">
              <StarRating rating={5} size={20} />
              <span className="text-3xl font-black text-[#1a1a2e]">4.9</span>
              <span className="text-gray-400 text-sm">{t('reviews.totalReviews')}</span>
            </div>
          </div>

          {/* ── Featured review ── */}
          <div className="relative mb-12 bg-gradient-to-r from-[#EDE9FE] via-[#FCE7F3] to-[#FEF9C3] border border-[#C4B5FD]/30 rounded-3xl p-8 md:p-12 overflow-hidden">
            <Quote
              size={72}
              className="absolute top-4 left-6 text-[#8B5CF6]/10 pointer-events-none"
              style={dir === 'rtl' ? { left: 'auto', right: '1.5rem', transform: 'scaleX(-1)' } : {}}
            />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <p className="text-[#3d2a6b] text-lg md:text-xl font-light italic leading-relaxed mb-6">
                "{t('reviews.featured.text')}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  PK
                </div>
                <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                  <div className="text-[#1a1a2e] font-bold text-sm">
                    {t('reviews.featured.name')}
                  </div>
                  <div className="text-gray-500 text-xs">{t('reviews.featured.meta')}</div>
                </div>
                <StarRating rating={5} size={16} />
              </div>
            </div>
          </div>

          {/* ── Cards desktop ── */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {displayed.map((review, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm border border-[#C4B5FD]/25 rounded-3xl p-6 hover:border-[#C4B5FD]/60 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {review.pending && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-semibold">
                    {t('reviews.add.pending')}
                  </span>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full bg-linear-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <div className="text-[#1a1a2e] font-semibold text-sm">{review.name}</div>
                      <div className="text-gray-400 text-xs">{review.country}</div>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-[#EDE9FE] text-[#7C3AED] text-xs font-semibold mb-3 w-fit">
                  {review.course}
                </span>

                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* ── Card mobile ── */}
          <div className="md:hidden mb-8">
            <div className="bg-white/70 backdrop-blur-sm border border-[#C4B5FD]/25 rounded-3xl p-6 relative">
              {reviews[current].pending && (
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-semibold">
                  {t('reviews.add.pending')}
                </span>
              )}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${reviews[current].color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {reviews[current].avatar}
                  </div>
                  <div>
                    <div className="text-[#1a1a2e] font-semibold text-sm">
                      {reviews[current].name}
                    </div>
                    <div className="text-gray-400 text-xs">{reviews[current].country}</div>
                  </div>
                </div>
                <StarRating rating={reviews[current].rating} />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#EDE9FE] text-[#7C3AED] text-xs font-semibold mb-3">
                {reviews[current].course}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                "{reviews[current].text}"
              </p>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="flex justify-center items-center gap-4 mb-14">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-[#C4B5FD]/40 flex items-center justify-center text-gray-400 hover:text-[#7C3AED] hover:border-[#C4B5FD] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              {dir === 'rtl' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(Math.min(i, reviews.length - visible))}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i >= current && i < current + visible
                      ? 'bg-[#8B5CF6] w-6'
                      : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current >= reviews.length - visible}
              className="w-10 h-10 rounded-full border border-[#C4B5FD]/40 flex items-center justify-center text-gray-400 hover:text-[#7C3AED] hover:border-[#C4B5FD] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              {dir === 'rtl' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>

          {/* ── CTA : ajouter un review ── */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">{t('reviews.add.subtitle')}</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm shadow-lg shadow-purple-200/50 hover:scale-105 active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg,#8B5CF6,#EC4899)' }}
            >
              <PlusCircle size={18} />
              {t('reviews.add.cta')}
            </button>
          </div>

        </div>
      </section>
    </>
  );
}