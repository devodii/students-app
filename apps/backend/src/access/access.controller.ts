import { Body, Controller, Get, Logger, Post, Session } from "@nestjs/common";
import { AccessService } from "./access.service";
import { SignInDto } from "./dto";

@Controller("auth")
export class AccessController {
  constructor(private accessService: AccessService) {}

  private logger = new Logger(AccessController.name);

  @Get("whoAmI")
  whoAmI(@Session() session: Record<string, any>) {
    return session.user ? session.user?.email : null;
  }

  @Post("signin")
  signIn(@Body() dto: SignInDto, @Session() session: Record<string, any>) {
    const user = this.accessService.signIn(dto);

    if (user.status) {
      session.user = user?.content;
    }

    return user;
  }
}
