import * as React from "react";
import { ReactQueryProvider } from "./react-query";
import { CourseProvider } from "../contexts/courses-context";
import { AuthProvider } from "./auth-provider";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <CourseProvider>{children}</CourseProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
};
