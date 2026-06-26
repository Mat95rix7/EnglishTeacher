'use client';

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Lang, Translations, I18nContextType } from "./types";

import { about } from "./translations/about";
import { contact } from "./translations/contact";
import { courses } from "./translations/courses";
import { faq } from "./translations/faq";
import { footer } from "./translations/footer";
import { hero } from "./translations/hero";
import { hiw } from "./translations/hiw";
import { nav } from "./translations/nav";
import { register } from "./translations/register";
import { reviews } from "./translations/reviews";
import { stats } from "./translations/stats";
import { dashboard } from "./translations/dashboard";

export const translations: Translations = {
  ...about,
  ...contact,
  ...courses,
  ...faq,
  ...footer,
  ...hero,
  ...hiw,
  ...nav,
  ...register,
  ...reviews,
  ...stats,
  ...dashboard,
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('app_lang') as Lang;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const newLang = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('app_lang', newLang);
      return newLang;
    });
  }, []);

  const setLanguage = useCallback((newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] || entry['ar'] || key;
    },
    [lang]
  );

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t, dir, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
