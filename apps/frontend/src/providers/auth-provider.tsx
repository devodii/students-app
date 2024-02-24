import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axios-instance";

export function AuthProvider({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    async function fetchWhoAmI() {
      // expects an email
      const { data } = await axiosInstance.get("/api/auth/whoAmI");

      if (!data && pathname.includes("/dashboard")) {
        navigate("/sign-in");
      }

      if (data && pathname.includes("/sign-in")) {
        navigate("/dashboard");
      }
    }

    fetchWhoAmI();
  }, [pathname, navigate]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
