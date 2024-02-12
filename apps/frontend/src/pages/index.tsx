import { Link } from "react-router-dom";
import { Wrapper } from "../components/wrapper";

export default function App() {
  return (
    <Wrapper>
      <h2 className="text-black font-semibold text-4xl mb-4">Students App</h2>

      <ul className="grid grid-cols-1 gap-4">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/sign-in">SignIn</Link>
        </li>
        <li>
          <Link to="/sign-up">SignUp</Link>
        </li>
        <li>
          <Link to="/courses/:reytyr">course</Link>
        </li>
      </ul>
    </Wrapper>
  );
}
