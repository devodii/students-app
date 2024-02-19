import { Body, Controller, Get, Logger, Post, Session } from "@nestjs/common";
import { AccessService } from "./access.service";
import { SignInDto, SignUpDto } from "./dto";

@Controller("auth")
export class AccessController {
  constructor(private accessService: AccessService) {}

  private logger = new Logger(AccessController.name);

  @Get("whoAmI")
  whoAmI(@Session() session: Record<string, any>) {
    return session.user ? session.user?.email : null;
  }

  @Post("signin")
  async signIn(
    @Body() dto: SignInDto,
    @Session() session: Record<string, any>
  ) {
    const user = await this.accessService.signIn(dto);

    if (user.status) {
      session.user = user?.content;
    }

    return user;
  }

  @Post("signup")
  async signUp(@Body() dto: SignUpDto) {
    return await this.accessService.signUp(dto);
  }
}
