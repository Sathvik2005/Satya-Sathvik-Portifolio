import { Award, ShieldCheck } from 'lucide-react';
import ActionLink from './ActionLink';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

// Set `verifyUrl` to the credential link when available; the button is hidden until then.
const certifications: { title: string; issuer: string; verifyUrl?: string }[] = [
  { title: "Oracle Cloud Infrastructure 2025", issuer: "Generative AI Certified Professional" },
];

const Certifications = () => (
  <>
    <SectionHead index="05" label="Certifications" title="Credentials." />

    <ul className="border-b border-white/10">
      {certifications.map((c) => (
        <li key={c.title} className="border-t border-white/10">
          <Reveal className="flex items-center gap-5 py-8">
            <span className="grid place-items-center h-14 w-14 shrink-0 rounded-2xl bg-accent-blue/15 text-accent-cyan">
              <Award size={26} />
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold tracking-tight">{c.title}</h3>
              <p className="eyebrow mt-1 flex items-center gap-2">
                <ShieldCheck size={14} /> {c.issuer}
              </p>
            </div>
            {c.verifyUrl && (
              <ActionLink href={c.verifyUrl} className="btn btn-ghost shrink-0">Verify</ActionLink>
            )}
          </Reveal>
        </li>
      ))}
    </ul>
  </>
);

export default Certifications;
