import { useState } from 'react';
import { ArrowUpRight, Check, Download, Copy, FileText, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';
import { Section, SectionHeader } from './Section';
import { links } from '../lib/links';
import { profile, resumes } from '../data/portfolio';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: links.email },
  { icon: Github, label: 'GitHub', value: 'Sathvik2005', href: links.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'kanithi-satya-sathvik', href: links.linkedin },
  { icon: FileText, label: 'Resume', value: 'Download PDF', href: links.resume },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable: the mailto link still works */ }
  };

  return (
    <Section id="contact" band>
      <SectionHeader
        icon={Send}
        label="Contact"
        title={<>Let’s build <span className="text-gradient">something useful.</span></>}
        lead="I’m open to AI engineering, ML and software roles, and to interesting problems worth building. Email is the fastest way to reach me."
      />

      <Stagger className="bento">
        {channels.map(({ icon: Icon, label, value, href }) => {
          const external = href?.startsWith('http');
          return (
            <StaggerItem key={label} className="md:col-span-3 lg:col-span-3">
              <div className="tile tile-hover group h-full flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <span className="icon-tile"><Icon size={18} aria-hidden="true" /></span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="text-muted transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted">{label}</p>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="mt-1 block font-display font-semibold break-words after:absolute after:inset-0 after:rounded-[inherit]"
                  >
                    {value}
                  </a>
                </div>
                {label === 'Email' && (
                  <button
                    onClick={copyEmail}
                    className="relative z-10 -mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-xs font-medium text-muted hover:text-ink hover:border-accent transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={14} className="text-cyan" /> : <Copy size={14} />}
                    <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.1} className="mt-10">
        <h3 className="font-display text-lg font-semibold">Resume by role</h3>
        <p className="mt-1 text-sm text-muted">Same experience, framed for the role you’re hiring for.</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {resumes.map((r) => (
            <li key={r.file}>
              <a
                href={`/resumes/${r.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-ink"
              >
                <Download size={14} className="text-accent" aria-hidden="true" /> {r.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
        <a href={links.phone} className="inline-flex items-center gap-2 hover:text-ink transition-colors">
          <Phone size={16} className="text-accent" aria-hidden="true" /> {profile.phoneDisplay}
        </a>
        <span className="inline-flex items-center gap-2">
          <MapPin size={16} className="text-accent" aria-hidden="true" /> {profile.location}
        </span>
      </Reveal>
    </Section>
  );
};

export default Contact;
