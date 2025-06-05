'use client';

import { ReactNode } from 'react';
import { PageTransition } from '@/components/animations/page-transition';
import { Footer } from '@/components/sections/footer';

interface LandingLayoutProps {
  children: ReactNode;
  className?: string;
}

export function LandingLayout({ children, className = "" }: LandingLayoutProps) {
  return (
    <PageTransition className={`min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col ${className}`}>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </PageTransition>
  );
} 