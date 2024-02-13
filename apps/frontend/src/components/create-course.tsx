import * as React from "react";
import { Course, FormEvent } from "@students-app/types";

import supabase from "../lib/supabase";
import { generateCourseId } from "../lib/generate-course-id";

const initialState = {
  nameWithCode: "",
  time: "",
  instructor: "",
  venue: "",
};

function reducer(state: typeof initialState, action: any) {
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

    default:
      throw new Error("unknown action!");
  }
}

async function handleCreate(props: Course) {
  const { error } = await supabase.from("courses").insert({ ...props });

  if (error) {
    console.log("an error occured: ", error);
  }
}

export function CreateCourse() {
  const [{ venue, time, instructor, nameWithCode }, dispatch] =
    React.useReducer(reducer, initialState);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nameWithCode || !venue || !time || !instructor) return;

    await handleCreate({
      id: generateCourseId(),
      instructor,
      nameWithCode,
      time,
      venue,
    });
  }

  return (
    <form
      className="flex flex-col gap-6 w-full mx-auto max-w-4xl"
      onSubmit={handleSubmit}
    >
      <label className="flex items-center gap-2">
        <span className="min-w-max break-words">Course Name:</span>
        <input
          className="rounded-md w-full border px-6 py-2"
          value={nameWithCode}
          onChange={e =>
            dispatch({ type: "course.update-name", payload: e.target.value })
          }
        />
      </label>

      <label className="flex items-start gap-2">
        <span className="min-w-max break-words">Date:</span>

        <input
          type="date"
          className="rounded-md w-full border px-6 py-2"
          value={time}
          onChange={e =>
            dispatch({ type: "course.update-time", payload: e.target.value })
          }
        />
      </label>

      <label className="flex items-start gap-2">
        <span className="min-w-max break-words">Instructor:</span>

        <input
          className="rounded-md w-full border px-6 py-2"
          value={instructor}
          onChange={e =>
            dispatch({
              type: "course.update-instructor",
              payload: e.target.value,
            })
          }
        />
      </label>

      <label className="flex items-start gap-2">
        <span className="min-w-max break-words">Venue:</span>

        <textarea
          rows={10}
          className="rounded-md w-full border px-6 py-2"
          value={venue}
          onChange={e =>
            dispatch({
              type: "course.update-venue",
              payload: e.target.value,
            })
          }
        />
      </label>

      <button
        type="submit"
        className="w-full max-w-sm mx-auto bg-blue-500 text-white text-lg font-semibold rounded-lg py-2"
      >
        Create
      </button>
    </form>
  );
}
