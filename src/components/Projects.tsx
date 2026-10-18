import { ExternalLink, Github } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

// Add `github` / `demo` URLs here once they exist; icons only render for real links.
type Project = {
  title: string;
  tag: string;
  description: string;
  focus: string;
  outcome?: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "TwinMind Pro",
    tag: "Real-Time AI Copilot",
    description: "A production-quality meeting assistant that listens to live audio and surfaces AI-powered suggestions in real-time.",
    focus: "Live intelligence for human collaboration.",
    tech: ["React", "FastAPI", "Groq Whisper", "Llama-3.3-70B"],
  },
  {
    title: "Answer IQ",
    tag: "RAG Knowledge System",
    description: "Private knowledge systems powered by intelligent retrieval and semantic search over unstructured documents.",
    focus: "Private knowledge systems powered by intelligent retrieval.",
    tech: ["FAISS", "Embeddings", "Hugging Face", "RAG"],
  },
  {
    title: "InsightRecruiter",
    tag: "AI Hiring Engine",
    description: "Automated resume screening and semantic ranking to transform hiring with intelligent decision systems.",
    focus: "Transforming hiring with intelligent decision systems.",
    outcome: "60% faster resume shortlisting",
    tech: ["FastAPI", "Vector Search", "LLM Evaluation"],
  },
  {
    title: "Autonomous Taxi Agent",
    tag: "Deep Reinforcement Learning",
    description: "Self-learning agent using PPO and SARSA for complex decision tasks.",
    focus: "Machines that learn from experience.",
    outcome: "35% performance improvement",
    tech: ["Gymnasium", "PPO", "DQN", "Deep RL"],
  },
];

const Projects = () => (
  <>
    <SectionHead
      index="03"
      label="Projects"
      title={<>Featured <span className="text-gradient">work.</span></>}
      lead="Each project is an exploration of technical limits and real-world utility."
    />

    <ol className="border-b border-white/10">
      {projects.map((p, i) => (
        <li key={p.title} className="border-t border-white/10">
          <Reveal delay={0.04 * i} className="group grid md:grid-cols-12 gap-x-8 gap-y-4 py-10">
            <div className="md:col-span-4">
              <p className="text-sm font-semibold text-accent-cyan">{String(i + 1).padStart(2, '0')}</p>
              <p className="eyebrow mt-2 !text-white/45">{p.tag}</p>
            </div>

            <div className="md:col-span-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight transition-colors group-hover:text-accent-cyan">
                  {p.title}
                </h3>
                {(p.github || p.demo) && (
                  <div className="flex gap-3 text-white/50">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`} className="hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`} className="hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p className="text-white/70 leading-relaxed mt-3 max-w-2xl">{p.description}</p>
              <p className="text-sm text-white/45 mt-2">{p.focus}</p>
              {p.outcome && (
                <p className="mt-4 text-sm">
                  <span className="text-white/45">Outcome · </span>
                  <span className="font-semibold text-accent-cyan">{p.outcome}</span>
                </p>
              )}
              <ul className="flex flex-wrap gap-2 mt-5" aria-label={`${p.title} technologies`}>
                {p.tech.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </>
);

export default Projects;
