import { Link } from "react-router-dom";
import { Wrapper } from "../components/wrapper";

export default function DashboardPage() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Welcome, David</h2>
        <Link to="new" className="underline underline-offset-2">
          Create a Link
        </Link>
      </div>
    </Wrapper>
  );
}
