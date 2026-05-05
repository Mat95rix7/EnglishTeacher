'use client';

import { Tab, StarRow, formatDate } from "@/app/admin/page";
import { Question, Registration, Review } from "@/types";
import { db } from "@/lib/firebase";
import {
  collection, deleteDoc, doc, getDocs,
  orderBy, query, updateDoc,
} from "firebase/firestore";
import {
  Check, ChevronDown, ChevronUp, LogOut,
  MessageSquare, RefreshCw, Star,
  Trash2, Users, Clock, Globe, AlertTriangle,
  Languages,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

/* ─────────────────────────────────────────────────────────────────────────── */

export function Dashboard({ onLogout }: { onLogout: () => void }) {
    
  const [tab, setTab] = useState<Tab>('registrations');
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [indexError, setIndexError] = useState(false);
  const { t, lang, dir, toggleLang } = useI18n();

  const safeDocs = async (col: string) => {
    try {
      return await getDocs(query(collection(db, col), orderBy('createdAt', 'desc')));
    } catch (e: unknown) {
      const err = e as { code?: string; message?: string };
      if (err?.code === 'failed-precondition' || err?.message?.includes('index')) {
        setIndexError(true);
        return getDocs(collection(db, col));
      }
      throw e;
    }
  };

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setIndexError(false);
    try {
      const [regSnap, qSnap, revSnap] = await Promise.all([
        safeDocs('registrations'),
        safeDocs('questions'),
        safeDocs('reviews'),
      ]);
      setRegistrations(regSnap.docs.map((d) => ({ id: d.id, ...d.data() } as Registration)));
      setQuestions(qSnap.docs.map((d) => ({ id: d.id, ...d.data() } as Question)));
      setReviews(revSnap.docs.map((d) => ({ id: d.id, ...d.data() } as Review)));
    } catch (err) {
      console.error('Firestore error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

    const togglePublished = async (id: string, cur: boolean) => {
        await updateDoc(doc(db, 'reviews', id), { pending: !cur });
        setReviews(p => p.map(r => r.id === id ? { ...r, pending: !cur } : r));
    };

    const toggleFeatured = async (id: string, cur: boolean) => {
        if (!cur) {
            const updates = reviews
            .filter(r => r.featured && r.id !== id)
            .map(r => updateDoc(doc(db, 'reviews', r.id), { featured: false }));
            await Promise.all(updates);
        }

        await updateDoc(doc(db, 'reviews', id), { featured: !cur });

        setReviews(p =>
            p.map(r => {
            if (r.id === id) return { ...r, featured: !cur };
            if (!cur && r.featured) return { ...r, featured: false };
            return r;
            })
        );
    };
  const deleteReview = async (id: string) => {
    if (!confirm(t('dashboard.confirmDel'))) return;
    await deleteDoc(doc(db, 'reviews', id));
    setReviews(p => p.filter(r => r.id !== id));
  };
  const markAnswered = async (id: string) => {
    await updateDoc(doc(db, 'questions', id), { answered: true });
    setQuestions(p => p.map(q => q.id === id ? { ...q, answered: true } : q));
  };
  const deleteQuestion = async (id: string) => {
    if (!confirm(t('dashboard.confirmDel'))) return;
    await deleteDoc(doc(db, 'questions', id));
    setQuestions(p => p.filter(q => q.id !== id));
  };
  const deleteReg = async (id: string) => {
    if (!confirm(t('dashboard.confirmDel'))) return;
    await deleteDoc(doc(db, 'registrations', id));
    setRegistrations(p => p.filter(r => r.id !== id));
  };

  /* ── Counts ──────────────────────────────────────────────────────────── */
  const pendingReviews = reviews.filter(r => r.pending).length;
  const unanswered = questions.filter(q => !q.answered).length;

  const tabs: { key: Tab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { key: 'registrations', label: t('dashboard.registrations'), icon: <Users size={14} />, badge: registrations.length || undefined },
    { key: 'questions', label: t('dashboard.questions'), icon: <MessageSquare size={14} />, badge: unanswered || undefined },
    { key: 'reviews', label: t('dashboard.reviews'), icon: <Star size={14} />, badge: pendingReviews || undefined },
  ];

  /* ── Avatar initials helper ──────────────────────────────────────────── */
  const initials = (name: string) =>
    name.split(' ').map((w: string) => w[0]).join('').toUpperCase().slice(0, 2);

  const AVATAR_COLORS = [
    'bg-violet-100 text-violet-700',
    'bg-sky-100 text-sky-700',
    'bg-emerald-100 text-emerald-700',
    'bg-rose-100 text-rose-700',
    'bg-amber-100 text-amber-700',
  ];

  /* ═══════════════════════════════════════════════════════════════════════ */
  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-800"
      dir={dir}
    >
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <header className="bg-[#644bb6] border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#E8C4FF]/30 scale-110 group-hover:scale-125 transition-transform duration-300" />
                    <div className="relative w-10 h-10 rounded-full ring-2 ring-[#E8C4FF]/60 ring-offset-2 ring-offset-[#2D1B69] overflow-hidden">
                        <Image
                            src="/Logo.jpeg"
                            alt="English Sahla with Khawla"
                            fill
                            sizes="40px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="flex flex-col leading-tight">
                    <p className="text-[15px] font-bold text-white tracking-wide">{t('dashboard.subtitle')}</p>
                    <p className="text-amber-300 text-[16px] leading-tight">{t('dashboard.title')}</p>
                </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-medium transition-all"
            >
              <Languages size={12} />
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>

            <button
              onClick={fetchAll}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-all"
              title={t('dashboard.refresh')}
            >
              <RefreshCw size={13} />
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium transition-all"
            >
              <LogOut size={12} />
              {t('dashboard.logout')}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5">

        {/* ── Index warning ────────────────────────────────────────────── */}
        {indexError && (
          <div className="fade-up flex items-center gap-3 px-4 py-3 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 text-sm">
            <AlertTriangle size={15} className="shrink-0" />
            {t('dashboard.indexError')}
          </div>
        )}

        {/* ── KPI cards ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-3 fade-up">
          {[
            {
              label: t('dashboard.registrations'),
              value: registrations.length,
              icon: <Users size={16} />,
              bg: 'bg-violet-50',
              border: 'border-violet-100',
              icon_bg: 'bg-violet-100',
              icon_color: 'text-violet-600',
              val_color: 'text-violet-700',
            },
            {
              label: t('dashboard.unanswered'),
              value: unanswered,
              icon: <MessageSquare size={16} />,
              bg: 'bg-rose-50',
              border: 'border-rose-100',
              icon_bg: 'bg-rose-100',
              icon_color: 'text-rose-500',
              val_color: 'text-rose-600',
            },
            {
              label: t('dashboard.toValidate'),
              value: pendingReviews,
              icon: <Clock size={16} />,
              bg: 'bg-amber-50',
              border: 'border-amber-100',
              icon_bg: 'bg-amber-100',
              icon_color: 'text-amber-600',
              val_color: 'text-amber-700',
            },
          ].map((k) => (
            <div
              key={k.label}
              className={`${k.bg} border ${k.border} rounded-2xl p-4 flex flex-col gap-3`}
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-md font-medium">{k.label}</span>
                <div className={`w-7 h-7 rounded-lg ${k.icon_bg} ${k.icon_color} flex items-center justify-center`}>
                  {k.icon}
                </div>
              </div>
              <p className={`text-3xl font-semibold text-center ${k.val_color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* ── Main panel ───────────────────────────────────────────────── */}
        <div
          className="bg-[#f1f1e3] border border-slate-200 rounded-2xl overflow-hidden fade-up"
          style={{ animationDelay: '0.08s' }}
        >
          {/* Tab bar */}
          <div className="flex justify-around bg-amber-200 border-b border-slate-100">
            {tabs.map((tb) => (
              <button
                key={tb.key}
                onClick={() => setTab(tb.key)}
                className={`relative flex items-center gap-2 px-5 py-3.5 text-lg font-medium transition-colors ${
                  tab === tb.key
                    ? 'text-violet-700'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tb.icon}
                <span className="hidden sm:inline">{tb.label}</span>
                {tb.badge !== undefined && (
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                    tb.key === 'reviews'
                      ? 'bg-amber-100 text-amber-700'
                      : tb.key === 'questions'
                      ? 'bg-rose-100 text-rose-600'
                      : 'bg-violet-100 text-violet-600'
                  }`}>
                    {tb.badge}
                  </span>
                )}
                {tab === tb.key && <span className="tab-indicator" />}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <div className="w-7 h-7 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" />
                <p className="text-slate-400 text-sm">{t('dashboard.loading')}</p>
              </div>
            ) : (
              <>
                {/* ────── REGISTRATIONS ────── */}
                {tab === 'registrations' && (
                  <div className="space-y-2">
                    {registrations.length === 0 && <Empty label={t('dashboard.empty')} />}
                    {registrations.map((r, idx) => (
                      <div
                        key={r.id}
                        className="row-card border border-slate-150 rounded-xl overflow-hidden fade-up"
                        style={{
                          animationDelay: `${idx * 0.04}s`,
                          borderColor: '#f1f5f9',
                        }}
                      >
                        {/* Row header */}
                        <div
                          className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors"
                          onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold shrink-0 ${
                                AVATAR_COLORS[idx % AVATAR_COLORS.length]
                              }`}
                            >
                              {initials(r.name)}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-800">{r.name}</p>
                              <p className="text-xs text-slate-400 font-mono">{r.email}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <Pill color="violet">{r.course}</Pill>
                            <span className="text-xs text-slate-400 font-mono hidden md:block">
                              {formatDate(r.createdAt)}
                            </span>
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteReg(r.id); }}
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

                        {/* Expanded detail */}
                        {expanded === r.id && (
                          <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 grid grid-cols-2 gap-4">
                            {r.whatsapp && <FieldItem label={t('dashboard.whatsapp')} value={r.whatsapp} />}
                            {r.level && <FieldItem label={t('dashboard.level')} value={r.level} />}
                            {r.message && <FieldItem label={t('dashboard.message')} value={r.message} full />}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* ────── QUESTIONS ────── */}
                {tab === 'questions' && (
                  <div className="space-y-2">
                    {questions.length === 0 && <Empty label={t('dashboard.empty')} />}
                    {questions.map((q, idx) => (
                      <div
                        key={q.id}
                        className={`fade-up rounded-xl border px-4 py-4 transition-colors ${
                          q.answered
                            ? 'border-slate-100 bg-white'
                            : 'border-rose-100 bg-rose-50'
                        }`}
                        style={{ animationDelay: `${idx * 0.04}s` }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <span className="text-sm font-semibold text-slate-800">{q.name}</span>
                              {q.email && (
                                <span className="text-xs text-slate-400 font-mono">{q.email}</span>
                              )}
                              {!q.answered && (
                                <span className="pulse w-2 h-2 rounded-full bg-rose-400 inline-block" />
                              )}
                              <span className="text-xs text-slate-400 font-mono ms-auto">
                                {formatDate(q.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{q.question}</p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {!q.answered ? (
                              <button
                                onClick={() => markAnswered(q.id)}
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
                              onClick={() => deleteQuestion(q.id)}
                              className="p-1.5 text-slate-300 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-all"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ────── REVIEWS ────── */}
                {tab === 'reviews' && (
                  <div className="space-y-2">
                    {reviews.length === 0 && <Empty label={t('dashboard.empty')} />}
                    {reviews.map((r, idx) => (
                      <div
                        key={r.id}
                        className={`fade-up rounded-xl border px-4 py-4 transition-colors ${
                          r.pending
                            ? 'border-amber-200 bg-amber-50'
                            : 'border-slate-100 bg-white'
                        }`}
                        style={{ animationDelay: `${idx * 0.04}s` }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-semibold shrink-0 ${
                                AVATAR_COLORS[idx % AVATAR_COLORS.length]
                              }`}
                            >
                              {initials(r.name)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className="text-sm font-semibold text-slate-800">{r.name}</span>
                                <span className="text-xs text-slate-400">{r.country}</span>
                                <StarRow n={r.rating} />
                                {r.featured && (
                                  <Pill color="amber">★ Hero</Pill>
                                )}
                                <span className="text-xs text-slate-400 font-mono ms-auto">
                                  {formatDate(r.createdAt)}
                                </span>
                              </div>
                              <Pill color="violet" className="mb-2">{r.course}</Pill>
                              <p className="text-sm text-slate-500 leading-relaxed mt-1">{r.text}</p>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col gap-2 shrink-0 items-center">
                            {r.pending ? (
                                <button
                                    onClick={() => togglePublished(r.id, true)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg shadow-sm transition-all"
                                >
                                    <Check size={12} /> {t('dashboard.validate')}
                                </button>
                                ) : (
                                <button
                                    onClick={() => togglePublished(r.id, false)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-200 hover:bg-rose-50 hover:text-rose-600 border border-slate-200 hover:border-rose-200 rounded-lg transition-all"
                                >
                                    <Globe size={12} /> {t('dashboard.unpublish')}
                                </button>
                                )}

                            <button
                              onClick={() => toggleFeatured(r.id, r.featured)}
                              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                                r.featured
                                  ? 'text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100'
                                  : 'text-slate-500 bg-purple-200  border-slate-200 hover:bg-slate-50 hover:text-slate-700'
                              }`}
                            >
                              <Star size={12} className={r.featured ? 'fill-amber-500 text-amber-500' : ''} />
                              {r.featured ? t('dashboard.removeHighlight') : t('dashboard.highlight')}
                            </button>

                            <button
                              onClick={() => deleteReview(r.id)}
                              className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-all"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Micro-components ──────────────────────────────────────────────────────── */

function Empty({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-2 text-slate-300">
      <span className="text-4xl">◌</span>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

function FieldItem({
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
      <p className="text-sm text-slate-700">{value}</p>
    </div>
  );
}

type PillColor = 'violet' | 'green' | 'amber' | 'rose';

function Pill({
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