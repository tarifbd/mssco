import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { JsonLd } from './JsonLd';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href === '/' ? '' : item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-medium text-ink-600">
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-ink-400 shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-indigo-950">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-ink-600 transition-colors hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded"
                  >
                    {idx === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
