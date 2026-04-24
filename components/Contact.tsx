import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-b from-beige-50/50 to-cream">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100/80 text-lavender-700 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            {t('contact.badge')}
          </div>
          <h2 className="heading-display text-4xl md:text-5xl font-bold text-beige-900 mb-6">
            {t('contact.title1')}{' '}
            <span className="text-lavender-500">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-beige-600 text-lg leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="glass-card p-8 text-center group hover:shadow-xl hover:shadow-lavender-100/30 transition-all duration-500 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-lavender-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-lavender-200 transition-colors">
              <Mail className="w-6 h-6 text-lavender-600" />
            </div>
            <h3 className="heading-display text-lg font-semibold text-beige-800 mb-2">{t('contact.email')}</h3>
            <p className="text-sm text-beige-500">{t('contact.responseTime')}</p>
            <a
              href="mailto:claire@englishwithclaire.com"
              className="block mt-3 text-lavender-600 font-medium text-sm hover:text-lavender-700 transition-colors"
            >
              claire@englishwithclaire.com
            </a>
          </div>

          {/* Phone */}
          <div className="glass-card p-8 text-center group hover:shadow-xl hover:shadow-lavender-100/30 transition-all duration-500 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-lavender-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-lavender-200 transition-colors">
              <Phone className="w-6 h-6 text-lavender-600" />
            </div>
            <h3 className="heading-display text-lg font-semibold text-beige-800 mb-2">{t('contact.phone')}</h3>
            <p className="text-sm text-beige-500">{t('contact.hours')}</p>
            <a
              href="tel:+33612345678"
              className="block mt-3 text-lavender-600 font-medium text-sm hover:text-lavender-700 transition-colors"
            >
              +33 6 12 34 56 78
            </a>
          </div>

          {/* Location & Hours */}
          <div className="glass-card p-8 text-center group hover:shadow-xl hover:shadow-lavender-100/30 transition-all duration-500 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-lavender-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-lavender-200 transition-colors">
              <MapPin className="w-6 h-6 text-lavender-600" />
            </div>
            <h3 className="heading-display text-lg font-semibold text-beige-800 mb-2">{t('contact.online')}</h3>
            <p className="text-sm text-beige-500">{t('contact.viaZoom')}</p>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-lavender-600 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{t('contact.flexible')}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="mailto:claire@englishwithclaire.com" className="btn-secondary">
            <Send className="w-4 h-4" />
            {t('contact.sendEmail')}
          </a>
        </div>
      </div>
    </section>
  );
}
