import { Link } from "react-router-dom";
import { useUser } from "../hooks/use-user";

export function Header() {
  const { data: user } = useUser();

  return (
    <header className="w-full flex flex-wrap justify-between items-center">
      <h3 className="text-xl font-medium">Students App</h3>

      <nav>
        <ul className="flex gap-2">
          <li>
            {user?.id ? (
              <Link to={"/dashboard"} className="underline underline-offset-2">
                Go to dashboard
              </Link>
            ) : (
              <Link to={"/sign-in"} className="underline underline-offset-2">
                sign in
              </Link>
            )}
          </li>
          <li>
            <Link to={"/courses"} className="underline underline-offset-2">
              courses
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
