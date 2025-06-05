'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedMenuProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export function AnimatedMenu({ isOpen, children, className = '' }: AnimatedMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden mt-2 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200/20 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 