import { createClient } from "@supabase/supabase-js";

const url = "https://gettcwogbfbvxulprltq.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdldHRjd29nYmZidnh1bHBybHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3ODE1MjAsImV4cCI6MjAyMzM1NzUyMH0.I70dhh81Zk9g1iS4N7OiDy3xs9OmbOy_x2_2mz8jGFw";

export default createClient(url, anonKey);
