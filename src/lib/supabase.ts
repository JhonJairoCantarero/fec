import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wsyzglahgrbfdvrsriah.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzeXpnbGFoZ3JiZmR2cnNyaWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNTM0MzYsImV4cCI6MjA2NjgyOTQzNn0.zoxd3Z87C8nyU5H0fp0AJyO4Klp9uf_KmkvJAtOMAhY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

