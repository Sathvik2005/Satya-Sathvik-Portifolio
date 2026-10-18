type Props = { size?: number; className?: string };

// Small cat-head motif. Draws in currentColor, so it takes the surrounding text color.
const CatMark = ({ size = 32, className = '' }: Props) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={`cat ${className}`}
    fill="none"
    aria-hidden="true"
  >
    <path className="ear-l" d="M9 24 L8 6 L23 15 Z" fill="currentColor" />
    <path className="ear-r" d="M39 24 L40 6 L25 15 Z" fill="currentColor" />
    <ellipse cx="24" cy="29" rx="17" ry="14" fill="currentColor" />
    <circle cx="18" cy="27" r="2.3" fill="rgb(var(--bg))" />
    <circle cx="30" cy="27" r="2.3" fill="rgb(var(--bg))" />
    <path d="M22.4 31.5 L24 33.2 L25.6 31.5 Z" fill="rgb(var(--cyan))" />
    <path d="M6 31 L14 32 M6 36 L14 34.5 M42 31 L34 32 M42 36 L34 34.5" stroke="rgb(var(--bg))" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default CatMark;
