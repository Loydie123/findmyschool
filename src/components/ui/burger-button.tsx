'use client';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function BurgerButton({ isOpen, onClick, className = '' }: BurgerButtonProps) {
  return (
    <button
      className={`md:hidden relative p-3 rounded-full hover:bg-gray-100/50 transition-colors group ${className}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-5 flex items-center justify-center">
        <span className={`absolute w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'rotate-45 bg-blue-600' 
            : '-translate-y-1.5'
        }`} />
        <span className={`absolute w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-0 translate-x-2 bg-blue-600' 
            : 'opacity-100'
        }`} />
        <span className={`absolute w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? '-rotate-45 bg-blue-600' 
            : 'translate-y-1.5'
        }`} />
      </div>
    </button>
  );
} 