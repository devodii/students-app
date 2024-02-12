import * as React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Loader } from "./components/loader";

const HomePage = React.lazy(() => import("./pages/index"));
const SignInPage = React.lazy(() => import("./pages/auth/sign-in"));
const SignUpPage = React.lazy(() => import("./pages/auth/sign-up"));
const DashboardPage = React.lazy(() => import("./pages/dashboard"));
const CoursePage = React.lazy(() => import("./pages/course"));
const CoursesPage = React.lazy(() => import("./pages/courses"));
 

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />

            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="courses">
              <Route index element={<CoursesPage />}/>
              <Route path=":id" element={<CoursePage />} />
            </Route>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
