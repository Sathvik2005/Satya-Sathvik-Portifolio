import { Award, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { certifications } from '../data/portfolio';

// Entries are "Title - Issuer"; split so the title and issuer can be styled separately.
const split = (full: string) => {
  const i = full.lastIndexOf(' - ');
  return i === -1 ? { title: full, issuer: '' } : { title: full.slice(0, i), issuer: full.slice(i + 3) };
};

const Certifications = () => (
  <>
    <SectionHead index="05" label="Certifications" title="Credentials." />

    <ul className="border-b border-white/10">
      {certifications.map((c, i) => {
        const { title, issuer } = split(c.title);
        return (
          <li key={c.title} className="border-t border-white/10">
            <Reveal delay={0.04 * i} className="flex items-center gap-5 py-6">
              <span className="grid place-items-center h-12 w-12 shrink-0 rounded-2xl bg-accent/15 text-accent-alt">
                <Award size={22} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold tracking-tight">{title}</h3>
                {issuer && <p className="text-sm text-white/50 mt-0.5">{issuer}</p>}
              </div>
              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost shrink-0"
                  aria-label={`View certificate: ${title}`}
                >
                  View <ExternalLink size={14} />
                </a>
              )}
            </Reveal>
          </li>
        );
      })}
    </ul>
  </>
);

export default Certifications;
