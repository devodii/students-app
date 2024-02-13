import { Link } from "react-router-dom";
import { Wrapper } from "../components/wrapper";
import { useCourses } from "../queries/use-courses";
import { CourseCard } from "../components/course-card";

export default function CoursesPage() {
  const { data: courses, isLoading } = useCourses();

  if (isLoading) {
    return <Wrapper>Loading courses...</Wrapper>;
  }

  return (
    <Wrapper>
      {courses?.map(course => (
        <Link to={course.id}>
          <CourseCard {...course} />
        </Link>
      ))}
    </Wrapper>
  );
}
