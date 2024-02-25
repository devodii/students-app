import axiosInstance from "./axios-instance";

async function fetchAllCourses() {
  const { data } = await axiosInstance.get("/api/courses");
  return data;
}

async function fetchCourse(key: string) {
  const { data } = await axiosInstance.get(`/api/courses/${key}`);
  return data;
}

export { fetchAllCourses, fetchCourse };
