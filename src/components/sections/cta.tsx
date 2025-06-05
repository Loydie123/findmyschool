'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CTAContent } from '@/constants/cta';

interface CTAProps extends CTAContent {
  className?: string;
}

const gradientClasses = {
  'blue-600': {
    background: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    text: 'text-blue-600',
    hover: 'group-hover:text-blue-700',
    buttonShadow: 'hover:shadow-blue-500/25'
  },
  'purple-600': {
    background: 'bg-gradient-to-r from-purple-600 to-pink-600',
    text: 'text-purple-600',
    hover: 'group-hover:text-purple-700',
    buttonShadow: 'hover:shadow-purple-500/25'
  },
  'green-600': {
    background: 'bg-gradient-to-r from-green-600 to-emerald-600',
    text: 'text-green-600',
    hover: 'group-hover:text-green-700',
    buttonShadow: 'hover:shadow-green-500/25'
  }
} as const;

export function CTA({
  heading,
  description,
  buttonText,
  buttonLink,
  gradient,
  className = ""
}: CTAProps) {
  const colors = gradientClasses[gradient.from as keyof typeof gradientClasses] || gradientClasses['blue-600'];

  return (
    <section className={`relative overflow-hidden py-16 px-4 ${className}`}>
      <motion.div 
        className={`absolute inset-0 ${colors.background}`}
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-white mb-4 select-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {heading}
        </motion.h2>
        
        <motion.p 
          className="text-xl text-blue-100 mb-8 select-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href={buttonLink}
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-3 font-semibold ${colors.text} transition duration-300 ease-out hover:scale-105 hover:shadow-lg ${colors.buttonShadow} select-none`}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            style={{ 
              WebkitTouchCallout: 'none', 
              WebkitUserSelect: 'none',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <span className="relative flex items-center gap-2 select-none">
              {buttonText}
              <motion.svg 
                className="w-4 h-4 pointer-events-none"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </motion.svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 