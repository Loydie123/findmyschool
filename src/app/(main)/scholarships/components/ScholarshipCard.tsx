'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scholarship } from './types';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  return (
    <motion.div
      key={scholarship.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full shadow-sm">
          {scholarship.type}
        </span>
      </div>
      <div className="relative h-48">
        <Image
          src={scholarship.image}
          alt={scholarship.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{scholarship.name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-base text-green-600">{scholarship.amount}</span>
        </div>
        <p className="text-gray-600 mb-4">{scholarship.organization}</p>
        <div className="flex flex-wrap gap-2">
          {scholarship.requirements.slice(0, 2).map((req, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {req}
            </span>
          ))}
          {scholarship.requirements.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              +{scholarship.requirements.length - 2} more
            </span>
          )}
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
} 