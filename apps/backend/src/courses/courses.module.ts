import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoursesService } from "./courses.service";
import { Course } from "./entities/courses.entity";
import { CoursesController } from "./courses.controller";
import { RolesGuard } from "./guards/roles.guard";

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CoursesService, RolesGuard],
  controllers: [CoursesController],
})
export class CoursesModule {}
