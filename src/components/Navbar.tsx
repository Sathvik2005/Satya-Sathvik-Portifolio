import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, FolderGit2, Layers, Mail, Menu, Moon, Sun, User, X } from 'lucide-react';
import { dur, ease } from '../lib/motion';

const links = [
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const iconButton =
  'grid place-items-center h-10 w-10 rounded-lg border border-line bg-surface text-muted hover:text-ink hover:border-accent transition-colors';

const Navbar = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  // Follows the system until the visitor picks a theme; after that their choice is stored.
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  };

  // Highlight the section crossing the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'hero' ? '' : e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    ['hero', ...links.map((l) => l.id)].forEach((id) => {
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
    <header className="fixed top-0 inset-x-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="container-x h-16 flex items-center justify-between" aria-label="Primary">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary text-white text-xs font-bold tracking-tight font-display transition-transform group-hover:-rotate-6">
            SK
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">Sathvik Kanithi</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-1 mr-3 text-sm font-medium">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`relative block px-3 py-2 rounded-lg transition-colors ${
                    active === id ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ duration: dur.base, ease }}
                      className="absolute inset-0 -z-10 rounded-lg bg-raised"
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
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: dur.fast, ease }}
            className="md:hidden container-x border-t border-line py-2"
          >
            {links.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`flex items-center gap-3 min-h-[48px] text-base ${active === id ? 'text-accent' : 'text-ink'}`}
                >
                  <Icon size={18} aria-hidden="true" /> {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary to-cyan"
      />
    </header>
  );
};

export default Navbar;
