import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { CoursesService, type ID } from "./courses.service";
import { CreateCourseDto, UpdateCourseDto } from "./dtos";
import { Roles } from "../users/decorators/roles.decorator";
import { UserRoleEnum } from "@betastudents/enums";
import { RolesGuard } from "./guards/roles.guard";

@Controller("courses")
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  private logger = new Logger(CoursesController.name);

  @Get()
  async findAllCourses() {
    return await this.coursesService.findAll();
  }

  @Get(":key")
  async findOneCourse(@Param("key") key: string) {
    this.logger.log("getting course by key");
    return await this.coursesService.find(key);
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRoleEnum.COURSE_REP)
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
