import { Brain, Crosshair, GraduationCap, Globe, MapPin, Rocket, Target, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import { Section, SectionHeader } from './Section';
import { aboutIntro, currentFocus, profile, stats, strengths } from '../data/portfolio';

const strengthIcons: Record<string, LucideIcon> = {
  'Product-focused AI': Target,
  'Applied NLP depth': Brain,
  'Shipping mindset': Rocket,
  'Real-world scope': Globe,
};

const cgpa = stats.find((s) => s.label === 'CGPA')?.value;

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
          <p>{aboutIntro.body}</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>B.Tech, Computer Science (AI &amp; ML) · VIT-AP University · CGPA {cgpa}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
          </ul>
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
  </Section>
);

export default About;
