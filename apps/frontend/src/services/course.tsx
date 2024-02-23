import axios from "axios";

async function fetchAllCourse() {
  const { data } = await axios.get("/api/courses");
  console.log({ data });
  return data;
}

export { fetchAllCourse };
