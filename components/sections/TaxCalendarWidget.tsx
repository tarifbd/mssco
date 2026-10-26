'use client';

import React, { useState } from 'react';
import { Calendar, AlertCircle, ShieldAlert } from 'lucide-react';
import { taxCalendarItems, TaxCalendarEvent } from '@/content/insights';

const frequencies = ['All', 'Monthly', 'Semi-Annual / Periodic', 'Annual'] as const;

export function TaxCalendarWidget() {
  const [selectedFreq, setSelectedFreq] = useState<(typeof frequencies)[number]>('All');

  const filteredItems: TaxCalendarEvent[] =
    selectedFreq === 'All'
      ? taxCalendarItems
      : taxCalendarItems.filter((item) => item.frequency === selectedFreq);

  return (
    <div id="tax-calendar" className="scroll-mt-28 rounded-2xl border border-borderline bg-white p-6 sm:p-8 shadow-indigo">
      <div className="flex flex-col justify-between gap-4 border-b border-borderline pb-6 lg:flex-row lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
            <Calendar className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
            <span>Bangladesh Statutory Compliance Calendar</span>
          </div>
          <h3 className="mt-3 font-heading text-2xl font-extrabold text-indigo-950">
            Key NBR, VAT &amp; RJSC Filing Milestones
          </h3>
          <p className="mt-1 text-sm text-ink-600">
            Editable in <code className="rounded bg-indigo-50 px-1.5 py-0.5 text-xs font-semibold text-indigo-800">/content/insights.ts</code>. Always verify current extensions or SRO updates with official NBR/RJSC notices.
          </p>
        </div>

        {/* Filter Pills */}
        <div role="tablist" aria-label="Filter compliance calendar by frequency" className="flex flex-wrap gap-2">
          {frequencies.map((freq) => {
            const active = selectedFreq === freq;
            return (
              <button
                key={freq}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedFreq(freq)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                  active
                    ? 'bg-brand-gradient text-white shadow-sm'
                    : 'border border-borderline bg-surface text-indigo-950 hover:bg-indigo-50'
                }`}
              >
                {freq}
              </button>
            );
          })}
        </div>
      </div>

      {/* Warning Notice */}
      <div className="mt-5 flex items-start gap-3 rounded-xl border border-indigo-500/25 bg-indigo-50/70 p-4 text-xs text-ink-900">
        <ShieldAlert className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          <strong>Important Verification Notice:</strong> Statutory filing dates in Bangladesh are subject to Finance Act amendments, National Board of Revenue (NBR) circulars, and public holiday notifications. Please confirm exact deadlines for your entity with our office.
        </p>
      </div>

      {/* Calendar Rows */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-xl border border-borderline bg-surface p-5"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-md bg-indigo-950 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {item.authority}
                </span>
                <span className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-bold text-indigo-800 tabular-nums">
                  {item.dueDateLabel}
                </span>
              </div>

              <h4 className="mt-3.5 font-heading text-base font-bold text-indigo-950">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-600">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-borderline flex items-start gap-1.5 text-[11px] text-ink-600">
              <AlertCircle className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{item.verificationNote}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
