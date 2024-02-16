import axios from "axios";

async function fetchAllCourse() {
  const { data } = await axios.get("/api/courses");
  return data;
}

export { fetchAllCourse };
