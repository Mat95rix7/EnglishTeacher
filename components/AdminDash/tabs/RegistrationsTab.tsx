import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Registration } from "@/types";
import { Pill, FieldItem, Empty } from "@/components/AdminDash/ui";
import { formatDate } from "@/app/admin/page";
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
  registrations: Registration[];
  expanded: string | null;
  setExpanded: (id: string | null) => void;
  onDelete: (id: string) => void;
}

export function RegistrationsTab({ registrations, expanded, setExpanded, onDelete }: Props) {
  const { t } = useI18n();

  return (
    <div className="space-y-2">
      {registrations.length === 0 && <Empty label={t('dashboard.empty')} />}
      {registrations.map((r, idx) => (
        <div
          key={r.id}
          className="row-card border rounded-xl overflow-hidden fade-up"
          style={{ animationDelay: `${idx * 0.04}s`, borderColor: '#f1f5f9' }}
        >
          <div
            className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors"
            onClick={() => setExpanded(expanded === r.id ? null : r.id)}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]}`}>
                {initials(r.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{r.name}</p>
                <p className="text-xs text-slate-400 font-mono">{r.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Pill color="violet">{r.course}</Pill>
              <span className="text-xs text-slate-400 font-mono hidden md:block">{formatDate(r.createdAt)}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onDelete(r.id); }}
                className="p-1.5 text-slate-300 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-all"
              >
                <Trash2 size={13} />
              </button>
              {expanded === r.id
                ? <ChevronUp size={14} className="text-slate-400" />
                : <ChevronDown size={14} className="text-slate-400" />
              }
            </div>
          </div>

          {expanded === r.id && (
            <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 grid grid-cols-2 gap-4">
              {r.whatsapp && <FieldItem label={t('dashboard.whatsapp')} value={r.whatsapp} />}
              {r.level    && <FieldItem label={t('dashboard.level')}    value={r.level} />}
              {r.message  && <FieldItem label={t('dashboard.message')}  value={r.message} full />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}