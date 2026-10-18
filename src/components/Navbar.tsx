import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [active, setActive] = useState('about');

  // Following the system until the user picks a theme; after that their choice is stored.
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  };

  // Underline follows the section crossing the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 glass border-x-0 border-t-0"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-0 h-16 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid place-items-center h-8 px-2 rounded-lg border border-white/15 bg-white/5 text-sm font-bold tracking-tight">
            KS
          </span>
          <span className="hidden sm:block text-sm font-semibold tracking-tight">Kanithi Satya Sathvik</span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative py-1 transition-colors ${active === id ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-accent-blue"
                  />
                )}
              </a>
            ))}
          </div>

          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid place-items-center h-9 w-9 rounded-lg border border-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
