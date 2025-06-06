'use client';

import { Navbar } from "@/components/layout-navbar";
import { PageTransition } from "@/components/animations/page-transition";
import { Footer } from "@/components/sections/footer";

export default function SchoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <PageTransition animation="fade" className="flex-grow bg-gray-50">
        {children}
      </PageTransition>
      <Footer />
    </div>
  );
} 