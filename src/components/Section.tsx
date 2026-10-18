import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  band?: boolean;
  children: ReactNode;
};

// Page section: shared vertical rhythm and container; `band` shifts the background one tonal layer.
export const Section = ({ id, band, children }: SectionProps) => (
  <section id={id} className={`section ${band ? 'bg-band' : ''}`}>
    <div className="container-x">{children}</div>
  </section>
);

type HeaderProps = {
  icon: LucideIcon;
  label: string;
  title: ReactNode;
  lead?: string;
};

// Shared section opener: icon + label, a clear heading, and an optional lead paragraph.
export const SectionHeader = ({ icon: Icon, label, title, lead }: HeaderProps) => (
  <Reveal className="mb-10 md:mb-14 max-w-2xl">
    <p className="eyebrow mb-4">
      <Icon size={16} aria-hidden="true" /> {label}
    </p>
    <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">{title}</h2>
    {lead && <p className="mt-4 text-muted leading-relaxed">{lead}</p>}
  </Reveal>
);
