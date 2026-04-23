import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Languages } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const navLinks = [
  { labelKey: 'nav.home', href: '#hero' },
  { labelKey: 'nav.courses', href: '#courses' },
  { labelKey: 'nav.testimonials', href: '#testimonials' },
  { labelKey: 'nav.register', href: '#register' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLang, lang } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-beige-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-lavender-300/80 flex items-center justify-center group-hover:bg-lavender-400 transition-colors duration-300">
              <img
                src="/Logo.jpeg"
                alt="English Sahla with Khawla"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
            </div>
            <span className="heading-display text-xl font-semibold text-beige-800">
              {t('nav.title')}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-beige-700 hover:text-lavender-600 rounded-lg hover:bg-lavender-50/60 transition-all duration-200"
              >
                {t(link.labelKey)}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-beige-700 hover:text-lavender-600 rounded-lg hover:bg-lavender-50/60 transition-all duration-200"
              title={lang === 'en' ? 'العربية' : 'English'}
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <a href="#register" className="btn-primary ml-3 !py-2.5 !px-6 text-sm">
              {t('nav.signup')}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLang}
              className="p-2 rounded-lg text-beige-700 hover:bg-beige-100 transition-colors"
              title={lang === 'en' ? 'العربية' : 'English'}
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-beige-700 hover:bg-beige-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-beige-200/50 animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-beige-700 hover:text-lavender-600 rounded-lg hover:bg-lavender-50/60 transition-all"
              >
                {t(link.labelKey)}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="btn-primary block text-center mt-3 text-sm"
            >
              {t('nav.signup')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
