import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./entities/courses.entity";
import { Repository } from "typeorm";

export type ID = Course["id"];
@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private repo: Repository<Course>) {}

  async create(dto: Partial<Course>) {
    const course = this.repo.create(dto);
    return await this.repo.save(course);
  }

  async find(key: string) {
    const course = await this.repo.findOne({ where: { key } });

    if (!course.id) {
      throw new Error("course not found");
    }

    return course;
  }

  async findAll() {
    return await this.repo.find();
  }

  async update(id: ID, attrs: Partial<Course>) {
    return await this.repo.update(id, attrs);
  }

  async delete(id: ID) {
    const course = await this.repo.find({ where: { id } });
    return await this.repo.remove(course);
  }
}
