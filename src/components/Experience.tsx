import Section from './Section';
import { currentFocus, timeline } from '../data/portfolio';

// Long single-sentence details separated by ";" read better as a list.
const toPoints = (detail: string) =>
  detail.includes(';')
    ? detail
        .replace(/\.$/, '')
        .split(';')
        .map((p) => p.trim())
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1) + '.')
    : [];

const Experience = () => (
  <Section id="experience" label="Experience">
    <ol className="divide-y divide-line border-y border-line">
      {timeline.map((e) => {
        const points = toPoints(e.detail);
        return (
          <li key={e.title + e.org} className="grid md:grid-cols-9 gap-x-8 gap-y-2 py-8">
            <p className="md:col-span-3 text-sm text-muted tabular-nums">{e.period.replace(' - ', ' – ')}</p>
            <div className="md:col-span-6">
              <h3 className="font-semibold tracking-tight">{e.title}</h3>
              <p className="text-sm text-muted">{e.org}</p>
              {points.length > 0 ? (
                <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-muted leading-relaxed">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 leading-relaxed">{e.detail}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>

    <p className="mt-8 max-w-2xl text-sm text-muted leading-relaxed">
      <span className="text-ink font-medium">Current focus. </span>
      {currentFocus}
    </p>
  </Section>
);

export default Experience;
