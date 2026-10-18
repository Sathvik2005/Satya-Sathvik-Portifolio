import { profile } from '../data/portfolio';

// Single source of truth for outbound links, read from the portfolio data.
// A missing value renders as "link pending" instead of a dead link.
export const links: Record<'email' | 'phone' | 'github' | 'linkedin' | 'resume', string | undefined> = {
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phoneHref}`,
  github: profile.github,
  linkedin: profile.linkedin,
  resume: profile.resumePath,
};
