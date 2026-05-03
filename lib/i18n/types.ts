export type Lang = 'en' | 'ar';

export type Translations = Record<string, Record<string, string>>;

export interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}