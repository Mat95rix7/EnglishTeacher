
import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActive(sec);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
              <Image
                src="/Logo.jpeg"
                alt="Book"
                width={48}
                height={48}
                className="rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
            <span className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="gradient-text">English</span>
              <span className="text-white"> with Khawla</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-shine px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
            >
              Free Trial Lesson 🎁
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-amber-400 transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="nav-glass px-4 pt-2 pb-6 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-amber-400 hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600"
          >
            Free Trial Lesson 🎁
          </a>
        </div>
      </div>
    </nav>
  );
}
