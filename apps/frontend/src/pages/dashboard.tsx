import { useSearchParams } from "react-router-dom";
import { Wrapper } from "../components/wrapper";
import AnalyticsPage from "./analytics";
import { CreateProject } from "../components/create-project";

export default function DashboardPage() {
  const [searchParams] = useSearchParams();

  const shouldRenderAnalytics = searchParams.get("analytics");

  if (shouldRenderAnalytics) return <AnalyticsPage />;

  return (
    <Wrapper>
      <CreateProject />
    </Wrapper>
  );
}
