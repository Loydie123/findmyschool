'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LogoutButtonProps {
  isExpanded: boolean;
  handleLogout: () => void;
}

export function LogoutButton({ isExpanded, handleLogout }: LogoutButtonProps) {
  return (
    <div className="p-4">
      <button
        onClick={handleLogout}
        className={`flex items-center ${isExpanded ? 'px-4' : 'px-3'} py-2 w-full text-sm font-medium rounded-md transition-all duration-500 ease-in-out group relative text-red-600 hover:bg-red-50`}
      >
        <span className={`transition-all duration-500 ease-in-out transform ${isExpanded ? 'mr-3' : 'mx-auto'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
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
              Logout
            </motion.span>
          )}
        </AnimatePresence>
        {!isExpanded && (
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
            Logout
          </div>
        )}
      </button>
    </div>
  );
} 