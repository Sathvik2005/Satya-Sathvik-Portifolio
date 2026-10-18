import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-accent-blue font-semibold mb-4 text-lg">Who I Am</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          I don’t just train models — I build <span className="text-gradient">intelligent systems.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white/60 text-lg leading-relaxed space-y-6"
      >
        <p>
          I am an AI Engineer specializing in Large Language Models, Deep Learning, and Reinforcement Learning. 
          My focus is on the intersection of research and production — transforming cutting-edge architectures 
          into scalable, real-world solutions.
        </p>
        <p>
          With a production-first mindset, I leverage RAG pipelines, vector databases, and high-performance 
          inference frameworks to create autonomous agents and knowledge systems that solve complex problems.
        </p>
        <div className="flex gap-8 pt-4">
          <div>
            <div className="text-3xl font-bold text-white">8.4</div>
            <div className="text-sm text-white/40 uppercase tracking-widest">CGPA</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">5+</div>
            <div className="text-sm text-white/40 uppercase tracking-widest">Core AI Frameworks</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
