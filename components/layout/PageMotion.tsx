'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Progressive enhancement: content stays readable before JS and on import failure. */
export function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    async function setup() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (disposed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      cleanup = () => media.revert();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const scope = root.current!;
        scope.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => {
          // Never conceal content or reset a visitor's restored scroll position.
          if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;
          gsap.from(element, {
            y: 24,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 92%', once: true },
          });
        });
        scope.querySelectorAll<HTMLElement>('[data-stagger]').forEach(group => {
          if (group.getBoundingClientRect().top < window.innerHeight * 0.9) return;
          gsap.from(group.children, {
            y: 28,
            duration: 0.65,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: { trigger: group, start: 'top 90%', once: true },
          });
        });
        const line = scope.querySelector('[data-process-line]');
        if (line) gsap.fromTo(line, { scaleX: 0 }, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: line.parentElement, start: 'top 85%', end: 'bottom 55%', scrub: 0.5 },
        });
      }, root);

      media.add('(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        root.current!.querySelectorAll<HTMLElement>('[data-parallax]').forEach(layer => {
          gsap.fromTo(layer, { y: -24 }, {
            y: 48,
            ease: 'none',
            scrollTrigger: { trigger: layer.closest('section'), start: 'top bottom', end: 'bottom top', scrub: 0.8 },
          });
        });
      }, root);

      await document.fonts.ready;
      if (!disposed) ScrollTrigger.refresh();
    }

    void setup().catch(() => cleanup?.());
    return () => { disposed = true; cleanup?.(); };
  }, []);

  return <div ref={root} className="motion-page enterprise-home">{children}</div>;
}
