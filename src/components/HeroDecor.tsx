import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { BadgeCheck, ClipboardCheck, ShieldCheck, Wrench } from 'lucide-react';
import { ease } from '../lib/motion';

type Sticker = { icon: LucideIcon; text: string; className: string; rotate: number; float: number };

// Small values-as-stickers framing the terminal. They sit slightly behind it, like labels on a laptop lid.
const stickers: Sticker[] = [
  { icon: ShieldCheck, text: 'Tests first', className: '-top-6 left-6', rotate: -2, float: 6 },
  { icon: BadgeCheck, text: 'Owns the outcome', className: '-top-6 right-8', rotate: 2, float: 7 },
  { icon: ClipboardCheck, text: 'Writes it down', className: '-bottom-9 left-10', rotate: 1.5, float: 8 },
  { icon: Wrench, text: 'Fixes what it breaks', className: '-bottom-9 right-6', rotate: -1.5, float: 6.5 },
];

export const ValueStickers = () => (
  <>
    {stickers.map(({ icon: Icon, text, className, rotate, float }, i) => (
      <motion.span
        key={text}
        aria-hidden="true"
        className={`absolute -z-10 hidden sm:block ${className}`}
        style={{ rotate }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease, delay: 1.2 + i * 0.12 }}
      >
        <motion.span
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: float, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={14} className="text-cyan" /> {text}
        </motion.span>
      </motion.span>
    ))}
  </>
);

// Faint paw prints walking along the bottom of the hero.
const steps: { left: string; bottom: string; rotate: number }[] = [
  { left: '4%', bottom: '2.5rem', rotate: 70 },
  { left: '9%', bottom: '4.5rem', rotate: 85 },
  { left: '14%', bottom: '2.5rem', rotate: 70 },
  { left: '19%', bottom: '4.5rem', rotate: 85 },
  { left: '24%', bottom: '2.5rem', rotate: 70 },
  { left: '29%', bottom: '4.5rem', rotate: 85 },
];

export const PawTrail = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
    {steps.map((s, i) => (
      <motion.svg
        key={i}
        viewBox="0 0 24 24"
        className="absolute h-7 w-7 text-ink"
        style={{ left: s.left, bottom: s.bottom, rotate: s.rotate }}
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 0.5, delay: 1.6 + i * 0.25 }}
      >
        <ellipse cx="12" cy="16" rx="5.5" ry="4.5" />
        <circle cx="5" cy="10.5" r="2.2" />
        <circle cx="9.3" cy="6" r="2.2" />
        <circle cx="14.7" cy="6" r="2.2" />
        <circle cx="19" cy="10.5" r="2.2" />
      </motion.svg>
    ))}
  </div>
);
