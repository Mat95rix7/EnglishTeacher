'use client';

import { Tab } from "@/app/admin/page";
import { Question, Registration, Review } from "@/types";
import { db } from "@/lib/firebase";
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { AlertTriangle, Clock, MessageSquare, Star, Users } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import Header from "./Header";
import { RegistrationsTab } from "./tabs/RegistrationsTab";
import { QuestionsTab } from "./tabs/QuestionsTab";
import { ReviewsTab } from "./tabs/ReviewsTab";

export function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab]                   = useState<Tab>('registrations');
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [questions, setQuestions]       = useState<Question[]>([]);
  const [reviews, setReviews]           = useState<Review[]>([]);
  const [loading, setLoading]           = useState(true);
  const [expanded, setExpanded]         = useState<string | null>(null);
  const [indexError, setIndexError]     = useState(false);
  const { t, lang, dir, toggleLang }   = useI18n();

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

  /* ── Firestore handlers ─────────────────────────────────────────────── */
  const togglePublished  = async (id: string, cur: boolean) => {
    await updateDoc(doc(db, 'reviews', id), { pending: !cur });
    setReviews(p => p.map(r => r.id === id ? { ...r, pending: !cur } : r));
  };
  const toggleFeatured = async (id: string, cur: boolean) => {
    if (!cur) {
      await Promise.all(reviews.filter(r => r.featured && r.id !== id).map(r => updateDoc(doc(db, 'reviews', r.id), { featured: false })));
    }
    await updateDoc(doc(db, 'reviews', id), { featured: !cur });
    setReviews(p => p.map(r => {
      if (r.id === id) return { ...r, featured: !cur };
      if (!cur && r.featured) return { ...r, featured: false };
      return r;
    }));
  };
  const deleteReview    = async (id: string) => { if (!confirm(t('dashboard.confirmDel'))) return; await deleteDoc(doc(db, 'reviews', id)); setReviews(p => p.filter(r => r.id !== id)); };
  const markAnswered    = async (id: string) => { await updateDoc(doc(db, 'questions', id), { answered: true }); setQuestions(p => p.map(q => q.id === id ? { ...q, answered: true } : q)); };
  const deleteQuestion  = async (id: string) => { if (!confirm(t('dashboard.confirmDel'))) return; await deleteDoc(doc(db, 'questions', id)); setQuestions(p => p.filter(q => q.id !== id)); };
  const deleteReg       = async (id: string) => { if (!confirm(t('dashboard.confirmDel'))) return; await deleteDoc(doc(db, 'registrations', id)); setRegistrations(p => p.filter(r => r.id !== id)); };

  /* ── Counts & tabs config ───────────────────────────────────────────── */
  const pendingReviews = reviews.filter(r => r.pending).length;
  const unanswered     = questions.filter(q => !q.answered).length;

  const tabs = [
    { key: 'registrations' as Tab, label: t('dashboard.registrations'), icon: <Users size={14} />,       badge: registrations.length || undefined },
    { key: 'questions'     as Tab, label: t('dashboard.questions'),      icon: <MessageSquare size={14} />, badge: unanswered || undefined },
    { key: 'reviews'       as Tab, label: t('dashboard.reviews'),        icon: <Star size={14} />,         badge: pendingReviews || undefined },
  ];

  const kpis = [
    { label: t('dashboard.registrations'), value: registrations.length, icon: <Users size={16} />,         bg: 'bg-violet-50', border: 'border-violet-100', icon_bg: 'bg-violet-100', icon_color: 'text-violet-600', val_color: 'text-violet-700' },
    { label: t('dashboard.unanswered'),    value: unanswered,            icon: <MessageSquare size={16} />, bg: 'bg-rose-50',   border: 'border-rose-100',   icon_bg: 'bg-rose-100',   icon_color: 'text-rose-500',   val_color: 'text-rose-600'   },
    { label: t('dashboard.toValidate'),    value: pendingReviews,        icon: <Clock size={16} />,         bg: 'bg-amber-50',  border: 'border-amber-100',  icon_bg: 'bg-amber-100',  icon_color: 'text-amber-600',  val_color: 'text-amber-700'  },
  ];

  /* ═══════════════════════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" dir={dir}>
      <Header onLogout={onLogout} toggleLang={toggleLang} lang={lang} fetchAll={fetchAll} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5">

        {indexError && (
          <div className="fade-up flex items-center gap-3 px-4 py-3 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 text-sm">
            <AlertTriangle size={15} className="shrink-0" />
            {t('dashboard.indexError')}
          </div>
        )}

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3 fade-up">
          {kpis.map((k) => (
            <div key={k.label} className={`${k.bg} border ${k.border} rounded-2xl p-4 flex flex-col gap-3`}>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-md font-medium">{k.label}</span>
                <div className={`w-7 h-7 rounded-lg ${k.icon_bg} ${k.icon_color} flex items-center justify-center`}>{k.icon}</div>
              </div>
              <p className={`text-3xl font-semibold text-center ${k.val_color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="bg-[#f1f1e3] border border-slate-200 rounded-2xl overflow-hidden fade-up" style={{ animationDelay: '0.08s' }}>
          <div className="flex justify-around bg-amber-200 border-b border-slate-100">
            {tabs.map((tb) => (
              <button
                key={tb.key}
                onClick={() => setTab(tb.key)}
                className={`relative flex items-center gap-2 px-5 py-3.5 text-lg font-medium transition-colors ${tab === tb.key ? 'text-violet-700' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tb.icon}
                <span className="hidden sm:inline">{tb.label}</span>
                {tb.badge !== undefined && (
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                    tb.key === 'reviews' ? 'bg-amber-100 text-amber-700' : tb.key === 'questions' ? 'bg-rose-100 text-rose-600' : 'bg-violet-100 text-violet-600'
                  }`}>{tb.badge}</span>
                )}
                {tab === tb.key && <span className="tab-indicator" />}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-5">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <div className="w-7 h-7 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" />
                <p className="text-slate-400 text-sm">{t('dashboard.loading')}</p>
              </div>
            ) : (
              <>
                {tab === 'registrations' && <RegistrationsTab registrations={registrations} expanded={expanded} setExpanded={setExpanded} onDelete={deleteReg} />}
                {tab === 'questions'     && <QuestionsTab     questions={questions}     onMarkAnswered={markAnswered}   onDelete={deleteQuestion} />}
                {tab === 'reviews'       && <ReviewsTab       reviews={reviews}         onTogglePublished={togglePublished} onToggleFeatured={toggleFeatured} onDelete={deleteReview} />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}