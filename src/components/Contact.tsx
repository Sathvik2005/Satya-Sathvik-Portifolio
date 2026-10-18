import { ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import ActionLink from './ActionLink';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { links } from '../lib/links';

const channels = [
  { icon: Mail, label: "Email", value: "kanithisathvik@gmail.com", href: links.email },
  { icon: Linkedin, label: "LinkedIn", value: "Satya Sathvik", href: links.linkedin },
  { icon: Github, label: "GitHub", value: "@kanithisathvik", href: links.github },
  { icon: FileText, label: "Resume", value: "Download PDF", href: links.resume },
];

const Contact = () => (
  <>
    <SectionHead
      index="06"
      label="Contact"
      title={<>Have an interesting <span className="text-gradient">problem to solve?</span></>}
      lead="Open to AI engineering, LLM systems and AI-native product roles. If you have something worth building, I’d like to hear about it."
    />

    <ul className="border-b border-white/10">
      {channels.map(({ icon: Icon, label, value, href }, i) => (
        <li key={label} className="border-t border-white/10">
          <Reveal delay={0.04 * i}>
            <ActionLink href={href} className="panel-link group grid grid-cols-12 items-center gap-x-6 py-6 transition-colors hover:bg-white/[0.03]">
              <span className="col-span-8 md:col-span-4 flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent-blue/15 text-accent-cyan">
                  <Icon size={18} />
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50">{label}</span>
              </span>
              <span className="col-span-12 md:col-span-6 order-last md:order-none mt-3 md:mt-0 font-semibold tracking-tight text-lg break-words">
                {value}
              </span>
              <span className="col-span-4 md:col-span-2 justify-self-end">
                {href ? (
                  <ArrowUpRight size={18} className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                ) : (
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Link pending</span>
                )}
              </span>
            </ActionLink>
          </Reveal>
        </li>
      ))}
    </ul>
  </>
);

export default Contact;
