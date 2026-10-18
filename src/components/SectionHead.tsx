import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  lead?: string;
};

// Shared section opener so every section starts on the same grid line with the same rhythm.
const SectionHead = ({ index, label, title, lead }: Props) => (
  <header className="mb-10 md:mb-14 max-w-3xl">
    <Reveal>
      <p className="eyebrow mb-4">{index} · {label}</p>
    </Reveal>
    <Reveal delay={0.06}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">{title}</h2>
    </Reveal>
    {lead && (
      <Reveal delay={0.12}>
        <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">{lead}</p>
      </Reveal>
    )}
  </header>
);

export default SectionHead;
