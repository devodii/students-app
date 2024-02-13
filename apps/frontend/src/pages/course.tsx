import { useParams } from "react-router-dom";
import { Wrapper } from "../components/wrapper";
import { useCourse } from "../queries/use-course";
import { Back } from "../components/back";

export default function CoursePage() {
  const { id } = useParams();

  const { isLoading, data: course, isError } = useCourse(id as string);

  if (isLoading) {
    return <Wrapper>Loading course info...</Wrapper>;
  }

  if (isError) {
    return <Wrapper>Course doesn't exist.</Wrapper>;
  }

  return (
    <Wrapper>
      <Back />
      <h3 className="text-3xl font-semibold">{course.nameWithCode}</h3>
      <span>Instructor: {course.instructor}</span>
      <span>Date: {course.time}</span>
      <span>Venue: {course.venue}</span>
    </Wrapper>
  );
}
