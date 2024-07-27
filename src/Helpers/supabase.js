import { createClient } from "@supabase/supabase-js";

const supabseUrl = "https://pugtkcrcwojywxxsrjbd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1Z3RrY3Jjd29qeXd4eHNyamJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwOTE0MDcsImV4cCI6MjAzNzY2NzQwN30.ByokZwyCgXPAUixDxKr3QfhNvBGiILG25LIxLSWtIbI"
export const supabase = createClient(supabseUrl,supabaseKey)
