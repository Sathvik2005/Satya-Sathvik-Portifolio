import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { dur, ease } from '../lib/motion';

type Props = {
  id: string;
  label: string;
  children: ReactNode;
};

// Every section shares one structure: a hairline rule, a label column and a content column.
// The content fades in once as a block; individual items are not animated separately.
const Section = ({ id, label, children }: Props) => (
  <section id={id} className="section" aria-labelledby={`${id}-label`}>
    <div className="container-x row-grid">
      <h2 id={`${id}-label`} className="col-label text-sm font-medium text-muted md:pt-2">
        {label}
      </h2>
      <motion.div
        className="col-body"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: dur.enter, ease }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default Section;
