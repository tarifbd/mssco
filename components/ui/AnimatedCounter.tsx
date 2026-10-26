'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  durationMs?: number;
}

export function AnimatedCounter({
  value,
  suffix = '',
  durationMs = 1200,
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(value);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - startTime) / durationMs, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * value));
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCount(value);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('en-BD')}
      {suffix}
    </span>
  );
}
