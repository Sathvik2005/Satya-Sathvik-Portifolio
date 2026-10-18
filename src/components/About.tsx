import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { aboutIntro, stats, strengths } from '../data/portfolio';

const cgpa = stats.find((s) => s.label === 'CGPA')?.value.replace('/10', '');

const About = () => (
  <>
    <SectionHead
      index="01"
      label="About"
      title={<>AI systems that <span className="text-gradient">ship, scale, and get used.</span></>}
    />

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
      <Reveal className="lg:col-span-5 space-y-6">
        <p className="text-white/60 text-base md:text-lg leading-relaxed">{aboutIntro.body}</p>
        <p className="text-sm text-white/50">
          <span className="text-2xl font-bold text-gradient mr-3">{cgpa}</span>
          CGPA · B.Tech CSE (AI &amp; ML), VIT-AP University
        </p>
      </Reveal>

      <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-8 content-start">
        {strengths.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={0.06 * i} className="border-l-2 border-accent pl-5">
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default About;
