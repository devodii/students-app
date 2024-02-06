import * as React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/index"));
const SignInPage = React.lazy(() => import("./pages/auth/sign-in"));
const SignUpPage = React.lazy(() => import("./pages/auth/sign-up"));
const DashboardPage = React.lazy(() => import("./pages/dashboard"));
const DomainPage = React.lazy(() => import("./pages/domain"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />

          <Route path="dashboard" element={<DashboardPage />} />
          <Route path=":domain" element={<DomainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
