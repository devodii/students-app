import { useQuery } from "@tanstack/react-query";
import supabase from "../lib/supabase";

async function fetchCourses() {
  const { data } = await supabase.from("courses").select("*");

  return data;
}

export function useCourses() {
  return useQuery({ queryKey: ["courses"], queryFn: fetchCourses });
}
