import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 text-center">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <Compass className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-indigo-600">
          Error 404 • Page Not Found
        </p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-indigo-950 sm:text-5xl">
          The requested page could not be located
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-600">
          The page you are looking for may have been moved or renamed. Explore our core Chartered Accountancy services or return to the home page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-indigo"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-borderline bg-white px-6 py-3.5 text-sm font-bold text-indigo-950 hover:bg-indigo-50"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
