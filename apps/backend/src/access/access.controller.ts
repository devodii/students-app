import { Body, Controller, Get, Logger, Post, Session } from "@nestjs/common";
import { AccessService } from "./access.service";
import { SignInDto, SignUpDto } from "./dto";
import { Serialize } from "../users/interceptors/serialize.interceptor";
import { UserDto } from "../users/dtos/user.dto";

@Controller("auth")
@Serialize(UserDto)
export class AccessController {
  constructor(private accessService: AccessService) {}

  private logger = new Logger(AccessController.name);

  @Get("whoAmI")
  whoAmI(@Session() session: Record<string, any>) {
    this.logger.log("getting current user");
    return session.user ? session.user : null;
  }

  @Post("signin")
  async signIn(
    @Body() dto: SignInDto,
    @Session() session: Record<string, unknown>
  ) {
    this.logger.log("attempt to sign in");
    const user = await this.accessService.signIn(dto);

    if (user.status) {
      session.user = user?.content;
    }

    return user;
  }

  @Post("signup")
  async signUp(
    @Body() dto: SignUpDto,
    @Session() session: Record<string, unknown>
  ) {
    this.logger.log("attempt to sign up");
    const user = await this.accessService.signUp(dto);

    if (user.status) {
      session.user = user?.content;
    }

    return user;
  }
}
