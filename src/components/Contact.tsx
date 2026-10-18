import Section from './Section';
import { links } from '../lib/links';
import { profile } from '../data/portfolio';

const channels = [
  { label: "Email", value: profile.email, href: links.email },
  { label: "LinkedIn", value: "kanithi-satya-sathvik", href: links.linkedin },
  { label: "GitHub", value: "Sathvik2005", href: links.github },
  { label: "Resume", value: "Download PDF", href: links.resume },
  { label: "Phone", value: profile.phoneDisplay, href: links.phone },
  { label: "Location", value: profile.location },
];

const Contact = () => (
  <Section id="contact" label="Contact">
    <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Let’s build something useful.</h3>
    <p className="mt-6 max-w-xl text-muted leading-relaxed">
      Open to AI products, internships, and engineering work. Email is the fastest way to reach me.
    </p>

    <dl className="mt-12 divide-y divide-line border-y border-line">
      {channels.map(({ label, value, href }) => (
        <div key={label} className="grid grid-cols-[6rem_1fr] md:grid-cols-9 gap-x-8 py-4">
          <dt className="md:col-span-3 text-sm text-muted">{label}</dt>
          <dd className="md:col-span-6 break-words">
            {href ? (
              <a
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="link"
              >
                {value}
              </a>
            ) : (
              value
            )}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Contact;
