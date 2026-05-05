// ─── Login Screen ──────────────────────────────────────────────────────────────

import { ADMIN_PASSWORD, SESSION_KEY } from "@/app/admin/page";
import { EyeOff, X, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw]         = useState('');
  const [show, setShow]     = useState(false);
  const [error, setError]   = useState('');
  const [shake, setShake]   = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      onLogin();
    } else {
      setError('Incorrect password. Please try again.');
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="min-h-screen bg-[#1a0d3d] flex items-center justify-center px-4">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#7C3AED]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#EC4899]/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #C4B5FD 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>

      <div
        className={`relative w-full max-w-md transition-transform ${shake ? 'animate-[shake_0.5s_ease]' : ''}`}
        style={{
          animation: shake
            ? 'shake 0.5s ease'
            : undefined,
        }}
      >
        <style>{`
          @keyframes shake {
            0%,100% { transform:translateX(0) }
            20%     { transform:translateX(-8px) }
            40%     { transform:translateX(8px) }
            60%     { transform:translateX(-6px) }
            80%     { transform:translateX(6px) }
          }
          @keyframes fadeUp {
            from { opacity:0; transform:translateY(20px) }
            to   { opacity:1; transform:translateY(0) }
          }
          .fade-up { animation: fadeUp 0.6s ease both; }
        `}</style>

        {/* Card */}
        <div className="fade-up bg-[#260f52]/80 backdrop-blur-xl border border-[#5B3BA0]/40 rounded-3xl p-8 shadow-2xl shadow-black/50">
          {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full ring-2 ring-[#E8C4FF]/60 ring-offset-2 ring-offset-[#2D1B69] overflow-hidden">
            <Image
              src="/Logo.jpeg"
              alt="English Sahla with Khawla"
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>
        </div>

          <h1 className="text-2xl font-extrabold text-white text-center mb-1">Admin Panel</h1>
          <p className="text-[#9F7AEA] text-sm text-center mb-8">English Sahla with Khawla</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                value={pw}
                onChange={(e) => { setPw(e.target.value); setError(''); }}
                placeholder="Password"
                className="w-full bg-[#1a0d3d]/60 border border-[#5B3BA0]/50 rounded-xl px-4 py-3 pr-11 text-white placeholder-[#7B6A9B] text-sm focus:outline-none focus:border-[#9F7AEA] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B6A9B] hover:text-white transition-colors"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-rose-400 text-xs flex items-center gap-1.5">
                <X className="w-3.5 h-3.5" /> {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white text-sm bg-linear-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/40"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}