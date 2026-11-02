import { ShieldCheck, FileCheck2, Landmark } from 'lucide-react';

const principles = [
  { icon: ShieldCheck, title: 'Independent assurance', detail: 'Audit and financial reporting' },
  { icon: FileCheck2, title: 'Practical tax guidance', detail: 'Income tax, VAT and filing support' },
  { icon: Landmark, title: 'Business compliance', detail: 'Corporate and regulatory advisory' },
];

export function StatsBand() {
  return (
    <section aria-label="Our practice at a glance" className="border-b border-borderline bg-white">
      <div className="mx-auto grid max-w-container gap-6 px-5 py-8 sm:px-6 md:grid-cols-3 md:gap-8 md:py-10">
        {principles.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="flex items-center gap-4 md:border-l md:border-borderline md:pl-6 first:md:border-0 first:md:pl-0">
            <Icon className="h-7 w-7 shrink-0 text-indigo-600" aria-hidden="true" />
            <div><h2 className="text-sm font-semibold text-indigo-950">{title}</h2><p className="mt-1 text-xs leading-relaxed text-ink-600">{detail}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
