'use client';

import { Play, Clock, BarChart, Video } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import Image from 'next/image';

const courseKeys = [
  {
    titleKey: 'courses.beginner.title',
    descKey:  'courses.beginner.desc',
    levelKey: 'courses.beginner',
    duration: '12', lessons: 24,
    thumbnail: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-emerald-400 to-teal-500',
    badge: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
  {
    titleKey: 'courses.intermediate.title',
    descKey:  'courses.intermediate.desc',
    levelKey: 'courses.intermediate',
    duration: '16', lessons: 32,
    thumbnail: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-violet-400 to-purple-500',
    badge: 'bg-[#EDE9FE] border-[#C4B5FD] text-[#7C3AED]',
  },
  {
    titleKey: 'courses.advanced.title',
    descKey:  'courses.advanced.desc',
    levelKey: 'courses.advanced',
    duration: '12', lessons: 24,
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-amber-400 to-orange-500',
    badge: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    titleKey: 'courses.toefl.title',
    descKey:  'courses.toefl.desc',
    levelKey: 'courses.exams',
    duration: '8', lessons: 16,
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-rose-400 to-pink-500',
    badge: 'bg-[#FCE7F3] border-[#F9A8D4] text-[#BE185D]',
  },
  {
    titleKey: 'courses.business.title',
    descKey:  'courses.business.desc',
    levelKey: 'courses.professional',
    duration: '10', lessons: 20,
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-sky-400 to-blue-500',
    badge: 'bg-sky-50 border-sky-200 text-sky-700',
  },
  {
    titleKey: 'courses.conversation.title',
    descKey:  'courses.conversation.desc',
    levelKey: 'courses.allLevels',
    duration: '6', lessons: 12,
    thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-fuchsia-400 to-pink-500',
    badge: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
  },
];

export default function Courses() {
  const { t, dir } = useI18n();

  return (
    <section
      id="courses"
      dir={dir}
      className="relative py-24 overflow-hidden bg-[#f7f3ed]"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#C4B5FD]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-60px] w-72 h-72 rounded-full bg-[#F9A8D4]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FDE68A]/10 blur-3xl pointer-events-none" />

      {/* Dashed circles */}
      <svg
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.06] hidden lg:block pointer-events-none"
        viewBox="0 0 320 320" fill="none"
      >
        <circle cx="160" cy="160" r="155" stroke="#EC4899" strokeWidth="2" strokeDasharray="12 9" />
        <circle cx="160" cy="160" r="128" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="5 12" opacity=".5" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
            <Video className="w-3.5 h-3.5" />
            {t('courses.badge')}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight"
          >
            {t('courses.title1')}{' '}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
                {t('courses.titleHighlight')}
              </span>
              <svg
                className="absolute -bottom-1 start-0 w-full"
                height="8" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q25 0 50 5 Q75 10 100 5 Q125 0 150 5 Q175 10 200 5"
                  stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('courses.description')}
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseKeys.map((course, i) => (
            <div
              key={course.titleKey}
              className="group bg-white/70 backdrop-blur-sm border border-[#C4B5FD]/25 rounded-3xl overflow-hidden hover:border-[#C4B5FD]/60 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={t(course.titleKey)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={false}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e]/50 via-transparent to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-[#7C3AED] ms-0.5" />
                  </div>
                </div>

                {/* Level badge — coin haut start */}
                <div className={`absolute top-3 start-3 px-3 py-1 rounded-full text-xs font-semibold border ${course.badge}`}>
                  {t(course.levelKey)}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3
                  className="text-base font-bold text-[#1a1a2e] group-hover:text-[#7C3AED] transition-colors leading-snug"
                >
                  {t(course.titleKey)}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {t(course.descKey)}
                </p>

                {/* Meta + CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-[#C4B5FD]/20">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-[#C4B5FD]" />
                      {course.duration} {t('courses.weeks')}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <BarChart className="w-3.5 h-3.5 text-[#C4B5FD]" />
                      {course.lessons} {t('courses.lessons')}
                    </span>
                  </div>

                  {/* Mini CTA */}
                  <a
                    href="#register"
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color} hover:scale-105 active:scale-95 transition-transform shadow-sm`}
                  >
                    <Play className="w-3 h-3" />
                    {t('hero.seeCourses').split(' ')[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}