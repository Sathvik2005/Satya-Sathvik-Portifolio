import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "TwinMind Pro",
    tag: "Real-Time AI Copilot",
    description: "A production-quality meeting assistant that listens to live audio and surfaces AI-powered suggestions in real-time.",
    tech: ["React", "FastAPI", "Groq Whisper", "Llama-3.3-70B"],
    link: "#",
    github: "#",
    tone: "Live intelligence for human collaboration."
  },
  {
    title: "Answer IQ",
    tag: "RAG Knowledge System",
    description: "Private knowledge systems powered by intelligent retrieval and semantic search over unstructured documents.",
    tech: ["FAISS", "Embeddings", "Hugging Face", "RAG"],
    link: "#",
    github: "#",
    tone: "Private knowledge systems powered by intelligent retrieval."
  },
  {
    title: "InsightRecruiter",
    tag: "AI Hiring Engine",
    description: "Transforming hiring with intelligent decision systems. Automated resume screening and semantic ranking.",
    tech: ["FastAPI", "Vector Search", "LLM Evaluation"],
    link: "#",
    github: "#",
    tone: "Transforming hiring with intelligent decision systems."
  },
  {
    title: "Autonomous Taxi Agent",
    tag: "Deep Reinforcement Learning",
    description: "Self-learning agent using PPO and SARSA. Achieved 35% performance improvement in complex tasks.",
    tech: ["Gymnasium", "PPO", "DQN", "Deep RL"],
    link: "#",
    github: "#",
    tone: "Machines that learn from experience."
  }
];

// Bento placement: one hero tile, one wide tile, two compact tiles.
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured <span className="text-gradient">Innovations</span></h2>
          <p className="text-white/40 max-w-xl">Every project is an exploration of technical limits and real-world utility.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(230px,auto)] gap-4">
        {projects.map((project, idx) => {
          const featured = idx === 0;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`${spans[idx]} group relative glass rounded-3xl overflow-hidden flex flex-col justify-between transition-colors hover:border-accent-cyan/40 ${
                featured ? "p-9 bg-gradient-to-br from-accent-blue/20 via-white/5 to-transparent" : "p-7"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <span className="text-accent-cyan text-xs font-bold uppercase tracking-widest">
                    {String(idx + 1).padStart(2, '0')} · {project.tag}
                  </span>
                  <div className="flex gap-3 text-white/40">
                    <a href={project.github} aria-label={`${project.title} on GitHub`} className="hover:text-white transition-colors"><Github size={18} /></a>
                    <a href={project.link} aria-label={`${project.title} live`} className="hover:text-white transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <h3 className={`font-bold tracking-tight mb-3 ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}>{project.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base mb-4">{project.description}</p>
                {featured && <p className="text-white/40 text-sm italic mb-6">"{project.tone}"</p>}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase text-white/50 group-hover:text-white/80 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
