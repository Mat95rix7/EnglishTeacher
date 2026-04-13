import { BookOpen, Heart } from 'lucide-react';

const links = {
  Navigation: ['Home', 'About', 'Courses', 'How It Works', 'Reviews', 'Pricing', 'Contact'],
  Courses: ['Conversational English', 'Business English', 'IELTS / TOEFL Prep', 'Pronunciation', 'Academic Writing'],
  Resources: ['Free English Tips Blog', 'YouTube Channel', 'Grammar Guide PDF', 'Vocabulary Lists', 'Level Assessment Test'],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#07090f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                <BookOpen size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="gradient-text">English</span>
                <span className="text-white"> with Khawla</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering learners worldwide to speak English with confidence through personalized online lessons.
            </p>
            <div className="flex flex-wrap gap-2">
              {['🇬🇧 British Accent', '📹 Zoom Classes', '🌍 All Time Zones', '⭐ 4.9 Rated'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-amber-400 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart size={13} className="text-amber-500 fill-current" /> by Khawla · © {new Date().getFullYear()} English with Sarah. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-600 text-xs">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
