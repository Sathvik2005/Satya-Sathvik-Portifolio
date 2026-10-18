import Reveal from './Reveal';
import SectionHead from './SectionHead';

const principles = [
  { title: "Production-first", body: "Research ideas only matter once they run reliably for real users." },
  { title: "Evaluation-driven", body: "If a behavior can't be tested and measured, it can't be improved." },
];

const About = () => (
  <>
    <SectionHead
      index="01"
      label="About"
      title={<>I don’t just train models — I build <span className="text-gradient">intelligent systems.</span></>}
    />

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
      <Reveal className="lg:col-span-7 text-white/60 text-base md:text-lg leading-relaxed space-y-5">
        <p>
          I am an AI Engineer specializing in Large Language Models, Deep Learning, and Reinforcement Learning.
          My focus is on the intersection of research and production — transforming cutting-edge architectures
          into scalable, real-world solutions.
        </p>
        <p>
          With a production-first mindset, I leverage RAG pipelines, vector databases, and high-performance
          inference frameworks to create autonomous agents and knowledge systems that solve complex problems.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
        {principles.map((p) => (
          <div key={p.title} className="border-l-2 border-accent-blue pl-5">
            <h3 className="font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
          </div>
        ))}
        <p className="text-sm text-white/50 pt-2">
          <span className="text-2xl font-bold text-gradient mr-3">8.45</span>
          CGPA · B.Tech CSE (AI &amp; ML), VIT-AP University
        </p>
      </Reveal>
    </div>
  </>
);

export default About;
