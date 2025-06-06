import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req: request, res });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      if (request.nextUrl.pathname.startsWith('/admin') && 
          !request.nextUrl.pathname.startsWith('/admin/login')) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }

    if (session && request.nextUrl.pathname.startsWith('/admin/login')) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    return res;
  } catch (error) {
    if (request.nextUrl.pathname.startsWith('/admin') && 
        !request.nextUrl.pathname.startsWith('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/admin/:path*'
  ]
}; 