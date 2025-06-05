'use client';

import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Schools', href: '/schools' },
  { name: 'Scholarships', href: '/scholarships' },
];

interface NavLinksProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function NavLinks({ isMobile = false, onItemClick }: NavLinksProps) {
  const preventDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-gray-600 hover:text-blue-600 transition-colors select-none ${
            isMobile ? 'text-lg py-2' : ''
          }`}
          onClick={onItemClick}
          onDragStart={preventDrag}
          draggable="false"
          style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
} 