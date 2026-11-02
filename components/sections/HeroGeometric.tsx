'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function HeroGeometric() {
  const { locale, t } = useLanguage();
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="hero-photograph" aria-hidden="true">
        <div className="hero-photo-layer" data-parallax>
          <Image src="/images/architecture-hero.jpg" alt="" fill priority sizes="100vw" />
        </div>
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="mx-auto max-w-container px-5 sm:px-6">
        <div className="editorial-hero-layout">
          <div className="editorial-hero-copy">
            <h1 id="hero-title">Audit. Tax.<br /><span>Business advisory.</span></h1>
            <p className="hero-intro">
              {locale === 'bn'
                ? 'আপনার প্রতিষ্ঠানের অডিট, কর ও ব্যবসায়িক পরামর্শে এম. এস. সালেকিন অ্যান্ড কো., চার্টার্ড অ্যাকাউন্ট্যান্টস।'
                : 'Chartered accountants helping you manage your obligations and make informed business decisions.'}
            </p>
            <div className="hero-actions">
              <Link href="/contact#enquiry-form" className="editorial-button editorial-button-light">{t.bookConsultation}</Link>
              <Link href="#expertise" className="hero-service-link">{t.exploreServices}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
