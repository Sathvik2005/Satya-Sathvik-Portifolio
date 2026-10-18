import Section from './Section';
import { skillGroups } from '../data/portfolio';

const Skills = () => (
  <Section id="skills" label="Skills">
    <dl className="divide-y divide-line border-y border-line">
      {skillGroups.map((g) => (
        <div key={g.title} className="grid md:grid-cols-9 gap-x-8 gap-y-1 py-5">
          <dt className="md:col-span-3 font-medium">{g.title}</dt>
          <dd className="md:col-span-6 text-muted leading-relaxed">{g.items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
