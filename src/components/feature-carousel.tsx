'use client';

import { Carousel } from '@/components/ui/carousel';
import { featureCarouselItems } from '@/constants/carousel';

export function FeatureCarousel() {
  return (
    <Carousel 
      items={featureCarouselItems}
      showControls={false}
      showIndicators={false}
      autoPlayInterval={4500}
      className="shadow-xl"
    />
  );
} 