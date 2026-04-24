import { Star, Quote } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const testimonialKeys = [
  { nameKey: 'testimonials.1.name', roleKey: 'testimonials.1.role', textKey: 'testimonials.1.text', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { nameKey: 'testimonials.2.name', roleKey: 'testimonials.2.role', textKey: 'testimonials.2.text', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { nameKey: 'testimonials.3.name', roleKey: 'testimonials.3.role', textKey: 'testimonials.3.text', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { nameKey: 'testimonials.4.name', roleKey: 'testimonials.4.role', textKey: 'testimonials.4.text', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { nameKey: 'testimonials.5.name', roleKey: 'testimonials.5.role', textKey: 'testimonials.5.text', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { nameKey: 'testimonials.6.name', roleKey: 'testimonials.6.role', textKey: 'testimonials.6.text', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="testimonials" className="relative section-padding bg-gradient-to-b from-cream to-beige-50/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100/80 text-lavender-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-lavender-500" />
            {t('testimonials.badge')}
          </div>
          <h2 className="heading-display text-4xl md:text-5xl font-bold text-beige-900 mb-6">
            {t('testimonials.title1')}{' '}
            <span className="text-lavender-500">{t('testimonials.titleHighlight')}</span>{' '}
            {t('testimonials.title2')}
          </h2>
          <p className="text-beige-600 text-lg leading-relaxed">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialKeys.map((item) => (
            <div
              key={item.nameKey}
              className="group glass-card p-6 hover:shadow-xl hover:shadow-lavender-100/30 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-lavender-200 mb-4" />

              <p className="text-beige-600 text-sm leading-relaxed mb-6">
                "{t(item.textKey)}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-beige-100">
                <img
                  src={item.avatar}
                  alt={t(item.nameKey)}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-beige-800">{t(item.nameKey)}</p>
                  <p className="text-xs text-beige-500">{t(item.roleKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
