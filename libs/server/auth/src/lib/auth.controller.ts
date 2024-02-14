import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("whoAmI")
  whoAmI() {
    return this.authService.getUser();
  }

  @Post("signin")
  signin(@Body() body: SignInDto) {
    return this.authService.signIn(body);
  }
}
