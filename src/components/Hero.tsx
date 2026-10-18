import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

// Bento order: two hero numbers, four supporting, two wide.
const stats = [
  { value: "60%", label: "Faster resume shortlisting", span: "col-span-2", featured: true },
  { value: "95%", label: "Text-to-SQL test pass rate", span: "col-span-2", featured: true },
  { value: "35%", label: "Taxi failures reduced", span: "col-span-1" },
  { value: "92%", label: "Top model accuracy", span: "col-span-1" },
  { value: "<800 ms", label: "Voice AI response latency", span: "col-span-1" },
  { value: "1M", label: "Records analyzed", span: "col-span-1" },
  { value: "8.45/10", label: "CGPA", span: "col-span-2" },
  { value: "12", label: "AI projects shipped", span: "col-span-2" },
];

const contacts = [
  { icon: Mail, text: "kanithisathvik@gmail.com", href: "mailto:kanithisathvik@gmail.com" },
  { icon: Phone, text: "+91 9515136729", href: "tel:+919515136729" },
  { icon: MapPin, text: "Bengaluru, India" },
  { icon: Linkedin, text: "LinkedIn", href: "#" },
  { icon: Github, text: "GitHub", href: "#" },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen px-6 lg:px-20 pt-32 pb-20 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[400px] -translate-x-1/2 bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.35fr_1fr] gap-10 items-start">
        {/* Left: pitch + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent-cyan mb-6">
            <Sparkles size={13} /> AI-first engineer building real-world intelligent systems
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Building AI that turns messy workflows into{" "}
            <span className="text-gradient">reliable products.</span>
          </h1>

          <p className="max-w-xl text-white/60 leading-relaxed mb-8">
            SDE Intern at Logikality. I turn domain workflows into product requirements, reproducible test cases,
            and end-to-end automation, and build AI-native prototypes across developer tooling, multi-agent
            operations, and full-stack workflows.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-blue text-[#ffffff] font-semibold shadow-lg shadow-accent-blue/30 hover:brightness-110 transition"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition"
            >
              <FileText size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition"
            >
              <Mail size={16} /> Contact
            </a>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                whileHover={{ y: -3 }}
                className={`${s.span} glass rounded-2xl p-4 md:p-5 transition-colors hover:border-accent-cyan/40 ${
                  s.featured ? "bg-gradient-to-br from-accent-blue/20 via-white/5 to-transparent" : ""
                }`}
              >
                <div className={`font-bold tracking-tight ${s.featured ? "text-3xl md:text-4xl text-gradient" : "text-xl md:text-2xl"}`}>
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-white/50 mt-1 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: profile snapshot */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="glass rounded-3xl p-7 lg:sticky lg:top-28"
        >
          <span className="inline-block rounded-full bg-accent-blue/15 text-accent-cyan px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-5">
            Profile snapshot
          </span>
          <h2 className="text-2xl font-bold tracking-tight">Kanithi Satya Sathvik</h2>
          <p className="text-white/50 text-sm mb-6">SDE Intern | AI Engineer</p>

          <ul className="space-y-3 mb-6">
            {contacts.map(({ icon: Icon, text, href }) => (
              <li key={text}>
                {href ? (
                  <a href={href} className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                    <Icon size={16} className="text-accent-cyan shrink-0" /> {text}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-sm text-white/70">
                    <Icon size={16} className="text-accent-cyan shrink-0" /> {text}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-accent-blue/10 border border-accent-blue/20 p-4">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-cyan mb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              Open to roles
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              AI Engineer, ML Engineer, FDE, Product Manager (AI), Data Engineer, Data Analyst, Data Scientist, SDE,
              and AI-native product engineering roles.
            </p>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default Hero;
