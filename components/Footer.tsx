import { BookOpen, Heart } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.55-.56 3.08-1.46 4.34-1.31 1.88-3.49 3.12-5.81 3.27-1.77.13-3.59-.31-5.08-1.32-2.12-1.39-3.49-3.78-3.66-6.32-.02-.46-.03-.92-.01-1.37.17-2.37 1.21-4.66 2.95-6.2 1.67-1.49 3.95-2.24 6.17-2.04.02 1.48-.01 2.97 0 4.45-1.12-.36-2.41-.24-3.42.47-1 .6-1.65 1.7-1.73 2.87-.08.93.16 1.89.69 2.66.56.83 1.44 1.41 2.41 1.58 1.01.18 2.09-.03 2.95-.63.86-.6 1.44-1.56 1.56-2.58.04-3.14.01-6.28.02-9.42z" />
      </svg>
    ),
  },
];

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
    <footer className="relative bg-beige-900 text-beige-200">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-lavender-400/80 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="heading-display text-xl font-semibold text-white">
                English With Claire
              </span>
            </a>
            <p className="text-beige-400 text-sm leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
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
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
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
            &copy; {new Date().getFullYear()} English With Claire. {t('footer.copyright')}
          </p>
          <p className="text-xs text-beige-500 flex items-center gap-1">
            {t('footer.madeWith')} <Heart className="w-3 h-3 text-lavender-400 fill-lavender-400" /> {t('footer.forLearning')}
          </p>
        </div>
      </div>
    </footer>
  );
}
