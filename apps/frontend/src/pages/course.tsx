import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Back } from "../components/back";
import { Wrapper } from "../components/wrapper";
import axiosInstance from "../services/axios-instance";

export default function CoursePage() {
  const { id } = useParams();

  const {
    isLoading,
    data: course,
    isError,
  } = useQuery({
    queryKey: ["courses", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/api/courses/${id}`);
      return data;
    },
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
