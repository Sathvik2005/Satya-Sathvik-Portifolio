import Reveal from './Reveal';
import SectionHead from './SectionHead';

const entries = [
  {
    kind: "Industry",
    period: "May 14, 2026 — Present",
    title: "Logikality",
    sub: "Software Development Engineer Intern",
    points: [
      "Translate domain workflows into product requirements and technical documentation.",
      "Build reproducible test cases and Playwright automation for complex application flows.",
      "Test and evaluate AI-powered document workflows alongside engineering and product teams.",
    ],
  },
  {
    kind: "Education",
    period: "2022 — 2026",
    title: "B.Tech, Computer Science (AI & ML)",
    sub: "VIT-AP University · CGPA 8.45/10.0",
    points: [
      "Specializing in Large Language Models, Deep Learning, and Reinforcement Learning.",
      "Developing production-grade AI systems and researching scalable architectures.",
    ],
  },
  {
    kind: "Education",
    period: "2020 — 2022",
    title: "Intermediate Education",
    sub: "Sri Chaitanya Junior College · 90.7%",
    points: [] as string[],
  },
];

const Experience = () => (
  <>
    <SectionHead index="04" label="Experience" title={<>Where I’ve worked <span className="text-gradient">&amp; learned.</span></>} />

    <Reveal>
      <ol className="panel !p-0 divide-y divide-white/10 overflow-hidden">
        {entries.map((e) => (
          <li
            key={e.title}
            className="grid md:grid-cols-12 gap-x-8 gap-y-3 p-6 md:p-8 transition-colors hover:bg-white/[0.03]"
          >
            <div className="md:col-span-3">
              <p className="text-sm font-semibold">{e.period}</p>
              <p className="eyebrow mt-1 !text-white/40">{e.kind}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="text-xl font-bold tracking-tight">{e.title}</h3>
              <p className="text-sm text-white/50 mt-1">{e.sub}</p>
              {e.points.length > 0 && (
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-white/70 leading-relaxed">
                      <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  </>
);

export default Experience;
