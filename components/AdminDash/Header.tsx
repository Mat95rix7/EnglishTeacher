import { useI18n } from "@/lib/i18n";
import { Languages, LogOut, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ onLogout, toggleLang, lang, fetchAll }: { onLogout: () => void; toggleLang: () => void; lang: string; fetchAll: () => void }) {
    const { t } = useI18n();
return (
      <header className="bg-[#644bb6] border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

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
    );
  }