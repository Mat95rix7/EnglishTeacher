'use client';

import { useState } from 'react';
import { Check, Trash2, Mail, Send, X } from "lucide-react";
import { Question } from "@/types";
import { Pill, Empty } from "@/components/AdminDash/ui";
import { formatDate } from "@/app/admin/page";
import { useI18n } from "@/lib/i18n";
import { isArabic } from '@/lib/utils';

interface Props {
  questions: Question[];
  onMarkAnswered: (id: string) => void;
  onDelete: (id: string) => void;
}

export function QuestionsTab({ questions, onMarkAnswered, onDelete }: Props) {
  const { t } = useI18n();
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText]   = useState('');
  const [sending, setSending]       = useState(false);
  const [sent, setSent]             = useState<string[]>([]);

  const handleReply = async (q: Question) => {
    if (!replyText.trim()) return;
    setSending(true);
    try {
      await fetch('/api/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: q.email, name: q.name, reply: replyText, lang: q.lang ?? 'en' }),
      });
      setSent((prev) => [...prev, q.id]);
      setReplyingTo(null);
      setReplyText('');
      onMarkAnswered(q.id);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

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
          {/* Header : nom + email + date */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-sm font-semibold text-slate-800">{q.name}</span>
            {q.email && <span className="text-xs text-slate-400 font-mono">{q.email}</span>}
            {!q.answered && <span className="pulse w-2 h-2 rounded-full bg-rose-400 inline-block" />}
            <span className="text-xs text-slate-400 font-mono ms-auto">{formatDate(q.createdAt)}</span>
          </div>

          {/* Question */}
          <p className={`text-sm text-slate-500 leading-relaxed mb-3 ${isArabic(q.question) ? 'text-right' : 'text-left'}`}>{q.question}</p>

          {/* Actions : passe en colonne sur mobile, ligne sur sm+ */}
          <div className="flex flex-wrap items-center gap-2">
            {q.email && !sent.includes(q.id) && (
              <button
                onClick={() => {
                  setReplyingTo(replyingTo === q.id ? null : q.id);
                  setReplyText('');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-violet-700 bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-lg transition-all"
              >
                <Mail size={12} /> Reply
              </button>
            )}

            {!q.answered && !sent.includes(q.id) ? (
              <button
                onClick={() => onMarkAnswered(q.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-all"
              >
                <Check size={12} /> {t('dashboard.markAnswered')}
              </button>
            ) : (
              <Pill color="green">
                <Check size={11} className="me-1 inline" />
                {sent.includes(q.id) ? 'Email sent' : t('dashboard.answered')}
              </Pill>
            )}

            <button
              onClick={() => onDelete(q.id)}
              className="p-1.5 text-slate-300 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-all ml-auto"
            >
              <Trash2 size={13} />
            </button>
          </div>

          {/* Zone de réponse inline */}
          {replyingTo === q.id && (
            <div className="mt-3 pt-3 border-t border-rose-100">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={13} className="text-violet-400" />
                <span className="text-xs text-slate-400">
                  Reply to <span className="font-mono text-violet-600">{q.email}</span>
                </span>
              </div>
              <textarea
                rows={3}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write your reply here..."
                className="w-full text-sm text-slate-700 bg-white border border-violet-200 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition-all placeholder-slate-300"
              />
              <div className="flex items-center justify-end gap-2 mt-2">
                <button
                  onClick={() => { setReplyingTo(null); setReplyText(''); }}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                >
                  <X size={12} /> Cancel
                </button>
                <button
                  onClick={() => handleReply(q)}
                  disabled={sending || !replyText.trim()}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={12} />
                  )}
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}