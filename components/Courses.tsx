import { Play, Clock, BarChart, Video } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const courseKeys = [
  { titleKey: 'courses.beginner.title', descKey: 'courses.beginner.desc', levelKey: 'courses.beginner', duration: '12', lessons: 24, thumbnail: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-emerald-400 to-teal-500' },
  { titleKey: 'courses.intermediate.title', descKey: 'courses.intermediate.desc', levelKey: 'courses.intermediate', duration: '16', lessons: 32, thumbnail: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-lavender-400 to-lavender-600' },
  { titleKey: 'courses.advanced.title', descKey: 'courses.advanced.desc', levelKey: 'courses.advanced', duration: '12', lessons: 24, thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-amber-400 to-orange-500' },
  { titleKey: 'courses.toefl.title', descKey: 'courses.toefl.desc', levelKey: 'courses.exams', duration: '8', lessons: 16, thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-rose-400 to-pink-500' },
  { titleKey: 'courses.business.title', descKey: 'courses.business.desc', levelKey: 'courses.professional', duration: '10', lessons: 20, thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-sky-400 to-blue-500' },
  { titleKey: 'courses.conversation.title', descKey: 'courses.conversation.desc', levelKey: 'courses.allLevels', duration: '6', lessons: 12, thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'from-lavender-300 to-lavender-500' },
];

export default function Courses() {
  const { t } = useI18n();

  return (
    <section id="courses" className="relative section-padding bg-[#f7f3ed]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100/80 text-lavender-700 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            {t('courses.badge')}
          </div>
          <h2 className="heading-display text-4xl md:text-5xl font-bold text-beige-900 mb-6">
            {t('courses.title1')}{' '}
            <span className="text-lavender-500">{t('courses.titleHighlight')}</span>
          </h2>
          <p className="text-beige-600 text-lg leading-relaxed">
            {t('courses.description')}
          </p>
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseKeys.map((course, index) => (
            <div
              key={course.titleKey}
              className="group glass-card overflow-hidden hover:shadow-xl hover:shadow-lavender-100/40 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={t(course.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-beige-900/50 via-transparent to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-lavender-600 ml-0.5" />
                  </div>
                </div>

                {/* Level badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${course.color}`}>
                  {t(course.levelKey)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="heading-display text-lg font-semibold text-beige-800 group-hover:text-lavender-600 transition-colors">
                  {t(course.titleKey)}
                </h3>
                <p className="text-sm text-beige-500 leading-relaxed">
                  {t(course.descKey)}
                </p>
                <div className="flex items-center gap-4 pt-2 border-t border-beige-100">
                  <div className="flex items-center gap-1.5 text-xs text-beige-500">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration} {t('courses.weeks')}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-beige-500">
                    <BarChart className="w-3.5 h-3.5" />
                    {course.lessons} {t('courses.lessons')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
