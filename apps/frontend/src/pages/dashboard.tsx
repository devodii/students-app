import { Link } from "react-router-dom";
import { Wrapper } from "../components/wrapper";
import { useUser } from "../hooks/use-user";

export default function DashboardPage() {
  const { data: user, isLoading, isError } = useUser();

  if (isLoading) {
    return <Wrapper>Loading user...</Wrapper>;
  }

  if (isError) {
    return <Wrapper>User not found :(</Wrapper>;
  }

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Welcome, {user}</h2>
        <div className="flex items-center gap-4">
          <Link to="new" className="max-w-max underline underline-offset-2">
            Post a course
          </Link>
          <Link
            to="my-courses"
            className="max-w-max underline underline-offset-2"
          >
            View courses you posted
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
