import { Github } from 'lucide-react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { projects } from '../data/portfolio';

const Projects = () => (
  <>
    <SectionHead
      index="03"
      label="Projects"
      title={<>Selected work, <span className="text-gradient">measured by outcomes.</span></>}
      lead="What each project does, what it's built with, and the impact."
    />

    <ol className="border-b border-white/10">
      {projects.map((p, i) => {
        const [problem, built] = p.description;
        return (
          <li key={p.title} className="border-t border-white/10">
            <Reveal className="group grid md:grid-cols-12 gap-x-8 gap-y-4 py-9">
              <div className="md:col-span-4">
                <p className="text-sm font-semibold text-accent-cyan">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight transition-colors group-hover:text-accent-cyan">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.tagline}</p>
              </div>

              <div className="md:col-span-8">
                <dl className="space-y-4 max-w-2xl">
                  <div>
                    <dt className="eyebrow !text-white/45 mb-1">Problem</dt>
                    <dd className="text-white/70 leading-relaxed">{problem}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-white/45 mb-1">What I built</dt>
                    <dd className="text-white/85 leading-relaxed">{built}</dd>
                  </div>
                </dl>

                <ul className="flex flex-wrap gap-2 mt-5" aria-label={`${p.title} technologies`}>
                  {p.tech.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>

                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-accent-cyan transition-colors"
                  >
                    <Github size={16} /> View GitHub
                    <span className="sr-only"> repository for {p.title}</span>
                  </a>
                )}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  </>
);

export default Projects;
