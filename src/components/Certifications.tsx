import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass p-10 rounded-[2rem] w-full border-accent-blue/20 bg-accent-blue/5 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-accent-blue/20 flex items-center justify-center text-accent-blue">
          <Award size={40} />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Oracle Cloud Infrastructure 2025</h3>
          <p className="text-accent-cyan font-bold uppercase tracking-widest text-xs mb-4 flex items-center justify-center md:justify-start gap-2">
            <ShieldCheck size={14} /> Generative AI Certified Professional
          </p>
          <p className="text-white/60 leading-relaxed max-w-xl">
            Certified technical mastery in deploying and scaling Generative AI solutions within enterprise cloud environments.
          </p>
        </div>

        <div className="glass px-6 py-3 rounded-full text-sm font-bold border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
          Verify Credential
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
