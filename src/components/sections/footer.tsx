'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-4 border-t border-gray-200/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center justify-center gap-2 text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="select-none">© {currentYear}</span>
          <span className="select-none">FindMySchool</span>
          <span className="select-none">• All rights reserved. LoydDev</span>
        </motion.div>
      </div>
    </footer>
  );
} 