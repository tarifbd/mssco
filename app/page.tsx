import React from 'react';
import { HeroGeometric } from '@/components/sections/HeroGeometric';
import { StatsBand } from '@/components/sections/StatsBand';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TeamHierarchySection } from '@/components/sections/TeamHierarchySection';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { IndustriesStrip } from '@/components/sections/IndustriesStrip';
import { InsightsPreview } from '@/components/sections/InsightsPreview';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <>
      <HeroGeometric />
      <StatsBand />
      <ServicesGrid />
      <WhyChooseUs />
      <TeamHierarchySection />
      <HowWeWork />
      <IndustriesStrip />
      <InsightsPreview />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
