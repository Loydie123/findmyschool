import { Hero } from '@/components/sections/hero';
import { FeatureCarousel } from '@/components/feature-carousel';
import { Features } from '@/components/sections/features';
import { CTA } from '@/components/sections/cta';
import { LandingLayout } from '@/components/layouts/landing-layout';
import { featuresContent } from '@/constants/features';
import { scholarshipCTA } from '@/constants/cta';
import { Suspense } from 'react';

export default function Home() {
  return (
    <LandingLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <section className="py-2 px-4">
          <FeatureCarousel />
        </section>
        <Features 
          heading={featuresContent.heading}
          subheading={featuresContent.subheading}
          features={featuresContent.features}
        />
        <CTA {...scholarshipCTA} />
      </Suspense>
    </LandingLayout>
  );
} 