'use client';

import { motion } from 'framer-motion';
import { FeatureIcon } from '@/components/ui/feature-icon';
import type { Feature } from '@/constants/features';

interface FeaturesProps {
  heading: string;
  subheading: string;
  features: readonly Feature[];
  className?: string;
}

const gradientClasses = {
  'blue-500': {
    gradient: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    background: 'bg-blue-100/50',
    text: 'text-blue-500',
    textGradient: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    shadow: 'group-hover:shadow-blue-500/25'
  },
  'green-500': {
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
    background: 'bg-green-100/50',
    text: 'text-green-500',
    textGradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
    shadow: 'group-hover:shadow-green-500/25'
  },
  'purple-500': {
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
    background: 'bg-purple-100/50',
    text: 'text-purple-500',
    textGradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
    shadow: 'group-hover:shadow-purple-500/25'
  },
  'amber-500': {
    gradient: 'bg-gradient-to-r from-amber-500 to-orange-500',
    background: 'bg-amber-100/50',
    text: 'text-amber-500',
    textGradient: 'bg-gradient-to-r from-amber-500 to-orange-500',
    shadow: 'group-hover:shadow-amber-500/25'
  }
} as const;

export function Features({
  heading,
  subheading,
  features,
  className = ""
}: FeaturesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 select-none">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto select-none">
            {subheading}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const colors = gradientClasses[feature.gradient.from as keyof typeof gradientClasses];
            
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >

                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white to-gray-50/50 z-10" />
                

                <div className={`absolute inset-0 opacity-0 ${colors.gradient} transition-opacity duration-500 group-hover:opacity-5`} />
                

                <div className="relative z-20">
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 ${colors.gradient} blur-2xl opacity-20 scale-150 transition-opacity duration-500 group-hover:opacity-30`} />
                    <span className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.background} ${colors.text} transition-transform duration-500 group-hover:scale-110`}>
                      <FeatureIcon name={feature.icon} className="w-7 h-7" />
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-3 ${colors.textGradient} bg-clip-text text-transparent select-none transition-colors duration-500`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed select-none transition-colors duration-500 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 