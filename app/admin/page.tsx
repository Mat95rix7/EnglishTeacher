'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Dashboard } from '@/components/AdminDash';
import { LoginScreen } from '@/components/LoginScreen';

export const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
export const SESSION_KEY = 'es_admin_session';

export type Tab = 'registrations' | 'questions' | 'reviews';

export function formatDate(ts: any): string {
  if (!ts) return '—';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function StarRow({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= n ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
        />
      ))}
    </span>
  );
}

// ─── Page principale ───────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  // 🔹 Lecture du sessionStorage uniquement côté client
  useEffect(() => {
    const isAuth = sessionStorage.getItem(SESSION_KEY) === '1';
    setAuthenticated(isAuth);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthenticated(false);
  };

  // 🔹 Empêche le mismatch SSR / Client
  if (authenticated === null) {
    return null; // ou un loader si tu veux
  }

  return authenticated
    ? <Dashboard onLogout={handleLogout} />
    : <LoginScreen onLogin={handleLogin} />;
}