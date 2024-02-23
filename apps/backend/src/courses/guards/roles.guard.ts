import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRoleEnum } from "@students-app/enums";
import { KEY as UserRoleKey } from "../../users/decorators/roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  private logger = new Logger(RolesGuard.name);

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<UserRoleEnum[]>(
      UserRoleKey,
      context.getHandler()
    );

    if (!requiredRoles) {
      return true; // no role
    }

    const { user } = context.switchToHttp().getRequest();
    if (!user || !user.role || !requiredRoles.includes(user.role)) {
      this.logger.error("unauthorized to perform action!");
      return false;
    }

    this.logger.verbose("authorized!");
    return true;
  }
}
