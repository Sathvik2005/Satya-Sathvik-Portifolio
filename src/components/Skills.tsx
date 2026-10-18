import type { LucideIcon } from 'lucide-react';
import { BarChart3, Brain, Code2, FlaskConical, MessageSquareText, Sparkles, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { skillGroups } from '../data/portfolio';

const icons: Record<string, LucideIcon> = {
  "Programming": Code2,
  "AI / ML": Brain,
  "LLM / NLP": MessageSquareText,
  "Frameworks / Tools": Wrench,
  "Data & Analytics": BarChart3,
  "Full-Stack & QA": FlaskConical,
  "AI-Assisted Dev": Sparkles,
};

const Skills = () => (
  <>
    <SectionHead index="02" label="Skills" title={<>The stack behind <span className="text-gradient">the work.</span></>} />

    <ul className="border-b border-white/10">
      {skillGroups.map((g, i) => {
        const Icon = icons[g.title] ?? Code2;
        return (
          <li key={g.title} className="border-t border-white/10">
            <Reveal delay={0.03 * i} className="grid md:grid-cols-12 gap-x-8 gap-y-4 py-7">
              <div className="md:col-span-4 flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-accent/15 text-accent-alt">
                  <Icon size={18} />
                </span>
                <h3 className="font-semibold tracking-tight text-lg">{g.title}</h3>
              </div>
              <ul className="md:col-span-8 flex flex-wrap content-start gap-2">
                {g.items.map((sk) => (
                  <li key={sk} className="chip">{sk}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        );
      })}
    </ul>
  </>
);

export default Skills;
