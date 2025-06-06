import { authMiddleware } from './middleware/auth';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return authMiddleware(request);
}

export const config = {
  matcher: '/admin/:path*',
}; 