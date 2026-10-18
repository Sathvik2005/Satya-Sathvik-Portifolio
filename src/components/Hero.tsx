import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Database, FileText, Github, Zap, BarChart3 } from 'lucide-react';
import CatMark from './CatMark';
import { dur, ease } from '../lib/motion';
import { links } from '../lib/links';
import { profile } from '../data/portfolio';

const highlights = [
  { icon: Zap, text: 'Voice AI under 800 ms' },
  { icon: Database, text: 'Text-to-SQL: 19/20 tests passed' },
  { icon: BarChart3, text: '1M records analyzed' },
];

// Terminal content comes from the verified portfolio data.
const lines = [
  { cmd: 'whoami', out: 'kanithi-satya-sathvik · AI engineer' },
  { cmd: 'cat now.txt', out: 'SDE intern @ Logikality · test automation + AI workflows' },
  { cmd: 'ls projects | wc -l', out: '12' },
  { cmd: 'echo $STACK', out: 'Python · FastAPI · RAG · React' },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: dur.enter, ease, delay },
});

// One headline line, revealed from behind a mask.
const MaskLine = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <span className="block overflow-hidden pb-[0.1em]">
    <motion.span
      className="block"
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const [pets, setPets] = useState(0);
  const [extra, setExtra] = useState<{ cmd: string; out: string }[]>([]);

  // Easter egg: pet the cat in the terminal header.
  const pet = () => {
    const n = pets + 1;
    setPets(n);
    const out = n < 5 ? 'meow.' : "ok, that's enough. back to work.";
    setExtra((e) => [...e.slice(-2), { cmd: 'pet cat', out }]);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.p {...rise(0)} className="label !text-accent !border-accent/40 !bg-primary/10 mb-6 !text-sm !px-3 !py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            AI engineer · SDE intern at Logikality
          </motion.p>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05]">
            <MaskLine delay={0.1}>I build AI systems</MaskLine>
            <MaskLine delay={0.22}>
              <span className="text-gradient">beyond the demo.</span>
            </MaskLine>
          </h1>

          <motion.p {...rise(0.45)} className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
            AI engineering, backend systems, and evaluation-driven development — turning ideas into software
            that can be tested, understood, and improved.
          </motion.p>

          <motion.div {...rise(0.58)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary group">
              Explore My Work
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Github size={16} /> GitHub
            </a>
            <a href={links.resume} className="link group ml-1 text-sm font-medium">
              <FileText size={16} /> Resume
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.ul {...rise(0.7)} className="mt-10 flex flex-wrap gap-2" aria-label="Verified highlights">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="label">
                <Icon size={14} className="text-cyan" aria-hidden="true" /> {text}
              </li>
            ))}
          </motion.ul>

          <motion.p {...rise(0.8)} className="mt-6 font-mono text-xs text-muted">
            <span className="text-cyan">//</span> ships code. supervised by a cat. {profile.location}.
          </motion.p>
        </div>

        {/* Terminal panel: stays dark navy in both themes, like a code window */}
        <motion.div {...rise(0.3)} className="lg:col-span-5">
          <div className="rounded-2xl border border-[#273753] bg-[#0A1224] shadow-xl shadow-primary/10 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#273753] px-4 py-2.5">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#273753]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#356DFF]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#59D8F5]/70" />
                <span className="ml-3 font-mono text-xs text-[#A5B3CA]">~/sathvik — zsh</span>
              </div>
              <button
                onClick={pet}
                aria-label="Pet the cat"
                className="text-[#356DFF] hover:text-[#5795FF] transition-colors rounded-md p-1"
              >
                <CatMark size={28} />
              </button>
            </div>

            <div className="p-5 font-mono text-[13px] leading-relaxed space-y-3 min-h-[280px]" aria-live="polite">
              {lines.map((l, i) => (
                <motion.div
                  key={l.cmd}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: dur.base, ease, delay: 0.6 + i * 0.28 }}
                >
                  <p className="text-[#F3F6FC]">
                    <span className="text-[#59D8F5]">$</span> {l.cmd}
                  </p>
                  <p className="text-[#A5B3CA] pl-4">{l.out}</p>
                </motion.div>
              ))}
              {extra.map((l, i) => (
                <motion.div key={`${l.cmd}-${i}-${pets}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-[#F3F6FC]">
                    <span className="text-[#59D8F5]">$</span> {l.cmd}
                  </p>
                  <p className="text-[#A5B3CA] pl-4">{l.out}</p>
                </motion.div>
              ))}
              <p className="text-[#F3F6FC]">
                <span className="text-[#59D8F5]">$</span> <span className="inline-block h-3.5 w-1.5 translate-y-0.5 bg-[#5795FF]" aria-hidden="true" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
