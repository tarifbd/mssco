'use client';

import React, { useState } from 'react';
import { FileDown, CheckSquare, Printer, X } from 'lucide-react';
import { downloadableChecklists, DownloadableChecklist } from '@/content/insights';
import { siteConfig } from '@/content/site';

export function ChecklistDownloader() {
  const [activeChecklist, setActiveChecklist] = useState<DownloadableChecklist | null>(null);

  const handleDownloadTxt = (checklist: DownloadableChecklist) => {
    const content = [
      `${siteConfig.firmName} — CHARTERED ACCOUNTANTS`,
      `${siteConfig.location.addressLine} | ${siteConfig.contact.phoneDisplay}`,
      `==================================================================`,
      `CHECKLIST: ${checklist.title.toUpperCase()}`,
      `Category: ${checklist.category}`,
      `==================================================================`,
      '',
      ...checklist.items.map((item, idx) => `[ ] ${idx + 1}. ${item}`),
      '',
      `------------------------------------------------------------------`,
      `Disclaimer: Informational checklist only. Verify specific requirements`,
      `for your assessment year / entity with ${siteConfig.firmName}.`,
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${checklist.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="checklists" className="scroll-mt-28">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {downloadableChecklists.map((checklist) => (
          <div
            key={checklist.id}
            className="flex flex-col justify-between rounded-2xl border border-borderline bg-white p-7 shadow-indigo"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-800">
                  {checklist.category}
                </span>
                <span className="text-xs font-semibold text-ink-600 tabular-nums">
                  {checklist.items.length} Items
                </span>
              </div>

              <h3 className="mt-4 font-heading text-lg font-bold text-indigo-950">
                {checklist.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {checklist.description}
              </p>

              <ul className="mt-4 space-y-2 border-t border-borderline pt-4 text-xs text-ink-900">
                {checklist.items.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckSquare className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
                {checklist.items.length > 4 && (
                  <li className="text-xs font-semibold text-indigo-600 pl-5">
                    + {checklist.items.length - 4} more checklist items...
                  </li>
                )}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-borderline flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setActiveChecklist(checklist)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-50 px-4 py-2.5 text-xs font-bold text-indigo-800 transition-colors hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
              >
                <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                <span>View / Print PDF</span>
              </button>

              <button
                type="button"
                onClick={() => handleDownloadTxt(checklist)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-borderline bg-white px-4 py-2.5 text-xs font-bold text-indigo-950 transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
              >
                <FileDown className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Checklist Preview / Print Modal */}
      {activeChecklist && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-checklist-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/60 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-borderline bg-white p-6 sm:p-8 shadow-indigo-lg">
            <div className="flex items-start justify-between gap-4 border-b border-borderline pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {activeChecklist.category} • Printable Checklist
                </span>
                <h3
                  id="modal-checklist-title"
                  className="mt-1 font-heading text-xl font-extrabold text-indigo-950"
                >
                  {activeChecklist.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close checklist modal"
                onClick={() => setActiveChecklist(null)}
                className="rounded-lg border border-borderline p-2 text-ink-600 hover:bg-surface hover:text-indigo-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ol className="mt-6 space-y-3">
              {activeChecklist.items.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-borderline bg-surface p-3.5 text-sm text-ink-900"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-600 text-xs font-bold text-white tabular-nums">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-xs text-ink-600">
              Note: Replace with custom branded PDF files in <code className="rounded bg-indigo-50 px-1 py-0.5 text-indigo-800">/public/downloads/</code> if preferred, or use Print / Save as PDF below.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-borderline pt-4">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2.5 text-xs font-bold text-white shadow-indigo"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveChecklist(null)}
                className="rounded-xl border border-borderline bg-white px-5 py-2.5 text-xs font-bold text-indigo-950 hover:bg-surface"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
