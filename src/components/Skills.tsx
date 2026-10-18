import { motion } from 'framer-motion';
import { Brain, MessageSquareText, Wrench, Code2 } from 'lucide-react';

const tiles = [
  {
    title: "AI / ML Core",
    blurb: "Models that learn, forecast and make decisions.",
    icon: Brain,
    skills: ["Deep Learning", "Transformers", "Reinforcement Learning (DQN, PPO)", "LSTM", "XGBoost", "Time-Series"],
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    title: "LLM & NLP",
    blurb: "Retrieval and language understanding.",
    icon: MessageSquareText,
    skills: ["RAG Pipelines", "Hugging Face", "DeBERTa-v3", "Sentence Transformers", "Semantic Search", "Embeddings"],
    span: "md:col-span-2",
  },
  {
    title: "Frameworks & Tools",
    blurb: "Shipping it to production.",
    icon: Wrench,
    skills: ["PyTorch", "TensorFlow", "FastAPI", "FAISS", "ChromaDB", "NumPy / Pandas"],
    span: "md:col-span-1",
  },
  {
    title: "Programming",
    blurb: "Everyday languages.",
    icon: Code2,
    skills: ["Python", "Java", "SQL", "HTML/CSS/JS"],
    span: "md:col-span-1",
  },
];

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Arsenal</h2>
      <p className="text-white/50 text-center mb-14 max-w-xl mx-auto">
        A focused stack, from research-grade models to production APIs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(190px,auto)] gap-4">
        {tiles.map((t, idx) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`${t.span} relative overflow-hidden p-7 glass rounded-3xl group transition-colors hover:border-accent-cyan/40 flex flex-col ${
                t.featured ? "bg-gradient-to-br from-accent-blue/20 via-white/5 to-transparent justify-between" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-accent-blue/15 text-accent-cyan">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold tracking-tight text-lg">{t.title}</h3>
                </div>
                <p className="text-white/45 text-sm mb-5">{t.blurb}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border border-white/10 bg-white/5 text-white/70 group-hover:text-white transition-colors ${
                      t.featured ? "px-4 py-2 text-sm" : "px-3 py-1.5 text-xs"
                    }`}
                  >
                    {skill}
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

export default Skills;
