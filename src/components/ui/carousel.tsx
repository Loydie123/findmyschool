'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { CarouselItem } from '@/constants/carousel';

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  className?: string;
  imageHeight?: string;
}

export function Carousel({
  items,
  autoPlayInterval = 4500,
  className = "",
  imageHeight = "h-[500px]",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
      filter: 'blur(8px)',
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] 
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      filter: 'blur(8px)',
      rotateY: direction > 0 ? -15 : 15
    })
  };


  const textVariants = {
    enter: {
      y: 40,
      opacity: 0,
      filter: 'blur(4px)',
      scale: 0.95
    },
    center: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      y: -40,
      opacity: 0,
      filter: 'blur(4px)',
      scale: 0.95
    }
  };


  const textChildVariants = {
    enter: {
      y: 20,
      opacity: 0,
      filter: 'blur(4px)'
    },
    center: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      filter: 'blur(4px)'
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((current) => (current + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [items.length, autoPlayInterval]);

  return (
    <div className={`relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl bg-gray-100 select-none ${className}`}>
      <div className={`relative w-full ${imageHeight}`}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 150, damping: 30 },
              opacity: { duration: 0.8 },
              rotateY: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              filter: { duration: 0.8, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full [perspective:1000px]"
          >
            <motion.div 
              className="relative h-full w-full"
              initial={{ scale: 1.1 }}
              animate={{ 
                scale: 1,
                transition: {
                  duration: autoPlayInterval / 1000,
                  ease: "linear"
                }
              }}
            >
              <Image
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover brightness-[0.85] select-none"
                priority
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8 text-white select-none"
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.h2 
                  className="text-4xl font-bold mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
                  variants={textChildVariants}
                >
                  {items[currentIndex].title}
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-100 mb-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]"
                  variants={textChildVariants}
                >
                  {items[currentIndex].description}
                </motion.p>
                <motion.p 
                  className="text-sm text-gray-300 italic"
                  variants={textChildVariants}
                >
                  {items[currentIndex].credit}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 