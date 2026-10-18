import { Brain, Crosshair, Globe, Rocket, Target, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import { Section, SectionHeader } from './Section';
import CountUp from './CountUp';
import { currentFocus, stats, strengths } from '../data/portfolio';

const metricLabels = ['AI projects shipped', 'Records analyzed', 'Voice AI response latency', 'Text-to-SQL test pass rate'];
const metrics = metricLabels.map((l) => stats.find((s) => s.label === l)).filter((m): m is (typeof stats)[number] => Boolean(m));

const strengthIcons: Record<string, LucideIcon> = {
  'Product-focused AI': Target,
  'Applied NLP depth': Brain,
  'Shipping mindset': Rocket,
  'Real-world scope': Globe,
};


const About = () => (
  <Section id="about">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-6">
        <SectionHeader
          icon={User}
          label="About"
          title={<>AI systems that <span className="text-gradient">ship, scale, and get used.</span></>}
        />
        <Reveal delay={0.1} className="space-y-6 text-muted leading-relaxed max-w-xl">
          <p>
            I’m an AI engineer with a B.Tech in Computer Science (AI &amp; ML) from VIT-AP University. I like turning
            models into tools people actually use: RAG search, text-to-SQL, live meeting copilots, and a voice
            assistant that replies in under 800 ms.
          </p>
          <p>
            At Logikality I turn business rules into testable scenarios and Playwright automation. That shapes how
            I build everywhere else: define the behavior, test it, then measure it.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-6 lg:pt-[7.5rem]">
        <Stagger tag="ul" className="divide-y divide-line border-y border-line">
          {strengths.map((s) => {
            const Icon = strengthIcons[s.title] ?? Target;
            return (
              <StaggerItem key={s.title} tag="li" className="group flex gap-4 py-5">
                <span className="icon-tile"><Icon size={18} aria-hidden="true" /></span>
                <div>
                  <h3 className="font-display font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{s.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1} className="tile mt-6 flex gap-4">
          <Crosshair size={20} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium">Problems I want to work on</p>
            <p className="mt-1 text-sm text-muted leading-relaxed">{currentFocus}</p>
          </div>
        </Reveal>
      </div>
    </div>

    <Stagger tag="ul" className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-[var(--gap)]" >
      {metrics.map((m) => (
        <StaggerItem key={m.label} tag="li">
          <div className="tile h-full">
            <p className="font-display text-4xl font-semibold tracking-tight text-gradient w-fit">
              <CountUp value={m.value} />
            </p>
            <p className="mt-2 text-sm text-muted">{m.label}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  </Section>
);

export default About;
