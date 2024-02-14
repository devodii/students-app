import * as React from "react";
import { Course, FormEvent } from "@students-app/types";

import supabase from "../lib/supabase";
import { generateCourseId } from "../lib/generate-course-id";

import { Button, Input, Label, Textarea } from "./ui";
import { ShareCourseModal } from "./share-course";

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: any = {
  nameWithCode: "",
  time: "",
  instructor: "",
  venue: "",

  status: {
    isCreating: false,
    created: false,
  },
};

function reducer(state: typeof initialState, action: ActionType) {
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

    default:
      throw new Error("unknown action!");
  }
}

async function handleCreate(props: Course) {
  const { error } = await supabase.from("courses").insert({ ...props });

  if (error) {
    // todo: emit a toast.
    console.log("an error occured: ", error);
    return false;
  } else {
    return true;
  }
}

const key = generateCourseId();

export function CreateCourse() {
  const [
    {
      venue,
      time,
      instructor,
      nameWithCode,
      status: { created, isCreating },
    },
    dispatch,
  ] = React.useReducer(reducer, initialState);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nameWithCode || !venue || !time || !instructor) return;

    dispatch({ type: "course.creating" });

    const create = await handleCreate({
      id: key,
      instructor,
      nameWithCode,
      time,
      venue,
    });

    if (create) {
      dispatch({ type: "course.created" });
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-6 w-full mx-auto max-w-4xl"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="course-name">Course Name:</Label>
        <Input
          id="course-name"
          required
          value={nameWithCode}
          onChange={e =>
            dispatch({ type: "course.update-name", payload: e.target.value })
          }
        />

        <Label htmlFor="date">Date:</Label>
        <Input
          id="date"
          required
          type="date"
          value={time}
          onChange={e =>
            dispatch({ type: "course.update-time", payload: e.target.value })
          }
        />

        <Label htmlFor="instructor">Instructor:</Label>
        <Input
          id="instructor"
          value={instructor}
          onChange={e =>
            dispatch({
              type: "course.update-instructor",
              payload: e.target.value,
            })
          }
        />

        <Label htmlFor="venue">Venue:</Label>
        <Textarea
          id="venue"
          rows={10}
          value={venue}
          onChange={e =>
            dispatch({
              type: "course.update-venue",
              payload: e.target.value,
            })
          }
        />

        <Button
          type="submit"
          aria-disabled={isCreating}
          className="w-full max-w-sm mx-auto text-white text-lg font-semibold rounded-lg py-2"
        >
          Create
        </Button>
      </form>

      {created && (
        <ShareCourseModal url={`${import.meta.env.VITE_URL}/courses/${key}`} />
      )}
    </>
  );
}
