'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionEntry {
  id: string;
  question: string;
  questionBn?: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  showBanglaSubtitle?: boolean;
}

export function Accordion({ items, showBanglaSubtitle = false }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-borderline rounded-2xl border border-borderline bg-white shadow-indigo">
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-btn-${item.id}`;

        return (
          <div key={item.id} className="transition-colors">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-600"
              >
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 font-heading text-xs font-bold tabular-nums text-indigo-800">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    {item.category && (
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-indigo-600">
                        {item.category}
                      </span>
                    )}
                    <span className="block font-heading text-base font-bold text-indigo-950 sm:text-lg">
                      {item.question}
                    </span>
                    {showBanglaSubtitle && item.questionBn && (
                      <span className="mt-0.5 block font-bengali text-xs font-medium text-ink-600">
                        {item.questionBn}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 ${
                    isOpen
                      ? 'rotate-180 border-indigo-600 bg-indigo-600 text-white'
                      : 'border-borderline bg-surface text-indigo-950'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? 'block px-6 pb-6 pt-1' : 'hidden'}
            >
              <div className="pl-9 text-base leading-relaxed text-ink-600">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
