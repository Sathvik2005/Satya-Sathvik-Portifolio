import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { dur, ease } from '../lib/motion';

type BoxProps = { children: ReactNode; className?: string };

const viewport = { once: true, margin: '-60px' } as const;

// Single block that fades up as it enters the viewport.
export const Reveal = ({ children, className, delay = 0 }: BoxProps & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewport}
    transition={{ duration: dur.enter, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: dur.base + 0.1, ease } },
};

// Group whose direct StaggerItem children animate in sequence.
export const Stagger = ({ children, className, tag = 'div' }: BoxProps & { tag?: 'div' | 'ul' | 'ol' }) => {
  const Tag = motion[tag];
  return (
    <Tag variants={container} initial="hidden" whileInView="show" viewport={viewport} className={className}>
      {children}
    </Tag>
  );
};

export const StaggerItem = ({ children, className, tag = 'div' }: BoxProps & { tag?: 'div' | 'li' }) => {
  const Tag = motion[tag];
  return (
    <Tag variants={item} className={className}>
      {children}
    </Tag>
  );
};
