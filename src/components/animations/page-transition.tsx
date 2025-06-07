'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'flip';
}

const springTransition = {
  type: "spring",
  mass: 0.2,
  damping: 15,
  stiffness: 150,
  restDelta: 0.001
};

const easeTransition = {
  type: "tween",
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1]
};

const animationVariants = {
  fade: {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ...springTransition,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: easeTransition
    },
  },
  slide: {
    initial: {
      opacity: 0,
      x: -15,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ...springTransition,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: 15,
      transition: easeTransition
    },
  },
  scale: {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ...springTransition,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: easeTransition
    },
  },
  rotate: {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ...springTransition,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: easeTransition
    },
  },
  flip: {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ...springTransition,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: easeTransition
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: springTransition
  }
};

export function PageTransition({ 
  children, 
  className = "", 
  animation = "fade" 
}: PageTransitionProps) {
  return (
    <motion.div
      className={`${className}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants[animation]}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={childVariants}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
} 