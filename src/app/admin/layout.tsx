'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AdminNavbar } from './components/navbar';
import { AdminHeader } from './components/header';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar 
        isExpanded={isExpanded}
        isMobile={isMobile}
        setIsExpanded={setIsExpanded}
      />

      <div className={`flex flex-col min-h-screen ${isExpanded ? 'lg:pl-64' : 'pl-20'} transition-all duration-500 ease-in-out`}>
        <AdminHeader />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
} 