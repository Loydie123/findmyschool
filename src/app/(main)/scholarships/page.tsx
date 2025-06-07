'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/page-transition';
import { ScholarshipCard } from '@/app/(main)/scholarships/components/ScholarshipCard';
import { SearchFilters } from '@/app/(main)/scholarships/components/SearchFilters';
import { mockScholarships } from '@/app/(main)/scholarships/components/mock-data';
import type { Scholarship } from '@/app/(main)/scholarships/components/types';

const backgroundVariants = {
  initial: { 
    scale: 0.9, 
    opacity: 0
  },
  animate: { 
    scale: 1, 
    opacity: 0.2,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
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
      staggerChildren: 0.05,
      delayChildren: 0.02,
      type: "tween"
    }
  }
};

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');

  const filteredScholarships = mockScholarships.filter(scholarship => {
    const matchesSearch = 
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || scholarship.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <PageTransition>
      <div className="relative">
        <motion.div 
          className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-blue-50 to-indigo-50/50"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          layoutId="hero-background"
        />
        <motion.div 
          className="pt-24 pb-12 relative"
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center space-y-4"
              variants={staggerContainerVariants}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-4"
                variants={fadeUpVariants}
              >
                <span className="text-gray-900">Available </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scholarships</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                variants={fadeUpVariants}
              >
                Find and apply for scholarships that match your academic achievements and needs
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-8"
              variants={fadeUpVariants}
            >
              <SearchFilters
                searchTerm={searchTerm}
                selectedType={selectedType}
                onSearchChange={setSearchTerm}
                onTypeChange={setSelectedType}
              />
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainerVariants}
            >
              {filteredScholarships.map((scholarship) => (
                <motion.div
                  key={scholarship.id}
                  variants={fadeUpVariants}
                >
                  <ScholarshipCard scholarship={scholarship} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
} 