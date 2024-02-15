import { Controller, Get } from "@nestjs/common";

@Controller("courses")
export class CoursesController {
  @Get()
  greet(): string {
    return "courses";
  }
}
