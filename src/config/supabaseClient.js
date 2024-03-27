import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xfchfmbdnhzqzjoodrbo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmY2hmbWJkbmh6cXpqb29kcmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNTk4MjQsImV4cCI6MjAxODYzNTgyNH0.eZXfoqU9iBN0wDdQLHrFvxrWlCwzeguOZFpN5gtcPVk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;