import axiosInstance from "./axios-instance";

async function fetchAllCourse() {
  const { data } = await axiosInstance.get("/api/courses");
  return data;
}

export { fetchAllCourse };
