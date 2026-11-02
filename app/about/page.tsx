import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';
import { AboutContent } from '@/components/sections/AboutContent';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: `About the Firm & Principal CA (${siteConfig.ownerName})`,
  description: `Learn about ${siteConfig.firmName}, a proprietorship Chartered Accountancy practice of ${siteConfig.ownerName} (${siteConfig.ownerCredentials}) in ${siteConfig.location.addressLine}.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <><AboutContent standalone /><CtaBanner /></>;
}
