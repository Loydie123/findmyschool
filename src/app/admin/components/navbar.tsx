'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from './navigation-items';
import { LogoutButton } from '../(auth)/logout/LogoutButton';
import { useLogout } from '../(auth)/logout/useLogout';

interface AdminNavbarProps {
  isExpanded: boolean;
  isMobile: boolean;
  setIsExpanded: (value: boolean) => void;
}

export function AdminNavbar({ isExpanded, isMobile, setIsExpanded }: AdminNavbarProps) {
  const pathname = usePathname();
  const { handleLogout } = useLogout();

  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transform transition-all duration-500 ease-in-out flex flex-col ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
        <button
          onClick={() => !isMobile && setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full h-full overflow-hidden"
        >
          <div className={`transition-all duration-500 ease-in-out transform ${isExpanded ? 'scale-100' : 'scale-90'}`}>
            <Image
              src="/images/logos.png"
              alt="FindMySchool Logo"
              width={isExpanded ? 160 : 52}
              height={isExpanded ? 40 : 52}
              className="object-contain transition-all duration-500 ease-in-out"
              priority
            />
          </div>
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center ${isExpanded ? 'px-4' : 'px-3'} py-2 text-sm font-medium rounded-md transition-all duration-500 ease-in-out group relative ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className={`transition-all duration-500 ease-in-out transform ${isExpanded ? 'mr-3' : 'mx-auto'} ${isActive ? 'text-blue-700' : 'text-gray-500 group-hover:text-gray-700'}`}>
                {item.icon}
              </span>
              <AnimatePresence mode="wait">
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="whitespace-nowrap"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
              {!isExpanded && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                  {item.title}
                </div>
              )}
              {isActive && (
                <motion.div
                  className="absolute inset-y-0 left-0 w-1 bg-blue-700 rounded-tr-md rounded-br-md"
                  layoutId="activeNav"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <LogoutButton isExpanded={isExpanded} handleLogout={handleLogout} />
    </div>
  );
} 