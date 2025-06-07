'use client';

interface SearchFiltersProps {
  searchTerm: string;
  selectedType: string;
  selectedProgram: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onProgramChange: (value: string) => void;
}

export function SearchFilters({
  searchTerm,
  selectedType,
  selectedProgram,
  onSearchChange,
  onTypeChange,
  onProgramChange
}: SearchFiltersProps) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="text"
        placeholder="Search schools..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md bg-white text-gray-900 placeholder-gray-500"
      />
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
      >
        <option value="" className="text-gray-900">All Types</option>
        <option value="Public University" className="text-gray-900">Public University</option>
        <option value="Private University" className="text-gray-900">Private University</option>
      </select>
      <select
        value={selectedProgram}
        onChange={(e) => onProgramChange(e.target.value)}
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
  );
} 