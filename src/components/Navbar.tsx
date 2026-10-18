import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { dur, ease } from '../lib/motion';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const iconButton =
  'grid place-items-center h-10 w-10 rounded-xl border border-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan';

const Navbar = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(false);

  // Following the system until the user picks a theme; after that their choice is stored.
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  };

  // Indicator follows the section crossing the upper third of the viewport.
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: dur.slow, ease }}
      className="fixed top-0 inset-x-0 z-40 glass border-x-0 border-t-0"
      aria-label="Primary"
    >
      <div className="container-x h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan rounded-lg">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-accent-blue text-[#ffffff] text-xs font-bold tracking-tight">
            SK
          </span>
          <span className="text-sm font-semibold tracking-tight">Sathvik Kanithi</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-1 mr-3 text-sm font-medium">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`relative block px-3 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent-cyan ${
                    active === id ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ duration: dur.base, ease }}
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={iconButton}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`${iconButton} md:hidden`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: dur.fast, ease }}
            className="md:hidden border-t border-white/10"
          >
            <ul className="container-x py-3">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? 'true' : undefined}
                    className={`flex items-center justify-between min-h-[48px] px-2 text-base font-medium ${
                      active === id ? 'text-accent-cyan' : 'text-white/80'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
