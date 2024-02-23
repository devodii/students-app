import { Link } from "react-router-dom";
import { Wrapper } from "../components/wrapper";
import { useUser } from "../hooks/use-user";
import { UserRoleEnum } from "@students-app/enums";

export default function DashboardPage() {
  const { data: user, isLoading, isError } = useUser();

  if (isLoading) {
    return <Wrapper>Loading user...</Wrapper>;
  }

  if (isError) {
    return <Wrapper>User not found</Wrapper>;
  }

  const isCourseRep = user?.role === UserRoleEnum.COURSE_REP;

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Welcome, {user.email}</h2>
        {isCourseRep ? (
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
        ) : (
          <div>Please hold on, the students dashboard isnt ready yet!</div>
        )}
      </div>
    </Wrapper>
  );
}
