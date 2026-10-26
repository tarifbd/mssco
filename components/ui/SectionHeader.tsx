import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`${
        isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-800 ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
