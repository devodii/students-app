/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";

type CourseContextType = typeof initialState & {
  dispatch: React.Dispatch<ActionType<ICases, any>>;
};

// @ts-expect-error
const CoursesContext = React.createContext<CourseContextType>();

type ICases =
  | "course.update-name"
  | "course.update-time"
  | "course.update-instructor"
  | "course.update-venue"
  | "course.creating"
  | "course.created"
  | "reset";

type ActionType<T = string, P = any> = {
  type: T;
  payload?: P;
};

const initialState = {
  nameWithCode: "",
  time: "",
  instructor: "",
  venue: "",

  status: {
    isCreating: false,
    created: false,
  },
};

function reducer(state: typeof initialState, action: ActionType<ICases>) {
  const { type, payload } = action;

  switch (type) {
    case "course.update-name":
      return { ...state, nameWithCode: payload };

    case "course.update-time":
      return { ...state, time: payload };

    case "course.update-instructor":
      return { ...state, instructor: payload };

    case "course.update-venue":
      return { ...state, venue: payload };

    case "course.creating":
      return { ...state, status: { isCreating: true } };

    case "course.created":
      return { ...state, status: { created: true, isCreating: false } };

    case "reset":
      return initialState;

    default:
      throw new Error("unknown action!");
  }
}

const CourseProvider = ({ children }: React.PropsWithChildren) => {
  // @ts-ignore
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <CoursesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CoursesContext.Provider>
  );
};

const useCourses = () => {
  const context = React.useContext(CoursesContext);

  if (context === undefined) {
    throw new Error("courses context must be used within its provider");
  }
  return context;
};

export { CourseProvider, useCourses };
