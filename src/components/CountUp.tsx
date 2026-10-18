import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type Props = { value: string };

// Counts a figure like "12", "1M", "<800 ms" or "95%" up from zero once it scrolls into view.
// The final value is the default text, so it stays correct if animation never runs.
const CountUp = ({ value }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const match = value.match(/^(<?)([\d.]+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const target = match ? parseFloat(match[2]) : NaN;
  const suffix = match?.[3] ?? '';
  const decimals = match?.[2].includes('.') ? match[2].split('.')[1].length : 0;

  useEffect(() => {
    if (!inView || !ref.current || Number.isNaN(target)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => { el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, target, prefix, suffix, decimals]);

  return <span ref={ref}>{value}</span>;
};

export default CountUp;
