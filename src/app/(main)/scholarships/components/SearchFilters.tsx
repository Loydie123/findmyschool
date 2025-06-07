'use client';

interface SearchFiltersProps {
  searchTerm: string;
  selectedType: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

export function SearchFilters({
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange
}: SearchFiltersProps) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="text"
        placeholder="Search scholarships..."
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
        <option value="Merit-based" className="text-gray-900">Merit-based</option>
        <option value="Need-based" className="text-gray-900">Need-based</option>
        <option value="Sports" className="text-gray-900">Sports</option>
        <option value="Arts" className="text-gray-900">Arts</option>
        <option value="Research" className="text-gray-900">Research</option>
      </select>
    </div>
  );
} 