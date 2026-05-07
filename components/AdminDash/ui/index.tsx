import { isArabic } from "@/lib/utils";

export function Empty({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-2 text-slate-300">
      <span className="text-4xl">◌</span>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

export function FieldItem({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? 'col-span-2' : ''}>
      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-0.5">
        {label}
      </p>
      <p className={`text-sm text-slate-700 ${isArabic(value) ? 'text-right' : 'text-left'}`}>{value}</p>
    </div>
  );
}

type PillColor = 'violet' | 'green' | 'amber' | 'rose';

export function Pill({
  children,
  color = 'violet',
  className = '',
}: {
  children: React.ReactNode;
  color?: PillColor;
  className?: string;
}) {
  const styles: Record<PillColor, string> = {
    violet: 'bg-violet-50 text-violet-700 border-violet-100',
    green:  'bg-emerald-50 text-emerald-700 border-emerald-100',
    amber:  'bg-amber-50 text-amber-700 border-amber-200',
    rose:   'bg-rose-50 text-rose-600 border-rose-100',
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${styles[color]} ${className}`}
    >
      {children}
    </span>
  );
}