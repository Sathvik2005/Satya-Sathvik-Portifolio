import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  useScrollTrigger?: boolean;
  start?: string;
  once?: boolean;
};

export function useFadeIn(
  scopeRef: RefObject<HTMLElement>,
  selector: string,
  {
    y = 20,
    duration = 0.6,
    delay = 0,
    ease = "power2.out",
    useScrollTrigger = false,
    start = "top 82%",
    once = true,
  }: FadeInOptions = {},
) {
  useLayoutEffect(() => {
    if (!scopeRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (!targets.length) return;

      targets.forEach((target) => {
        gsap.from(target, {
          opacity: 0,
          y,
          duration,
          delay,
          ease,
          scrollTrigger: useScrollTrigger
            ? {
                trigger: target,
                start,
                once,
              }
            : undefined,
        });
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef, selector, y, duration, delay, ease, useScrollTrigger, start, once]);
}
