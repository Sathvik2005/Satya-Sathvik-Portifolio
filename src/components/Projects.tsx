import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { projects, type Project } from '../data/portfolio';

// TwinMind Pro leads as the featured project; the rest keep their data order.
const ordered: Project[] = [
  ...projects.filter((p) => p.title === 'TwinMind Pro'),
  ...projects.filter((p) => p.title !== 'TwinMind Pro'),
];

const Projects = () => (
  <Section id="projects" label="Selected projects">
    <p className="max-w-2xl text-muted leading-relaxed mb-12">
      Selected work, measured by outcomes. Each entry covers the problem, what I built, and the stack.
    </p>

    <ol className="divide-y divide-line border-y border-line">
      {ordered.map((p, i) => {
        const [problem, built] = p.description;
        const featured = i === 0;
        return (
          <li key={p.title} className={featured ? 'py-12' : 'py-8'}>
            <article className="grid md:grid-cols-9 gap-x-8 gap-y-4">
              <header className="md:col-span-3">
                <p className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</p>
                <h3 className={`mt-1 font-semibold tracking-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                  {p.title}
                </h3>
              </header>

              <div className="md:col-span-6">
                <p className={featured ? 'text-lg leading-relaxed' : 'leading-relaxed'}>{p.tagline}</p>

                <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                  <div className="grid grid-cols-[5.5rem_1fr] gap-x-4">
                    <dt className="text-muted">Problem</dt>
                    <dd>{problem}</dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-x-4">
                    <dt className="text-muted">Built</dt>
                    <dd>{built}</dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-x-4">
                    <dt className="text-muted">Stack</dt>
                    <dd className="text-muted">{p.tech.join(' · ')}</dd>
                  </div>
                </dl>

                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link mt-5 inline-flex items-center gap-1 text-sm"
                  >
                    GitHub <ArrowUpRight size={14} />
                    <span className="sr-only"> repository for {p.title}</span>
                  </a>
                )}
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  </Section>
);

export default Projects;
