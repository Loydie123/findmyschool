'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SchoolCard } from './components/SchoolCard';
import { SearchFilters } from './components/SearchFilters';
import { mockSchools } from './components/mock-data';
import type { School } from './components/types';

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

export default function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  const filteredSchools = mockSchools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || school.type === selectedType;
    const matchesProgram = !selectedProgram || school.programs.includes(selectedProgram);
    return matchesSearch && matchesType && matchesProgram;
  });

  return (
    <div className="relative">
      <motion.div 
        className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-blue-50 to-indigo-50/50"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        layoutId="hero-background"
      />
      <div className="pt-24 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gray-900">Find Your </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Perfect School</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore top schools and universities that match your academic goals
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchFilters
              searchTerm={searchTerm}
              selectedType={selectedType}
              selectedProgram={selectedProgram}
              onSearchChange={setSearchTerm}
              onTypeChange={setSelectedType}
              onProgramChange={setSelectedProgram}
            />
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filteredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 