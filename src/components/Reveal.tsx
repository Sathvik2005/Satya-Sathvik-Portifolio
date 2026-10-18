import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { dur, ease } from '../lib/motion';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Short fade-up as the element enters the viewport. Reduced motion is handled globally by MotionConfig.
const Reveal = ({ children, delay = 0, className }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: dur.base, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
