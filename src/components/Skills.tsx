import type { LucideIcon } from 'lucide-react';
import { BarChart3, Brain, Code2, FlaskConical, Layers, MessageSquareText, Sparkles, Wrench } from 'lucide-react';
import { Stagger, StaggerItem } from './Reveal';
import { Section, SectionHeader } from './Section';
import { skillGroups } from '../data/portfolio';

// Icon and bento span per group. Spans: tablet = 6 columns, desktop = 12 columns.
const layout: Record<string, { icon: LucideIcon; span: string }> = {
  'LLM / NLP': { icon: MessageSquareText, span: 'md:col-span-6 lg:col-span-7' },
  'AI / ML': { icon: Brain, span: 'md:col-span-3 lg:col-span-5' },
  'Frameworks / Tools': { icon: Wrench, span: 'md:col-span-3 lg:col-span-4' },
  'Data & Analytics': { icon: BarChart3, span: 'md:col-span-3 lg:col-span-4' },
  'Full-Stack & QA': { icon: FlaskConical, span: 'md:col-span-3 lg:col-span-4' },
  'Programming': { icon: Code2, span: 'md:col-span-3 lg:col-span-6' },
  'AI-Assisted Dev': { icon: Sparkles, span: 'md:col-span-3 lg:col-span-6' },
};

// Wide tiles first so rows fill the 12-column grid evenly.
const order = ['LLM / NLP', 'AI / ML', 'Frameworks / Tools', 'Data & Analytics', 'Full-Stack & QA', 'Programming', 'AI-Assisted Dev'];
const groups = order.map((t) => skillGroups.find((g) => g.title === t)).filter((g): g is (typeof skillGroups)[number] => Boolean(g));

const Skills = () => (
  <Section id="skills" band>
    <SectionHeader
      icon={Layers}
      label="Skills"
      title={<>The stack behind <span className="text-gradient">the work.</span></>}
      lead="Grouped by what I use them for, drawn from my projects and internship."
    />

    <Stagger className="bento">
      {groups.map((g) => {
        const { icon: Icon, span } = layout[g.title];
        return (
          <StaggerItem key={g.title} className={span}>
            <article className="tile tile-hover group h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="icon-tile"><Icon size={18} aria-hidden="true" /></span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="label">{s}</li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  </Section>
);

export default Skills;
