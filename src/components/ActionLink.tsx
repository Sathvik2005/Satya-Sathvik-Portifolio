import type { ReactNode } from 'react';

type Props = {
  href?: string;
  className?: string;
  children: ReactNode;
};

// Renders a real link when href exists, otherwise an inert, clearly-labelled placeholder.
const ActionLink = ({ href, className = '', children }: Props) => {
  if (!href) {
    return (
      <span className={`${className} is-pending`} aria-disabled="true" title="Link coming soon">
        {children}
      </span>
    );
  }
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

export default ActionLink;
