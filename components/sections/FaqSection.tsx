'use client';

import React from 'react';
import { homeFaqs } from '@/content/faqs';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/components/ui/JsonLd';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function FaqSection() {
  const { locale } = useLanguage();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-surface py-16 sm:py-24 border-b border-borderline">
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <SectionHeader
          align="center"
          eyebrow="Frequently Asked Questions"
          title="Clarity on Audit, NBR Tax, VAT & RJSC Compliance"
          subtitle="Answers to common questions from company directors, SME owners, foreign investors, and individual taxpayers in Bangladesh."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion items={homeFaqs} showBanglaSubtitle={locale === 'bn'} />
        </div>
      </div>
    </section>
  );
}
