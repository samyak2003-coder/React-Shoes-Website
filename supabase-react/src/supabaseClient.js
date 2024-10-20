import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://knzdrifzayfunvatxsrc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuemRyaWZ6YXlmdW52YXR4c3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MTMzNzcsImV4cCI6MjA0NDk4OTM3N30.4GvBuPk57NzJwYGAFYb5Fj0OE-3RdZyedDW_L1IE8N0"

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
