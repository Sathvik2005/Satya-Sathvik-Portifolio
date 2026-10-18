import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity, ArrowUpRight, AudioLines, BarChart3, Brain, Car, ChevronRight, Database, FileSearch, FolderGit2,
  HeartPulse, Lightbulb, MessageSquareText, Mic, Telescope, TrendingUp, Users, AudioWaveform,
} from 'lucide-react';
import { Stagger, StaggerItem } from './Reveal';
import { Section, SectionHeader } from './Section';
import { projects, type Project } from '../data/portfolio';

// Domain label, icon and verified outcome per project. Everything here comes from the project descriptions.
type Meta = { kind: string; icon: LucideIcon; outcome?: string };
const meta: Record<string, Meta> = {
  'TwinMind Pro': { kind: 'Live copilot', icon: AudioLines },
  'SniperThink Voice AI': { kind: 'Voice AI', icon: Mic, outcome: 'Replies in under 800 ms' },
  'CogniNest AI': { kind: 'Text-to-SQL', icon: Database, outcome: '19/20 test questions passed (95%)' },
  'NeuroResearch': { kind: 'Research agent', icon: Telescope },
  'Insurance Risk Analytics': { kind: 'Data analytics', icon: BarChart3, outcome: '1M simulated records, 10 SQL queries' },
  'Answer IQ': { kind: 'RAG search', icon: FileSearch },
  'InsightRecruiter': { kind: 'Hiring AI', icon: Users, outcome: '60% faster shortlisting, 200+ resumes' },
  'ABSA Intelligence': { kind: 'NLP', icon: MessageSquareText },
  'Autonomous Taxi Agent': { kind: 'Reinforcement learning', icon: Car, outcome: '35% fewer failed drop-offs' },
  'Heart Disease Prediction': { kind: 'Healthcare ML', icon: HeartPulse, outcome: '90% accuracy, 1,000+ records' },
  'AQI Forecasting': { kind: 'Forecasting', icon: TrendingUp, outcome: '85% accuracy, 3 years of data' },
  'Thyroid Classifier': { kind: 'Healthcare ML', icon: Activity, outcome: '92% accuracy, 3,500+ records' },
};

// Pipelines taken from the project descriptions.
const featuredFlow: { icon: LucideIcon; label: string }[] = [
  { icon: Mic, label: 'Live audio' },
  { icon: AudioWaveform, label: 'Whisper Large V3' },
  { icon: Brain, label: 'Llama 3.3 70B' },
  { icon: Lightbulb, label: '3 suggestions / ~30 s' },
  { icon: MessageSquareText, label: 'Chat + JSON export' },
];

const steps: Record<string, string[]> = {
  'SniperThink Voice AI': ['WebRTC stream', 'Silero VAD', 'Faster-Whisper ASR', 'LLM fallback chain'],
  'CogniNest AI': ['Question', 'Vanna 2.0 agent', 'SELECT-only check', 'SQL + chart'],
};

const FEATURED = 'TwinMind Pro';
const SECONDARY = ['SniperThink Voice AI', 'CogniNest AI'];

const byTitle = (t: string) => projects.find((p) => p.title === t);
const featured = byTitle(FEATURED);
const secondary = SECONDARY.map(byTitle).filter((p): p is Project => Boolean(p));
const compact = projects.filter((p) => p.title !== FEATURED && !SECONDARY.includes(p.title));

const TechLabels = ({ tech }: { tech: string[] }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
    {tech.map((t) => (
      <li key={t} className="label">{t}</li>
    ))}
  </ul>
);

const Outcome = ({ text }: { text: string }) => (
  <p className="inline-flex items-center gap-2 text-sm font-medium text-cyan">
    <TrendingUp size={16} aria-hidden="true" /> {text}
  </p>
);

