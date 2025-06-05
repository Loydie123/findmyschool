'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'flip';
}

const easings = {
  smooth: [0.22, 1, 0.36, 1],
  bounce: [0.68, -0.6, 0.32, 1.6],
  spring: [0.43, 0.13, 0.23, 0.96]
};


const animationVariants = {
  fade: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },
  slide: {
    initial: {
      opacity: 0,
      x: -60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: easings.spring,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 60,
      transition: {
        duration: 0.5,
        ease: easings.spring,
      },
    },
  },
  scale: {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.spring,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: easings.spring,
      },
    },
  },
  rotate: {
    initial: {
      opacity: 0,
      rotateX: -10,
      y: 40,
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easings.smooth,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      rotateX: 10,
      y: -40,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },
  flip: {
    initial: {
      opacity: 0,
      rotateY: -20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easings.bounce,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      rotateY: 20,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: easings.bounce,
      },
    },
  },
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.spring,
    },
  },
};

export function PageTransition({ 
  children, 
  className = "", 
  animation = "fade" 
}: PageTransitionProps) {
  return (
    <motion.div
      className={`${className} [perspective:1000px]`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants[animation]}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            custom={index}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: easings.spring,
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={sectionVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
} 