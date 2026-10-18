import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const iconButton =
  'grid place-items-center h-10 w-10 rounded-md text-muted hover:text-ink transition-colors';

const Navbar = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

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
    <header className="fixed top-0 inset-x-0 z-40 bg-background border-b border-line">
      <nav className="container-x h-14 flex items-center justify-between" aria-label="Primary">
        <a href="#hero" className="text-sm font-semibold tracking-tight">Sathvik Kanithi</a>

        <div className="flex items-center gap-1">
          <ul className="hidden md:flex items-center gap-6 mr-4 text-sm">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`py-1 border-b transition-colors ${
                    active === id ? 'text-ink border-accent' : 'text-muted border-transparent hover:text-ink'
                  }`}
                >
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

      {open && (
        <ul id="mobile-menu" className="md:hidden container-x border-t border-line py-2">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? 'true' : undefined}
                className={`flex items-center min-h-[48px] text-base ${active === id ? 'text-accent' : 'text-ink'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
