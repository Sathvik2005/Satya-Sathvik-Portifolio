import Section from './Section';
import { aboutIntro, strengths } from '../data/portfolio';

const About = () => (
  <Section id="about" label="About">
    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug max-w-2xl">
      {aboutIntro.title}
    </h3>
    <p className="mt-6 max-w-2xl text-muted leading-relaxed">{aboutIntro.body}</p>

    <dl className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-8 max-w-2xl">
      {strengths.map((s) => (
        <div key={s.title}>
          <dt className="font-medium">{s.title}</dt>
          <dd className="mt-1 text-sm text-muted leading-relaxed">{s.description}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default About;
