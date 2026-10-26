import React from 'react';

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-indigo-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
