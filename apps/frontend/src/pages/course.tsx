import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Back } from "../components/back";
import { Wrapper } from "../components/wrapper";
import { fetchCourse } from "../services/course";

export default function CoursePage() {
  const { key } = useParams();

  const {
    isLoading,
    data: course,
    isError,
  } = useQuery({
    queryKey: ["courses", key],
    queryFn: () => fetchCourse(key!),
  });

  if (isLoading) {
    return <Wrapper>Loading course info...</Wrapper>;
  }

  if (isError) {
    return <Wrapper>Course doesn't exist.</Wrapper>;
  }

  return (
    <Wrapper>
      <Back />
      <div className="flex flex-col gap-2 mt-8">
        <h3 className="text-3xl font-semibold">Name: {course.nameWithCode}</h3>
        <span>Instructor: {course.instructor}</span>
        <span>Date: {course.time}</span>
        <span>Venue: {course.venue}</span>
      </div>
    </Wrapper>
  );
}
