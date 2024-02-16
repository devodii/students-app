import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { CourseCard } from "../components/course-card";
import { Wrapper } from "../components/wrapper";
import { Course } from "@students-app/types";

export default function CoursesPage() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data } = await axios.get("/api/courses");
      return data;
    },
  });

  if (isLoading) {
    return <Wrapper>Loading courses...</Wrapper>;
  }

  return (
    <Wrapper>
      {courses?.map((course: Course) => (
        <Link to={course.key} key={course.id}>
          <CourseCard {...course} />
        </Link>
      ))}
    </Wrapper>
  );
}
