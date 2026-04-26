import {  Heart } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import Image from 'next/image';
import { socials } from '@/lib/data';


export default function Footer() {
  const { t } = useI18n();

  const footerLinks = [
    {
      title: t('footer.navigation'),
      links: [
        { label: t('nav.home'), href: '#hero' },
        { label: t('nav.courses'), href: '#courses' },
        { label: t('nav.testimonials'), href: '#testimonials' },
        { label: t('nav.register'), href: '#register' },
        { label: t('nav.contact'), href: '#contact' },
      ],
    },
    {
      title: t('footer.courses'),
      links: [
        { label: t('footer.beginner'), href: '#courses' },
        { label: t('footer.intermediate'), href: '#courses' },
        { label: t('footer.advanced'), href: '#courses' },
        { label: t('footer.examPrep'), href: '#courses' },
        { label: t('footer.business'), href: '#courses' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.blog'), href: '#' },
        { label: t('footer.freeExercises'), href: '#' },
        { label: t('footer.podcast'), href: '#' },
        { label: t('footer.faq'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#36256d]/95 text-[#d7c4f7]">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-lavender-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#hero" className="flex items-center justify-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="English With Khawla logo"
                  fill
                  sizes="100px"
                  // style={{ objectFit: 'contain' }}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="heading-display text-xl font-semibold">
                English With Khawla
              </span>
            </a>
            <p className="text-beige-400 text-sm leading-relaxed max-w-sm mx-auto">
              {t('footer.description')}
            </p>

            {/* Social links */}
            <div className="flex items-center justify-center gap-3 pt-2 rtl:flex-row-reverse">
              {Object.entries(socials).map(([key, social]) => (
                <a
                  key={key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-beige-800 flex items-center justify-center text-beige-400 hover:bg-lavender-400/20 hover:text-lavender-300 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-beige-400 hover:text-lavender-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-beige-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-beige-500">
            &copy; {new Date().getFullYear()} English With Khawla. {t('footer.copyright')}
          </p>
          <p className="text-xs text-beige-500 flex items-center gap-1">
            {t('footer.madeWith')} <Heart className="w-3 h-3 text-lavender-400 fill-lavender-400" /> {t('footer.forLearning')}
          </p>
        </div>
      </div>
    </footer>
  );
}
