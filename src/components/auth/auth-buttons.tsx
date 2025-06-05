'use client';

import Link from 'next/link';

interface AuthButtonsProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function AuthButtons({ isMobile = false, onItemClick }: AuthButtonsProps) {
  const preventDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const buttonStyle = {
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  } as React.CSSProperties;

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-3 pt-2 border-t border-gray-200/50">
        <Link
          href="/sign-in"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center select-none"
          onClick={onItemClick}
          onDragStart={preventDrag}
          draggable="false"
          style={buttonStyle}
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center select-none"
          onClick={onItemClick}
          onDragStart={preventDrag}
          draggable="false"
          style={buttonStyle}
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/sign-in"
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors select-none"
        onDragStart={preventDrag}
        draggable="false"
        style={buttonStyle}
      >
        Sign In
      </Link>
      <Link
        href="/sign-up"
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors select-none"
        onDragStart={preventDrag}
        draggable="false"
        style={buttonStyle}
      >
        Sign Up
      </Link>
    </div>
  );
} 