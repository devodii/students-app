import { Course } from "@betastudents/types";

export function CourseCard({
  instructor,
  nameWithCode,
  venue,
}: Partial<Course>) {
  return (
    <div className="w-full border rounded-md py-4 px-8 flex flex-col gap-2">
      <h4 className="text-3xl font-semibold">{nameWithCode}</h4>
      <span className="text-xl opacity-95">{instructor}</span>
      <span className="text-xl opacity-95">{venue}</span>
    </div>
  );
}
