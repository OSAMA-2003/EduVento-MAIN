import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // This error will be thrown during the build process if the environment variables are not set
  throw new Error('Supabase URL and/or Anon Key are not defined. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);