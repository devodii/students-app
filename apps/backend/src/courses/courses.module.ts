import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoursesService } from "./courses.service";
import { Course } from "./entities/courses.entity";
import { CoursesController } from "./courses.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
