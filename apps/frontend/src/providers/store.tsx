import * as React from "react";
import { ReactQueryProvider } from "./react-query";
import { CourseProvider } from "../contexts/courses-context";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <CourseProvider>{children}</CourseProvider>
    </ReactQueryProvider>
  );
};
