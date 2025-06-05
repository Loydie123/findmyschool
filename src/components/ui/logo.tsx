'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  const preventDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <Link 
      href="/" 
      className="flex items-center space-x-2 select-none"
      onDragStart={preventDrag}
      draggable="false"
      style={{ 
        WebkitTouchCallout: 'none', 
        WebkitUserSelect: 'none',
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      <Image
        src="/images/logos.png"
        alt="FindMySchool"
        width={60}
        height={60}
        className="w-25 h-25 pointer-events-none"
        draggable="false"
        style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
      />
    </Link>
  );
} 