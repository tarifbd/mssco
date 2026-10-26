import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-indigo-500/30 bg-[#32059B] shadow-indigo">
        <Image
          src="/logo-mss.jpg"
          alt="MS Salekin & Co — Chartered Accountants Logo"
          width={88}
          height={88}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`whitespace-nowrap font-heading text-base sm:text-lg font-extrabold tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-indigo-950'
          }`}
        >
          MS Salekin &amp; Co
        </span>
        <span
          className={`whitespace-nowrap mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] leading-none ${
            isLight ? 'text-violet-100' : 'text-indigo-600'
          }`}
        >
          Chartered Accountants
        </span>
      </div>
    </div>
  );
}
