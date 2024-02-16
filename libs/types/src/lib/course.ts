// eslint-disable-next-line @nx/enforce-module-boundaries
import { Course as CourseSchema } from "../../../../apps/backend/src/courses/entities/courses.entity";

export type Course = {
  [K in keyof InstanceType<typeof CourseSchema>]: InstanceType<
    typeof CourseSchema
  >[K];
};
