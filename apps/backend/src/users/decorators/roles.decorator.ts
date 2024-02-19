import { SetMetadata } from "@nestjs/common";
import { UserRoleEnum } from "../enums/role.enum";

const KEY = "roles";
const Roles = (...roles: UserRoleEnum[]) => SetMetadata(KEY, roles);

export { KEY, Roles };
