import { Award, ExternalLink } from 'lucide-react';
import { Stagger, StaggerItem } from './Reveal';
import { Section, SectionHeader } from './Section';
import { certifications } from '../data/portfolio';

// Entries are "Title - Issuer"; split so each part can be styled on its own.
const split = (full: string) => {
  const i = full.lastIndexOf(' - ');
  return i === -1 ? { title: full, issuer: '' } : { title: full.slice(0, i), issuer: full.slice(i + 3) };
};

const Certifications = () => (
  <Section id="certifications">
    <SectionHeader icon={Award} label="Certifications" title="Credentials." />

    <Stagger tag="ul" className="grid md:grid-cols-3 gap-[var(--gap)]">
      {certifications.map((c) => {
        const { title, issuer } = split(c.title);
        return (
          <StaggerItem key={c.title} tag="li">
            <article className={`tile group h-full flex flex-col ${c.href ? 'tile-hover' : ''}`}>
              <span className="icon-tile mb-5"><Award size={18} aria-hidden="true" /></span>
              <h3 className="font-display font-semibold leading-snug">{title}</h3>
              {issuer && <p className="mt-2 text-sm text-muted">{issuer}</p>}
              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mt-auto pt-5 text-sm font-medium after:absolute after:inset-0 after:rounded-[inherit]"
                >
                  View certificate <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  </Section>
);

export default Certifications;
