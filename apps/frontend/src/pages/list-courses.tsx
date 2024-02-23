import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { CourseCard } from "../components/course-card";
import { Wrapper } from "../components/wrapper";

import { Course } from "@students-app/types";
import { fetchAllCourse } from "../services/course";

export default function CoursesPage() {
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchAllCourse,
  });

  if (isLoading) {
    return <Wrapper>Loading courses...</Wrapper>;
  }

  if (isError) {
    return <Wrapper>An error occured while fetching courses</Wrapper>;
  }
  return (
    <Wrapper>
      <h2 className="font-semibold text-4xl text-center mb-6">
        Explore Today's courses
      </h2>

      {courses.length > 0 ? (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses?.map((course: Course) => (
            <Link to={course.key} key={course.id}>
              <CourseCard {...course} />
            </Link>
          ))}
        </div>
      ) : (
        <span>There are no courses today, go enjoy!</span>
      )}
    </Wrapper>
  );
}
