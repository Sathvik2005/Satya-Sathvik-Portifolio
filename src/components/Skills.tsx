import { Brain, ClipboardList, Database, FlaskConical, Server } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const groups = [
  {
    title: "AI & LLM Engineering",
    blurb: "Models that learn, retrieve and decide.",
    icon: Brain,
    skills: ["Deep Learning", "Transformers", "Reinforcement Learning (DQN, PPO)", "LSTM", "XGBoost", "Time-Series", "RAG Pipelines", "Hugging Face", "DeBERTa-v3", "Sentence Transformers", "Semantic Search", "Embeddings", "PyTorch", "TensorFlow"],
  },
  {
    title: "Backend & APIs",
    blurb: "Services that put models to work.",
    icon: Server,
    skills: ["Python", "FastAPI", "Java", "HTML/CSS/JS"],
  },
  {
    title: "Data & Databases",
    blurb: "Storage and retrieval.",
    icon: Database,
    skills: ["SQL", "FAISS", "ChromaDB", "Vector Search", "NumPy / Pandas"],
  },
  {
    title: "Testing & Evaluation",
    blurb: "Proving it works.",
    icon: FlaskConical,
    skills: ["Playwright", "Test Automation", "LLM Evaluation", "Reproducible Test Cases"],
  },
  {
    title: "Product & Systems Thinking",
    blurb: "From workflow to requirement.",
    icon: ClipboardList,
    skills: ["Product Requirements", "Technical Documentation", "Workflow Analysis"],
  },
];

const Skills = () => (
  <>
    <SectionHead
      index="02"
      label="Skills"
      title="A focused stack, from models to production."
      lead="Grouped by what I use them for, drawn from my projects and internship work."
    />

    <ul className="border-b border-white/10">
      {groups.map((g, i) => {
        const Icon = g.icon;
        return (
          <li key={g.title} className="border-t border-white/10">
            <Reveal delay={0.04 * i} className="grid md:grid-cols-12 gap-x-8 gap-y-4 py-8">
              <div className="md:col-span-4 flex items-start gap-3">
                <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-accent-blue/15 text-accent-cyan">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight text-lg">{g.title}</h3>
                  <p className="text-sm text-white/50">{g.blurb}</p>
                </div>
              </div>
              <ul className="md:col-span-8 flex flex-wrap content-start gap-2">
                {g.skills.map((sk) => (
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
