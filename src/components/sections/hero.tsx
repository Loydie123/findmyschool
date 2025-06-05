'use client';

import { motion } from 'framer-motion';
import { heroContent } from '@/constants/content';
import { SearchBar } from '@/components/ui/search-bar';

interface HeroProps {
  badge?: string;
  title?: {
    prefix: string;
    highlight: string;
  };
  description?: string;
}

const fadeUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Hero({
  badge = heroContent.badge,
  title = heroContent.title,
  description = heroContent.description,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-16 px-4">
      <motion.div 
        className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-20 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <motion.div 
        className="relative max-w-6xl mx-auto text-center"
        variants={staggerContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="space-y-6 mb-6" variants={staggerContainerVariants}>
          <motion.span 
            className="inline-flex select-none items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10"
            variants={fadeUpVariants}
          >
            {badge}
          </motion.span>
          <motion.div className="space-y-4" variants={staggerContainerVariants}>
            <motion.h1 
              className="select-none text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight"
              variants={fadeUpVariants}
            >
              {title.prefix}{' '}
              <motion.span 
                className="select-none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {title.highlight}
              </motion.span>
            </motion.h1>
            <motion.p 
              className="select-none text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              {description}
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="max-w-2xl mx-auto mt-16"
          variants={fadeUpVariants}
          transition={{ delay: 0.6 }}
        >
          <SearchBar />
        </motion.div>
      </motion.div>
    </section>
  );
} 