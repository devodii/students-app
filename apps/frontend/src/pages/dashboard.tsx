import { useSearchParams } from "react-router-dom";
import { Wrapper } from "../components/wrapper";
import AnalyticsPage from "./analytics";

export default function DashboardPage() {
  const [searchParams] = useSearchParams();

  const shouldRenderAnalytics = searchParams.get("analytics");

  if (shouldRenderAnalytics) return <AnalyticsPage />;

  return <Wrapper>Dashboard!</Wrapper>;
}
