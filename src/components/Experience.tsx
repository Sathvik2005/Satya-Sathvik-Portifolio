import { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Check, GraduationCap, School, Users } from 'lucide-react';
import { Stagger, StaggerItem } from './Reveal';
import { Section, SectionHeader } from './Section';
import { timeline } from '../data/portfolio';

const iconFor = (title: string, org: string): LucideIcon =>
  org.includes('Logikality') ? Briefcase : title.includes('Club') ? Users : title.includes('B.Tech') ? GraduationCap : School;

// Long single-sentence details separated by ";" read better as a list.
const toPoints = (detail: string) =>
  detail.includes(';')
    ? detail
        .replace(/\.$/, '')
        .split(';')
        .map((p) => p.trim())
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1) + '.')
    : [];

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section id="experience" band>
      <SectionHeader
        icon={Briefcase}
        label="Experience & education"
        title={<>Experience, education, <span className="text-gradient">and leadership.</span></>}
      />

      <div ref={ref} className="relative max-w-3xl">
        <span aria-hidden="true" className="absolute left-4 top-2 bottom-2 w-px bg-line" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute left-4 top-2 bottom-2 w-px origin-top bg-accent"
        />

        <Stagger tag="ol" className="relative">
          {timeline.map((e) => {
            const Icon = iconFor(e.title, e.org);
            const points = toPoints(e.detail);
            const current = /present/i.test(e.period);
            return (
              <StaggerItem key={e.title + e.org} tag="li" className="relative pl-14 pb-10 last:pb-0">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-accent">
                  <Icon size={16} aria-hidden="true" />
                </span>

                <div className={current ? 'tile' : ''}>
                  <p className="flex items-center gap-3 text-sm text-muted">
                    <span className="tabular-nums">{e.period.replace(' - ', ' – ')}</span>
                    {current && <span className="label !text-cyan !border-cyan/40">Current</span>}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{e.title}</h3>
                  <p className="text-sm text-muted">{e.org}</p>
                  {points.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <Check size={16} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{e.detail}</p>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
};

export default Experience;
