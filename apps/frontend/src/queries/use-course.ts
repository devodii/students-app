import { useQuery } from "@tanstack/react-query";
import supabase from "../lib/supabase";

async function fetchCourse(id: string) {
  const { data } = await supabase.from("courses").select("*").eq("id", id);

  const response = data?.[0];

  if (response === undefined) {
    throw new Error("course not found");
  }

  return response;
}

function useCourse(id: string) {
  return useQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourse(id),
    retry: 2,
  });
}

export { fetchCourse, useCourse };
