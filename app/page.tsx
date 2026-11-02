import React from 'react';
import { HomeIndex } from '@/components/sections/HomeIndex';
import { AboutContent } from '@/components/sections/AboutContent';
import { PageMotion } from '@/components/layout/PageMotion';
import { HeroGeometric } from '@/components/sections/HeroGeometric';
import { StatsBand } from '@/components/sections/StatsBand';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';

import { HowWeWork } from '@/components/sections/HowWeWork';
import { IndustriesStrip } from '@/components/sections/IndustriesStrip';
import { InsightsPreview } from '@/components/sections/InsightsPreview';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <PageMotion>
      <HeroGeometric />
      <HomeIndex />
      <StatsBand />
      <ServicesGrid limit={6} />
      <WhyChooseUs />
      <AboutContent />

      <HowWeWork />
      <IndustriesStrip />
      <InsightsPreview />
      <FaqSection />
      <CtaBanner />
    </PageMotion>
  );
}
