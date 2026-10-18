import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Let’s Build the <span className="text-gradient">Future of AI</span> Together
        </h2>
        
        <p className="max-w-2xl mx-auto text-white/50 text-xl mb-16 leading-relaxed">
          Currently open to opportunities in AI Engineering, LLM Systems, and Intelligent Platforms. 
          Let’s discuss how we can scale impact through intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <a href="mailto:kanithisathvik@gmail.com" className="glass p-8 rounded-3xl group hover:bg-white/10 transition-all">
            <Mail className="mx-auto mb-4 text-accent-blue group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-white/40 text-sm">kanithisathvik@gmail.com</p>
          </a>
          
          <a href="#" className="glass p-8 rounded-3xl group hover:bg-white/10 transition-all">
            <Linkedin className="mx-auto mb-4 text-accent-blue group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-bold mb-1">LinkedIn</h3>
            <p className="text-white/40 text-sm">Satya Sathvik</p>
          </a>

          <a href="#" className="glass p-8 rounded-3xl group hover:bg-white/10 transition-all">
            <Github className="mx-auto mb-4 text-accent-blue group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-bold mb-1">GitHub</h3>
            <p className="text-white/40 text-sm">@kanithisathvik</p>
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-6 bg-accent-blue rounded-full font-bold text-xl flex items-center gap-3 mx-auto group shadow-[0_0_40px_rgba(0,80,255,0.4)]"
        >
          Download Resume <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Contact;
