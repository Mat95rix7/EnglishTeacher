'use client';

import { useState, useEffect, use } from 'react';
import { ChevronLeft, ChevronRight, Quote, PlusCircle } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { readReviews } from '@/services/reviews/reviews';
import { StarRating } from '@/services/reviews/utils';
import { Review } from '@/services/reviews/types';
import { AddReviewForm } from './AddReviewForm';
import { registrationService } from '@/seed/seedRegistrations';
import { questionService } from '@/seed/seedQuestions';

/* ─────────────────────────────────────────────
   Composant principal
───────────────────────────────────────────── */
export default function Reviews() {
  const { t, dir } = useI18n();

  const [reviews, setReviews]   = useState<Review[]>([]);
  const [loading, setLoading]   = useState(true);
  const [current, setCurrent]   = useState(0);
  const [showForm, setShowForm] = useState(false);
  const visible = 3;

  // ── Chargement depuis Firestore au montage ─────────────────────────────────
  useEffect(() => {
    readReviews()
      .then((data) => {
        // Affiche uniquement les avis validés (pending: false)
        setReviews(data.filter((r) => !r.pending));
      })
      .catch((err) => console.error('readReviews error:', err))
      .finally(() => setLoading(false));
  }, []);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(reviews.length - visible, c + 1));

  const displayed = reviews.slice(current, current + visible);

  const handleNewReview = (r: Review) => {
    // Le nouvel avis est pending → on l'ajoute en local pour l'UI
    // mais il n'est pas affiché publiquement tant que pending: false en base
    setReviews((prev) => [...prev, r]);
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
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight">
              {t('reviews.title1')}{' '}
              <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
                {t('reviews.titleHighlight')}
              </span>
            </h2>
            <div className="inline-flex items-center gap-3 mt-2">
              <StarRating rating={5} size={20} />
              <span className="text-3xl font-black text-[#1a1a2e]">4.9</span>
              <span className="text-gray-400 text-sm">{t('reviews.totalReviews')}</span>
            </div>
          </div>

          {/* ── Featured review ── */}
          <div className="relative mb-12 bg-linear-to-r from-[#EDE9FE] via-[#FCE7F3] to-[#FEF9C3] border border-[#C4B5FD]/30 rounded-3xl p-8 md:p-12 overflow-hidden">
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
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  PK
                </div>
                <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                  <div className="text-[#1a1a2e] font-bold text-sm">{t('reviews.featured.name')}</div>
                  <div className="text-gray-500 text-xs">{t('reviews.featured.meta')}</div>
                </div>
                <StarRating rating={5} size={16} />
              </div>
            </div>
          </div>

          {/* ── État de chargement ── */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 rounded-full border-4 border-[#C4B5FD]/40 border-t-[#8B5CF6] animate-spin" />
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-10">
              Aucun avis pour le moment.
            </p>
          ) : (
            <>
              {/* ── Cards desktop ── */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {displayed.map((review, i) => (
                  <div
                    key={review.id ?? i}
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
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* ── Card mobile ── */}
              <div className="md:hidden mb-8">
                {reviews[current] && (
                  <div className="bg-white/70 backdrop-blur-sm border border-[#C4B5FD]/25 rounded-3xl p-6 relative">
                    {reviews[current].pending && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-semibold">
                        {t('reviews.add.pending')}
                      </span>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-full bg-linear-to-br ${reviews[current].color} flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {reviews[current].avatar}
                        </div>
                        <div>
                          <div className="text-[#1a1a2e] font-semibold text-sm">{reviews[current].name}</div>
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
                )}
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
            </>
          )}

          {/* ── CTA ── */}
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