import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import ActionLink from './ActionLink';
import { dur, ease } from '../lib/motion';
import { links } from '../lib/links';
import { profile, stats } from '../data/portfolio';

// Three headline numbers from the verified stats list.
const highlightLabels = ["Voice AI response latency", "Text-to-SQL test pass rate", "Faster resume shortlisting"];
const highlights = highlightLabels
  .map((label) => stats.find((s) => s.label === label))
  .filter((s): s is (typeof stats)[number] => Boolean(s));

const contacts = [
  { icon: Mail, text: profile.email, href: links.email },
  { icon: Phone, text: profile.phoneDisplay, href: links.phone },
  { icon: MapPin, text: profile.location },
  { icon: Linkedin, text: "LinkedIn", href: links.linkedin },
  { icon: Github, text: "GitHub", href: links.github },
];

// Staggered load reveal: each child fades up shortly after the previous one.
const item = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: dur.slow, ease, delay: 0.08 * i },
});

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div className="lg:col-span-7">
        <motion.p {...item(0)} className="eyebrow mb-5">AI-first engineer building real-world intelligent systems</motion.p>

        <motion.h1
          {...item(1)}
          className="text-[clamp(2.25rem,5.2vw,4rem)] font-bold tracking-tight leading-[1.07] mb-6"
        >
          Building AI that turns messy workflows into <span className="text-gradient">reliable products.</span>
        </motion.h1>

        <motion.p {...item(2)} className="max-w-xl text-white/60 text-base md:text-lg leading-relaxed mb-8">
          {profile.heroSummary}
        </motion.p>

        <motion.div {...item(3)} className="flex flex-wrap gap-3 mb-12">
          <a href="#projects" className="btn btn-primary group">
            View Projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <ActionLink href={links.github} className="btn btn-ghost"><Github size={16} /> GitHub</ActionLink>
          <ActionLink href={links.resume} className="btn btn-ghost"><FileText size={16} /> Resume</ActionLink>
        </motion.div>

        <motion.dl {...item(4)} className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6 max-w-xl">
          {highlights.map((h) => (
            <div key={h.label}>
              <dt className="sr-only">{h.label}</dt>
              <dd className="text-2xl md:text-3xl font-bold tracking-tight text-gradient w-fit">{h.value}</dd>
              <p className="text-xs md:text-sm text-white/50 mt-1 leading-snug">{h.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.aside {...item(3)} className="lg:col-span-5 panel" aria-label="Profile snapshot">
        <p className="eyebrow mb-5">Profile snapshot</p>
        <h2 className="text-2xl font-bold tracking-tight">{profile.name}</h2>
        <p className="text-white/50 text-sm mb-6">{profile.role}</p>

        <ul className="space-y-1 mb-6">
          {contacts.map(({ icon: Icon, text, href }) => (
            <li key={text}>
              {href ? (
                <a
                  href={href}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 min-h-[40px] text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon size={16} className="text-accent-cyan shrink-0" /> {text}
                </a>
              ) : (
                <span className="flex items-center gap-3 min-h-[40px] text-sm text-white/70">
                  <Icon size={16} className="text-accent-cyan shrink-0" /> {text}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-accent-blue/20 bg-accent-blue/10 p-4">
          <p className="eyebrow mb-2">Open to roles</p>
          <p className="text-sm text-white/70 leading-relaxed">{profile.openTo.replace(/^Open to /, '')}</p>
        </div>
      </motion.aside>
    </div>
  );
};

export default Hero;