// Whole card is clickable through the title link (stretched with ::after); no link, no hover lift.
const Card = ({ p, size, children }: { p: Project; size: 'featured' | 'secondary' | 'compact'; children?: ReactNode }) => {
  const m = meta[p.title];
  const Icon = m.icon;
  const [problem, built] = p.description;
  const href = p.links.github;
  const big = size === 'featured';

  return (
    <article className={`tile group h-full flex flex-col ${href ? 'tile-hover' : ''} ${big ? 'p-7 md:p-8' : ''}`}>
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="icon-tile"><Icon size={18} aria-hidden="true" /></span>
          <span className="text-sm text-muted">{m.kind}</span>
        </div>
        {href && (
          <ArrowUpRight
            size={20}
            aria-hidden="true"
            className="text-muted transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </div>

      <h3 className={`font-display font-semibold tracking-tight ${big ? 'text-3xl md:text-4xl' : size === 'secondary' ? 'text-2xl' : 'text-xl'}`}>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:rounded-[inherit]">
            {p.title}
            <span className="sr-only"> on GitHub</span>
          </a>
        ) : (
          p.title
        )}
      </h3>
      <p className={`mt-3 text-muted leading-relaxed ${big ? 'text-lg' : ''}`}>{p.tagline}</p>

      {size !== 'compact' && (
        <dl className="mt-5 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="font-medium text-ink">Problem</dt>
            <dd className="text-muted">{problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">What I built</dt>
            <dd className="text-muted">{built}</dd>
          </div>
        </dl>
      )}

      {children}

      <div className="mt-auto pt-6 space-y-4">
        {m.outcome && <Outcome text={m.outcome} />}
        <TechLabels tech={p.tech} />
      </div>
    </article>
  );
};

// Horizontal chips on small screens; a vertical flow on desktop so it fills the featured card.
const FlowDiagram = () => (
  <Stagger className="mt-6 flex flex-wrap items-center gap-2 lg:flex-1 lg:flex-col lg:items-start lg:justify-center lg:gap-0 lg:py-4">
    {featuredFlow.map(({ icon: Icon, label }, i) => (
      <StaggerItem key={label} className="flex items-center gap-2 lg:flex-col lg:items-start lg:gap-0">
        <span className="inline-flex items-center gap-3 rounded-lg border border-line bg-raised/60 px-3 py-2 text-xs font-medium lg:px-4 lg:py-3 lg:text-sm">
          <Icon size={16} className="text-cyan" aria-hidden="true" /> {label}
        </span>
        {i < featuredFlow.length - 1 && (
          <>
            <ChevronRight size={14} className="text-muted lg:hidden" aria-hidden="true" />
            <span className="hidden lg:block ml-6 my-1.5 h-7 w-px bg-accent/50" aria-hidden="true" />
          </>
        )}
      </StaggerItem>
    ))}
  </Stagger>
);

const StepLine = ({ items }: { items: string[] }) => (
  <p className="mt-5 font-mono text-xs leading-relaxed text-muted">
    {items.map((s, i) => (
      <span key={s}>
        {i > 0 && <span className="text-cyan"> → </span>}
        {s}
      </span>
    ))}
  </p>
);

const Projects = () => (
  <Section id="projects">
    <SectionHeader
      icon={FolderGit2}
      label="Projects"
      title={<>Selected work, <span className="text-gradient">measured by outcomes.</span></>}
      lead="What each project does, how it works, and what it achieved. Every entry links to its repository."
    />

    {featured && (
      <Stagger className="bento">
        <StaggerItem className="md:col-span-6 lg:col-span-7 lg:row-span-2">
          <Card p={featured} size="featured">
            <FlowDiagram />
          </Card>
        </StaggerItem>
        {secondary.map((p) => (
          <StaggerItem key={p.title} className="md:col-span-3 lg:col-span-5">
            <Card p={p} size="secondary">
              {steps[p.title] && <StepLine items={steps[p.title]} />}
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    )}

    <h3 className="mt-14 mb-6 font-display text-xl font-semibold">More projects</h3>
    <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[var(--gap)]">
      {compact.map((p) => (
        <StaggerItem key={p.title}>
          <Card p={p} size="compact" />
        </StaggerItem>
      ))}
    </Stagger>
  </Section>
);

export default Projects;
