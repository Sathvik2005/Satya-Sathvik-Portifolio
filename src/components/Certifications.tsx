import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { certifications } from '../data/portfolio';

// Entries are "Title - Issuer"; split so each part can be styled on its own.
const split = (full: string) => {
  const i = full.lastIndexOf(' - ');
  return i === -1 ? { title: full, issuer: '' } : { title: full.slice(0, i), issuer: full.slice(i + 3) };
};

const Certifications = () => (
  <Section id="certifications" label="Certifications">
    <ul className="divide-y divide-line border-y border-line">
      {certifications.map((c) => {
        const { title, issuer } = split(c.title);
        return (
          <li key={c.title} className="flex items-baseline justify-between gap-6 py-5">
            <div>
              <p className="font-medium">{title}</p>
              {issuer && <p className="text-sm text-muted">{issuer}</p>}
            </div>
            {c.href && (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link shrink-0 inline-flex items-center gap-1 text-sm"
                aria-label={`View certificate: ${title}`}
              >
                View <ArrowUpRight size={14} />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  </Section>
);

export default Certifications;
