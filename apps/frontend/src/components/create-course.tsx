/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { Course, FormEvent } from "@students-app/types";
import { generateCourseId } from "../lib/generate-course-id";
import { useCourses } from "../contexts/courses-context";
import { ShareCourseModal } from "./share-course";
import { Button, Input, Label, Textarea } from "./ui";

async function handleCreate(props: Omit<Course, "id">) {
  const { data } = await axios.post("/api/courses", { ...props });
  return data;
}

const key = generateCourseId();

export function CreateCourse() {
  const {
    time,
    venue,
    dispatch,
    instructor,
    nameWithCode,
    status: { created, isCreating },
  } = useCourses();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nameWithCode || !venue || !time || !instructor) return;

    dispatch({ type: "course.creating" });

    const data = await handleCreate({
      key,
      instructor,
      nameWithCode,
      time: time as any,
      venue,
    });

    if (data?.id) {
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
