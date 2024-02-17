import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CoursesService, type ID } from "./courses.service";
import { CreateCourseDto, UpdateCourseDto } from "./dtos";

@Controller("courses")
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAllCourses() {
    return await this.coursesService.findAll();
  }

  @Get(":key")
  async findOneCourse(@Param("key") key: string) {
    return await this.coursesService.find(key);
  }

  @Post()
  async createCourse(@Body() dto: CreateCourseDto) {
    return await this.coursesService.create(dto);
  }

  @Patch(":id")
  async updateCourse(
    @Param("id", ParseIntPipe) id: ID,
    @Body() dto: UpdateCourseDto
  ) {
    return await this.coursesService.update(id, dto);
  }

  @Delete(":id")
  async removeCourse(@Param("id", ParseIntPipe) id: ID) {
    return await this.coursesService.delete(id);
  }
}