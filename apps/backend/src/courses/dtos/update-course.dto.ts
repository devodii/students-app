import { IsOptional, IsString } from "class-validator";
import { Course } from "../entities/courses.entity";

export class UpdateCourseDto implements Partial<Course> {
  @IsString()
  @IsOptional()
  nameWithCode?: string;

  @IsString()
  @IsOptional()
  time?: Date;

  @IsString()
  @IsOptional()
  venue?: string;

  @IsString()
  @IsOptional()
  instructor?: string;
}
