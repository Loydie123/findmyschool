'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AdminNavbar } from './components/navbar';
import { AdminHeader } from './components/header';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session && !pathname?.startsWith('/admin/login')) {
          router.replace('/admin/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [pathname, router, supabase.auth]);

  if (isLoading) {
    return null;
  }

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