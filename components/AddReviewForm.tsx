import { useI18n } from "@/lib/i18n";
import { AVATAR_COLORS } from "@/services/reviews/constants";
import { addReview } from "@/services/reviews/reviews";
import { Review } from "@/services/reviews/types";
import { StarRating } from "@/services/reviews/utils";
import { X } from "lucide-react";
import { useState } from "react";

/* ─────────────────────────────────────────────
   Formulaire d'ajout
───────────────────────────────────────────── */
export function AddReviewForm({
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

    try {
      // ── Envoi vers Firestore ──────────────────────────────
      const id = await addReview(form);

      const initials = form.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

      const newReview: Review = {
        ...form,
        id,
        avatar:  initials,
        color:   AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
        pending: true,
      };

      setSubmitting(false);
      setSuccess(true);
      onSubmit(newReview);
    } catch (err) {
      console.error('Firestore addReview error:', err);
      setError('Une erreur est survenue. Merci de réessayer.');
      setSubmitting(false);
    }
  };

  const inputClass = `w-full bg-white/70 border border-[#C4B5FD]/40 rounded-2xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(26,20,50,0.5)', backdropFilter: 'blur(6px)' }}
    >
      <div
        dir={dir}
        className="relative w-full max-w-lg bg-[#f7f3ed] rounded-3xl p-8 shadow-2xl border border-[#C4B5FD]/30 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
        >
          <X size={16} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-black text-[#1a1a2e] mb-2">
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
            <h3 className="text-2xl font-black text-[#1a1a2e] mb-1">
              {t('reviews.add.title')}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{t('reviews.add.subtitle')}</p>

            <div className="space-y-4">
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
