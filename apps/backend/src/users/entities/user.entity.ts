import { UserRoleEnum } from "@students-app/enums";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "../../courses/entities/courses.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: UserRoleEnum.STUDENT, type: "enum", enum: UserRoleEnum })
  role: UserRoleEnum;

  @OneToMany(() => Course, course => course.creator)
  courses: Course[];
}
