import * as React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Loader } from "./components/loader";
import { Provider } from "./providers/store";

const HomePage = React.lazy(() => import("./pages/index"));
const SignInPage = React.lazy(() => import("./pages/auth/sign-in"));
const SignUpPage = React.lazy(() => import("./pages/auth/sign-up"));
const DashboardPage = React.lazy(() => import("./pages/dashboard"));

const CoursePage = React.lazy(() => import("./pages/course"));
const ListCoursesPage = React.lazy(() => import("./pages/list-courses"));
const CreateCoursePage = React.lazy(() => import("./pages/create-course"));
const MyCoursesPage = React.lazy(() => import("./pages/my-courses"));

const FourOhFour = React.lazy(() => import("./pages/four-oh-four"));

export default function App() {
  return (
    <BrowserRouter>
      <Provider>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<HomePage />} />
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="sign-up" element={<SignUpPage />} />

              <Route path="dashboard">
                <Route index element={<DashboardPage />} />
                <Route path="new" element={<CreateCoursePage />} />
                <Route path="my-courses" element={<MyCoursesPage />} />
              </Route>
              <Route path="courses">
                <Route index element={<ListCoursesPage />} />
                <Route path=":id" element={<CoursePage />} />
              </Route>
            </Route>

            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  );
}
