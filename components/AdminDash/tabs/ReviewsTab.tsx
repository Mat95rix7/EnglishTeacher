import { Check, Globe, Star, Trash2 } from "lucide-react";
import { Review } from "@/types";
import { Pill, Empty } from "@/components/AdminDash/ui";
import { StarRow, formatDate } from "@/app/admin/page";
import { useI18n } from "@/lib/i18n";

const AVATAR_COLORS = [
  'bg-violet-100 text-violet-700',
  'bg-sky-100 text-sky-700',
  'bg-emerald-100 text-emerald-700',
  'bg-rose-100 text-rose-700',
  'bg-amber-100 text-amber-700',
];

const initials = (name: string) =>
  name.split(' ').map((w: string) => w[0]).join('').toUpperCase().slice(0, 2);

interface Props {
  reviews: Review[];
  onTogglePublished: (id: string, cur: boolean) => void;
  onToggleFeatured: (id: string, cur: boolean) => void;
  onDelete: (id: string) => void;
}

export function ReviewsTab({ reviews, onTogglePublished, onToggleFeatured, onDelete }: Props) {
  const { t } = useI18n();

  return (
    <div className="space-y-2">
      {reviews.length === 0 && <Empty label={t('dashboard.empty')} />}
      {reviews.map((r, idx) => (
        <div
          key={r.id}
          className={`fade-up rounded-xl border px-4 py-4 transition-colors ${
            r.pending ? 'border-amber-200 bg-amber-50' : 'border-slate-100 bg-white'
          }`}
          style={{ animationDelay: `${idx * 0.04}s` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-semibold shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]}`}>
                {initials(r.name)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-sm font-semibold text-slate-800">{r.name}</span>
                  <span className="text-xs text-slate-400">{r.country}</span>
                  <StarRow n={r.rating} />
                  {r.featured && <Pill color="amber">★ Hero</Pill>}
                  <span className="text-xs text-slate-400 font-mono ms-auto">{formatDate(r.createdAt)}</span>
                </div>
                <Pill color="violet" className="mb-2">{r.course}</Pill>
                <p className="text-sm text-slate-500 leading-relaxed mt-1">{r.text}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 shrink-0 items-center">
              {r.pending ? (
                <button
                  onClick={() => onTogglePublished(r.id, true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg shadow-sm transition-all"
                >
                  <Check size={12} /> {t('dashboard.validate')}
                </button>
              ) : (
                <button
                  onClick={() => onTogglePublished(r.id, false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-200 hover:bg-rose-50 hover:text-rose-600 border border-slate-200 hover:border-rose-200 rounded-lg transition-all"
                >
                  <Globe size={12} /> {t('dashboard.unpublish')}
                </button>
              )}

              <button
                onClick={() => onToggleFeatured(r.id, r.featured)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  r.featured
                    ? 'text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100'
                    : 'text-slate-500 bg-purple-200 border-slate-200 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <Star size={12} className={r.featured ? 'fill-amber-500 text-amber-500' : ''} />
                {r.featured ? t('dashboard.removeHighlight') : t('dashboard.highlight')}
              </button>

              <button
                onClick={() => onDelete(r.id)}
                className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-all"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}