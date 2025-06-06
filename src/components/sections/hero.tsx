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

const springTransition = {
  type: "spring",
  damping: 30,
  stiffness: 200,
  mass: 0.8,
  restDelta: 0.001
};

const easeTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.6
};

const fadeUpVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: easeTransition
  }
};

const staggerContainerVariants = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
      type: "tween"
    }
  }
};

const backgroundVariants = {
  initial: { 
    scale: 0.9, 
    opacity: 0
  },
  animate: { 
    scale: 1, 
    opacity: 0.2,
    transition: {
      ...easeTransition,
      duration: 1
    }
  }
};

const textHighlightVariants = {
  initial: { 
    opacity: 0, 
    x: -10,
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      ...easeTransition,
      delay: 0.2
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
        className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        layoutId="hero-background"
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
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
                variants={textHighlightVariants}
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
          className="max-w-2xl mx-auto mt-12"
          variants={fadeUpVariants}
          whileHover={{ scale: 1.01 }}
          transition={springTransition}
        >
          <SearchBar />
        </motion.div>
      </motion.div>
    </section>
  );
} 