import { Check, Trash2 } from "lucide-react";
import { Question } from "@/types";
import { Pill, Empty } from "@/components/AdminDash/ui";
import { formatDate } from "@/app/admin/page";
import { useI18n } from "@/lib/i18n";

interface Props {
  questions: Question[];
  onMarkAnswered: (id: string) => void;
  onDelete: (id: string) => void;
}

export function QuestionsTab({ questions, onMarkAnswered, onDelete }: Props) {
  const { t } = useI18n();

  return (
    <div className="space-y-2">
      {questions.length === 0 && <Empty label={t('dashboard.empty')} />}
      {questions.map((q, idx) => (
        <div
          key={q.id}
          className={`fade-up rounded-xl border px-4 py-4 transition-colors ${
            q.answered ? 'border-slate-100 bg-white' : 'border-rose-100 bg-rose-50'
          }`}
          style={{ animationDelay: `${idx * 0.04}s` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-sm font-semibold text-slate-800">{q.name}</span>
                {q.email && <span className="text-xs text-slate-400 font-mono">{q.email}</span>}
                {!q.answered && <span className="pulse w-2 h-2 rounded-full bg-rose-400 inline-block" />}
                <span className="text-xs text-slate-400 font-mono ms-auto">{formatDate(q.createdAt)}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{q.question}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {!q.answered ? (
                <button
                  onClick={() => onMarkAnswered(q.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-all"
                >
                  <Check size={12} /> {t('dashboard.markAnswered')}
                </button>
              ) : (
                <Pill color="green">
                  <Check size={11} className="me-1 inline" />
                  {t('dashboard.answered')}
                </Pill>
              )}
              <button
                onClick={() => onDelete(q.id)}
                className="p-1.5 text-slate-300 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-all"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}