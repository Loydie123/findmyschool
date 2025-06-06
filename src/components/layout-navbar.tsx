'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/logo';
import { NavLinks } from '@/components/ui/nav-links';
import { AuthButtons } from '@/components/auth/auth-buttons';
import { AnimatedMenu } from '@/components/ui/animated-menu';
import { BurgerButton } from '@/components/ui/burger-button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 px-4">
      <nav className={`mx-auto max-w-7xl transition-all duration-300 ${
        isScrolled 
          ? 'mt-1 md:mt-2 bg-white/80 backdrop-blur-md shadow-lg rounded-full border border-gray-200/20' 
          : 'mt-2 md:mt-4'
      }`}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <AuthButtons />
          </div>

          <BurgerButton 
            isOpen={isMobileMenuOpen} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
        </div>
      </nav>

      <AnimatedMenu isOpen={isMobileMenuOpen}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <NavLinks isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
          <AuthButtons isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
        </div>
      </AnimatedMenu>
    </header>
  );
} 