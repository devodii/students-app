import axiosInstance from "./axios-instance";

async function fetchAllCourse() {
  const { data } = await axiosInstance.get("/api/courses");
  console.log({ data });
  return data;
}

export { fetchAllCourse };
