import { Exclude, Expose } from "class-transformer";
import { User } from "../entities/user.entity";
import { UserRoleEnum } from "../enums/role.enum";
import { Course } from "../../courses/entities/courses.entity";

export class UserDto implements Partial<User> {
  @Expose()
  email: string;

  @Expose()
  role: UserRoleEnum;

  @Expose()
  courses?: Course[];

  @Expose()
  id: number;

  @Exclude()
  password: string;
}
