import { Course } from "@students-app/types";
import { useQuery } from "@tanstack/react-query";
import { Back } from "../components/back";
import { CourseCard } from "../components/course-card";
import { Wrapper } from "../components/wrapper";
import { fetchAllCourse } from "../services/course";

export default function MyCoursesPage() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchAllCourse,
  });

  if (isLoading) {
    return <Wrapper>Loading courses...</Wrapper>;
  }

  return (
    <Wrapper>
      <Back />
      <h2 className="font-semibold text-4xl text-center mb-6">
        The courses you posted
      </h2>

      {courses.length > 0 ? (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses?.map((course: Course) => (
            <CourseCard {...course} />
          ))}
        </div>
      ) : (
        <span>When you post any course, they'd show up here</span>
      )}
    </Wrapper>
  );
}
