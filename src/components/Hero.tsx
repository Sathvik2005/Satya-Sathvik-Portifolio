import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { dur, ease } from '../lib/motion';
import { links } from '../lib/links';
import { profile } from '../data/portfolio';

const Hero = () => (
  <section id="hero" className="pt-32 pb-20 md:pt-44 md:pb-28">
    <div className="container-x">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: dur.enter, ease }}
      >
        <p className="flex items-center gap-2 text-sm text-muted mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Open to AI and software engineering roles · {profile.location}
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08]">
          I build AI-powered software with engineering discipline.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
          SDE Intern at Logikality, studying Computer Science (AI &amp; ML) at VIT-AP University. I focus on AI
          engineering, backend systems, and reliable AI workflows.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="#projects" className="btn btn-solid">
            View projects <ArrowRight size={16} />
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-sm">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href={links.resume} className="link inline-flex items-center gap-1 text-sm">
            Resume <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
