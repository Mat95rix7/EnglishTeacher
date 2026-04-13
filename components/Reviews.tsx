import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Marie Dupont',
    country: '🇫🇷 France',
    avatar: 'MD',
    rating: 5,
    course: 'Business English',
    text: "Sarah is absolutely incredible! In just 3 months, I went from being terrified of English meetings to confidently leading presentations at work. Her teaching style is warm, professional, and so effective. I got promoted, partly thanks to her!",
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Ahmed Hassan',
    country: '🇸🇦 Saudi Arabia',
    avatar: 'AH',
    rating: 5,
    course: 'IELTS Preparation',
    text: "I needed a Band 7.5 for my university application and Sarah helped me achieve 8.0! Her structured approach, mock tests, and detailed feedback made all the difference. Worth every penny. Highly recommend!",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Yuki Tanaka',
    country: '🇯🇵 Japan',
    avatar: 'YT',
    rating: 5,
    course: 'Conversational English',
    text: "Before Sarah's lessons, I was too shy to speak English even with tourists. Now I travel alone and chat freely! She makes you feel safe to make mistakes and her patience is endless. She's the best teacher I've ever had.",
    color: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Carlos Mendez',
    country: '🇲🇽 Mexico',
    avatar: 'CM',
    rating: 5,
    course: 'Pronunciation & Accent',
    text: "My accent was always a source of embarrassment but Sarah turned it into a strength! She's a pronunciation wizard. My American colleagues now tell me I sound incredibly clear and professional. Game changer!",
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Fatima Al-Rashid',
    country: '🇦🇪 UAE',
    avatar: 'FA',
    rating: 5,
    course: 'Academic Writing',
    text: "Sarah helped me with my Master's thesis in English. Her feedback was detailed, constructive and she really understood what I was trying to say. My supervisor was very impressed with the final quality. Thank you Sarah!",
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Lucas Schmidt',
    country: '🇩🇪 Germany',
    avatar: 'LS',
    rating: 5,
    course: 'General English',
    text: "Took lessons from Sarah for 6 months starting from B1 level. I recently passed my C1 exam. Her lessons are fun, varied, never boring. The homework was challenging but exactly what I needed. 10/10 would recommend!",
    color: 'from-indigo-500 to-blue-500',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < rating ? 'star-filled fill-current' : 'text-gray-600'} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const visible = 3;

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(reviews.length - visible, c + 1));

  const displayed = reviews.slice(current, current + visible);

  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1428] to-[#0a0f1e]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            Student Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What My <span className="gradient-text">Students Say</span>
          </h2>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="star-filled fill-current" />
              ))}
            </div>
            <span className="text-3xl font-black text-white">4.9</span>
            <span className="text-gray-400 text-sm">from 500+ reviews</span>
          </div>
        </div>

        {/* Featured review */}
        <div className="relative mb-12 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-8 md:p-12">
          <Quote size={60} className="text-amber-500/20 absolute top-6 left-6" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="text-gray-200 text-lg md:text-2xl font-light italic leading-relaxed mb-6">
              "Sarah doesn't just teach English — she builds your confidence. 
              Within 4 months I was giving speeches in English at international conferences. 
              She is truly exceptional."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
                PK
              </div>
              <div className="text-left">
                <div className="text-white font-bold">Priya Kapoor</div>
                <div className="text-gray-400 text-sm">🇮🇳 India · Business English Student</div>
              </div>
              <div className="ml-4">
                <StarRating rating={5} />
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayed.map((review, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-amber-500/20 card-glow transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs">{review.country}</div>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-3 w-fit">
                {review.course}
              </span>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${reviews[current].color} flex items-center justify-center text-white font-bold text-sm`}>
                  {reviews[current].avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{reviews[current].name}</div>
                  <div className="text-gray-500 text-xs">{reviews[current].country}</div>
                </div>
              </div>
              <StarRating rating={reviews[current].rating} />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-3">
              {reviews[current].course}
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">"{reviews[current].text}"</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(Math.min(i, reviews.length - visible))}
                className={`w-2 h-2 rounded-full transition-all ${i >= current && i < current + visible ? 'bg-amber-400 w-6' : 'bg-white/20'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current >= reviews.length - visible}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
