import { SetMetadata } from "@nestjs/common";
import { UserRoleEnum } from "@betastudents/enums";

const KEY = "roles";
const Roles = (...roles: UserRoleEnum[]) => SetMetadata(KEY, roles);

export { KEY, Roles };
