import { Link } from "react-router-dom";

export function Header() {
  return <header className="w-full flex flex-wrap justify-between items-center">
    <h3 className="text-xl font-medium">Students App</h3>

   <nav>
    <ul className="flex space-x-2">
      <li>
        <Link to={"/sign-in"} className="underline underline-offset-2">sign in</Link>
      </li>
      <li>
        <Link to={"/courses"} className="underline underline-offset-2">courses</Link>
      </li>
    </ul>
   </nav>
  </header>;
}
