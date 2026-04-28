'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import Image from 'next/image';

const navLinks = [
  { labelKey: 'nav.home', href: '#hero', emoji: '🏠' },
  { labelKey: 'nav.courses', href: '#courses', emoji: '📚' },
  { labelKey: 'nav.howItWorks', href: '#how-it-works', emoji: '👤' },
  { labelKey: 'nav.about', href: '#about', emoji: '👩‍🏫' },
  { labelKey: 'nav.reviews', href: '#reviews', emoji: '💬' },
  { labelKey: 'nav.contact', href: '#contact', emoji: '📩' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const { t, toggleLang, lang } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#36256d]/95 backdrop-blur-md shadow-xl shadow-[#2D1B69]/20'
            : 'bg-[#644bb6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo + Title ── */}
            <a
              href="#hero"
              className="flex items-center gap-3 group"
            >
              {/* Logo ring */}
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

              {/* Title block */}
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold text-white tracking-wide">
                  {t('nav.title')}
                </span>
              </div>
            </a>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg  transition-all duration-200 ${
                    activeLink === link.href
                      ? 'text-white bg-white/15'
                      : 'text-[#d7c4f7] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t(link.labelKey)}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E8C4FF]" />
                  )}
                </a>
              ))}
            </div>

            {/* ── Right controls ── */}
            <div className="hidden md:flex items-center gap-2">
              {/* Lang toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-[#C4A0FF] hover:text-white border border-[#C4A0FF]/30 hover:border-[#C4A0FF]/70 rounded-lg transition-all duration-200"
                title={lang === 'en' ? 'العربية' : 'English'}
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'AR' : 'EN'}</span>
              </button>

              {/* CTA */}
              <a
                href="#register"
                className="px-5 py-2 text-sm font-bold text-[#2D1B69] bg-[#E8C4FF] hover:bg-white rounded-lg transition-all duration-200 shadow-md shadow-[#2D1B69]/30"
              >
                {t('nav.signup')}
              </a>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="flex items-center gap-2 md:hidden" ref={menuRef}>
              <button
                onClick={toggleLang}
                className="p-2 rounded-lg text-[#C4A0FF] hover:text-white hover:bg-white/10 transition-colors"
              >
                <Languages className="w-5 h-5" />
              </button>

              {/* Hamburger — triggers floating card */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg text-[#C4A0FF] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* ── Floating card menu ── */}
              {isOpen && (
                <div className="absolute top-17 right-4 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-2xl shadow-black/25 border border-gray-100 overflow-hidden">
                    {/* Card header */}
                    <div className="px-4 py-3 bg-[#2D1B69] flex items-center gap-2.5">
                      <div className="relative w-7 h-7 rounded-full ring-1 ring-[#C4A0FF]/50 overflow-hidden">
                        <Image
                          src="/Logo.jpeg"
                          alt="Logo"
                          fill
                          sizes="28px"
                          className="object-cover"
                          priority
                        />
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {t('nav.title')}
                      </span>
                    </div>

                    {/* Links */}
                    <div className="px-2 py-2">
                      {navLinks.map((link, i) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => { setIsOpen(false); setActiveLink(link.href); }}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                            activeLink === link.href
                              ? 'bg-[#F3E8FF] text-[#2D1B69]'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[#2D1B69]'
                          }`}
                          style={{ animationDelay: `${i * 40}ms` }}
                        >
                          <span className="text-base">{link.emoji}</span>
                          <span>{t(link.labelKey)}</span>
                          {activeLink === link.href && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                          )}
                        </a>
                      ))}
                    </div>

                    {/* CTA at bottom */}
                    <div className="px-3 pb-3 pt-1 border-t border-gray-100">
                      <a
                        href="#register"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center py-2.5 text-sm font-bold text-white bg-[#2D1B69] hover:bg-[#3D2B7A] rounded-xl transition-colors duration-200"
                      >
                        {t('nav.signup')}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}