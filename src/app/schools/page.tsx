'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface School {
  id: string;
  name: string;
  location: string;
  type: string;
  programs: string[];
  image: string;
  rating: number;
}

const mockSchools: School[] = [
  {
    id: '1',
    name: 'University of the Philippines',
    location: 'Diliman, Quezon City',
    type: 'Public University',
    programs: ['Engineering', 'Science', 'Arts', 'Business'],
    image: '/images/logos.png',
    rating: 4.8
  },
  {
    id: '2',
    name: 'De La Salle University',
    location: 'Manila',
    type: 'Private University',
    programs: ['Business', 'Engineering', 'Education', 'Science'],
    image: '/images/logos.png',
    rating: 4.7
  }
];

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
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Perfect School
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

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search schools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md bg-white text-gray-900 placeholder-gray-500"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          >
            <option value="" className="text-gray-900">All Types</option>
            <option value="Public University" className="text-gray-900">Public University</option>
            <option value="Private University" className="text-gray-900">Private University</option>
          </select>
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          >
            <option value="" className="text-gray-900">All Programs</option>
            <option value="Engineering" className="text-gray-900">Engineering</option>
            <option value="Business" className="text-gray-900">Business</option>
            <option value="Science" className="text-gray-900">Science</option>
            <option value="Arts" className="text-gray-900">Arts</option>
            <option value="Education" className="text-gray-900">Education</option>
          </select>
        </div>

        <motion.div 
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredSchools.map((school) => (
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
          ))}
        </motion.div>
      </div>
    </div>
  );
} 