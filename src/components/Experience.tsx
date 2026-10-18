import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { achievements, currentFocus, timeline } from '../data/portfolio';

const kindOf = (org: string, title: string) =>
  org.includes('Logikality') ? 'Industry' : title.includes('Club') ? 'Leadership' : 'Education';

// Long single-sentence details separated by ";" read better as bullets.
const toPoints = (detail: string) =>
  detail.includes(';')
    ? detail
        .replace(/\.$/, '')
        .split(';')
        .map((p) => p.trim())
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1) + '.')
    : [];

const Experience = () => (
  <>
    <SectionHead
      index="04"
      label="Experience & Education"
      title={<>Experience, education, <span className="text-gradient">and leadership.</span></>}
    />

    <Reveal>
      <ol className="panel !p-0 divide-y divide-white/10 overflow-hidden">
        {timeline.map((e) => {
          const points = toPoints(e.detail);
          return (
            <li
              key={e.title + e.org}
              className="grid md:grid-cols-12 gap-x-8 gap-y-3 p-6 md:p-8 transition-colors hover:bg-white/[0.03]"
            >
              <div className="md:col-span-3">
                <p className="text-sm font-semibold">{e.period.replace(' - ', ' — ')}</p>
                <p className="eyebrow mt-1 !text-white/40">{kindOf(e.org, e.title)}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-xl font-bold tracking-tight">{e.title}</h3>
                <p className="text-sm text-white/50 mt-1">{e.org}</p>
                {points.length > 0 ? (
                  <ul className="mt-4 space-y-2 max-w-2xl">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3 text-white/70 leading-relaxed">
                        <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">{e.detail}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Reveal>

    <div className="grid md:grid-cols-12 gap-x-8 gap-y-10 mt-14">
      <Reveal className="md:col-span-7">
        <h3 className="eyebrow mb-4">Achievements</h3>
        <ul className="space-y-3">
          {achievements.map((a) => (
            <li key={a} className="flex gap-3 text-white/70 leading-relaxed">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {a}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-5">
        <h3 className="eyebrow mb-4">Current focus</h3>
        <p className="text-white/70 leading-relaxed">{currentFocus}</p>
      </Reveal>
    </div>
  </>
);

export default Experience;
