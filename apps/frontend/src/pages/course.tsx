import { useParams } from "react-router-dom";
import { Wrapper } from "../components/wrapper";

export default function CoursePage() {
  const { id } = useParams();
  return <Wrapper>Courses page! {id}</Wrapper>;
}
