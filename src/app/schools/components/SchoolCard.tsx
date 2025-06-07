'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { School } from './types';

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  return (
    <motion.div
      key={school.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative h-48">
        <Image
          src={school.image}
          alt={school.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{school.name}</h3>
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-gray-600">{school.rating}</span>
        </div>
        <p className="text-gray-600 mb-4">{school.location}</p>
        <div className="flex flex-wrap gap-2">
          {school.programs.slice(0, 3).map((program, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {program}
            </span>
          ))}
          {school.programs.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              +{school.programs.length - 3} more
            </span>
          )}
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          View Details
        </button>
      </div>
    </motion.div>
  );
} 