import { useEffect, useRef } from "react";

type RevealClass = "reveal" | "reveal-left" | "reveal-right";

export function useScrollReveal<T extends Element>(
  className: RevealClass = "reveal",
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
  delay = 0,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(className);
    if (delay) {
      const styled = el as unknown as { style: { transitionDelay: string } };
      styled.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [className, delay, JSON.stringify(options)]);

  return ref;
}
