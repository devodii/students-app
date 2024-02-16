import { IsNotEmpty, IsString } from "class-validator";
import { Course } from "../entities/courses.entity";

export class CreateCourseDto implements Partial<Course> {
  @IsString()
  key?: string;

  @IsString()
  @IsNotEmpty()
  nameWithCode?: string;

  @IsString()
  @IsNotEmpty()
  time?: Date;

  @IsString()
  @IsNotEmpty()
  venue?: string;

  @IsString()
  @IsNotEmpty()
  instructor?: string;
}
