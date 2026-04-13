'use client';
import { useState, useEffect } from 'react';
import { Video, Star, Users, Award, ChevronDown } from 'lucide-react';

const words = ['Fluency', 'Confidence', 'Success', 'Excellence', 'Mastery'];

const floatingWords = [
  { text: 'Hello!', top: '15%', left: '5%', rotate: '-8deg', size: 'text-2xl', delay: '0s' },
  { text: 'Bonjour → Hi', top: '25%', left: '2%', rotate: '5deg', size: 'text-sm', delay: '0.5s' },
  { text: 'A1 → C2', top: '70%', left: '3%', rotate: '-5deg', size: 'text-base', delay: '1s' },
  { text: '🇬🇧', top: '50%', left: '8%', rotate: '0deg', size: 'text-4xl', delay: '0.3s' },
  { text: 'Grammar', top: '80%', left: '5%', rotate: '7deg', size: 'text-sm', delay: '0.8s' },
  { text: '🇺🇸', top: '15%', right: '8%', rotate: '0deg', size: 'text-4xl', delay: '0.2s' },
  { text: 'Speak Up!', top: '30%', right: '3%', rotate: '6deg', size: 'text-lg', delay: '0.7s' },
  { text: 'IELTS', top: '55%', right: '4%', rotate: '-6deg', size: 'text-base', delay: '1.2s' },
  { text: '✍️', top: '75%', right: '6%', rotate: '0deg', size: 'text-3xl', delay: '0.4s' },
  { text: 'TOEFL', top: '85%', right: '3%', rotate: '8deg', size: 'text-sm', delay: '0.9s' },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 90);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 50);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0a0f1e]/60 to-[#0a0f1e]" />
        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative words */}
      {floatingWords.map((w, i) => (
        <div
          key={i}
          className="absolute hidden lg:block opacity-15 font-bold select-none pointer-events-none text-amber-300"
          style={{
            top: w.top,
            left: w.left,
            right: w.right,
            rotate: w.rotate,
            fontSize: undefined,
            animationDelay: w.delay,
          }}
        >
          <span
            className={`${w.size} font-bold`}
            style={{
              animation: `float ${3 + i * 0.3}s ease-in-out ${w.delay} infinite`,
            }}
          >
            {w.text}
          </span>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Online English Classes · Live on Zoom
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-white">Master English</span>
          <br />
          <span className="gradient-text">with </span>
          <span className="text-white">Confidence</span>
        </h1>

        {/* Typewriter */}
        <div className="text-2xl md:text-3xl font-light text-gray-300 mb-8 h-10">
          Unlock your{' '}
          <span className="font-bold text-amber-400">
            {displayed}
            <span className="cursor-blink text-amber-400">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Personalized 1-on-1 and group English lessons via <strong className="text-white">Zoom</strong>,{' '}
          tailored to your level and goals. From beginner to advanced — all ages welcome.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="btn-shine px-8 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
          >
            🎁 Book Free Trial Lesson
          </a>
          <a
            href="#courses"
            className="px-8 py-4 rounded-full font-bold text-lg text-amber-400 border-2 border-amber-400/50 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 hover:scale-105"
          >
            Explore Courses →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: <Users size={20} />, value: '500+', label: 'Students' },
            { icon: <Star size={20} />, value: '4.9/5', label: 'Average Rating' },
            { icon: <Video size={20} />, value: '3,000+', label: 'Lessons Taught' },
            { icon: <Award size={20} />, value: '8 yrs', label: 'Experience' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-amber-500/30 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex justify-center mb-2 text-amber-400">{stat.icon}</div>
              <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400/50 hover:text-amber-400 transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
