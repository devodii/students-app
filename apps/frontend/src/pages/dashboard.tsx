import { CreateProject } from "../components/create-course";
import { Wrapper } from "../components/wrapper";

export default function DashboardPage() {
  return (
    <Wrapper>
      <h2 className="text-3xl font-semibold">Welcome, David</h2>
      <CreateProject />
    </Wrapper>
  );
}
