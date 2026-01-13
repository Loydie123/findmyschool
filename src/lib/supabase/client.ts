import { createBrowserClient } from '@supabase/ssr';
import { type Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side Supabase client using @supabase/ssr
export function createClient() {
  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}

// Legacy export for backward compatibility
export const supabase = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey); 
