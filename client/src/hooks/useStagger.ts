import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StaggerOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  triggerSelector?: string;
  start?: string;
  once?: boolean;
};

export function useStagger(
  scopeRef: RefObject<HTMLElement>,
  selector: string,
  {
    y = 20,
    duration = 0.7,
    delay = 0,
    stagger = 0.1,
    ease = "power2.out",
    triggerSelector,
    start = "top 82%",
    once = true,
  }: StaggerOptions = {},
) {
  useLayoutEffect(() => {
    if (!scopeRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (!targets.length) return;

      const triggerElement = triggerSelector
        ? (document.querySelector(triggerSelector) as HTMLElement | null)
        : null;

      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: triggerElement
          ? {
              trigger: triggerElement,
              start,
              once,
            }
          : undefined,
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [
    scopeRef,
    selector,
    y,
    duration,
    delay,
    stagger,
    ease,
    triggerSelector,
    start,
    once,
  ]);
}
