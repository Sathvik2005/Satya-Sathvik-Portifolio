// Single source of truth for outbound links.
// Leave a value undefined until the real destination exists: the UI then renders it as "link pending"
// instead of a dead link.
export const links: Record<'email' | 'phone' | 'github' | 'linkedin' | 'resume', string | undefined> = {
  email: 'mailto:kanithisathvik@gmail.com',
  phone: 'tel:+919515136729',
  github: undefined,
  linkedin: undefined,
  resume: undefined,
};
