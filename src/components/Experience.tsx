import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center italic tracking-tight text-white/80">Foundations & Growth</h2>
      
      <div className="space-y-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-10 border-l border-white/10"
        >
          <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent-blue" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-bold">B.Tech, Computer Science (AI & ML)</h3>
            <span className="text-accent-cyan text-sm font-semibold glass px-4 py-1 rounded-full">2022 — 2026</span>
          </div>
          <p className="text-white/80 font-medium mb-2">VIT-AP University</p>
          <p className="text-white/40 text-sm">CGPA: 8.40/10.0</p>
          <p className="mt-4 text-white/60 leading-relaxed max-w-2xl">
            Specializing in Large Language Models, Deep Learning, and Reinforcement Learning. 
            Actively involved in developing production-grade AI systems and researching scalable architectures.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative pl-10 border-l border-white/10"
        >
          <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent-blue/30" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-bold">Intermediate Education</h3>
            <span className="text-white/30 text-sm font-semibold glass px-4 py-1 rounded-full border-none">2020 — 2022</span>
          </div>
          <p className="text-white/80 font-medium mb-2">Sri Chaitanya Junior College</p>
          <p className="text-white/40 text-sm">Percentage: 90.7%</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
