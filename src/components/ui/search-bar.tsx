'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  defaultValue?: string;
}

export function SearchBar({
  placeholder = "Search for scholarships, universities, or courses...",
  className = "",
  autoFocus = false,
  defaultValue = "",
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(defaultValue || searchParams.get('search') || '');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTyping]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedSearch = searchTerm.trim();
    
    if (trimmedSearch) {
      setIsTyping(false);
      router.push(`/scholarships?search=${encodeURIComponent(trimmedSearch)}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsTyping(true);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="flex items-center bg-white rounded-lg shadow-md border border-gray-200">
        <input
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full px-6 py-4 text-gray-700 bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
        />
        <button 
          type="submit"
          disabled={!searchTerm.trim()}
          className={`select-none px-6 py-3 m-1 text-sm font-semibold text-white rounded-md transition-all flex items-center gap-2 ${
            searchTerm.trim() 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Search
          <svg 
            className={`w-4 h-4 transition-transform select-none ${isTyping ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </button>
      </div>
    </form>
  );
} 