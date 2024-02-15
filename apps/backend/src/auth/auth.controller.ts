import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("whoAmI")
  whoAmI() {
    return this.authService.getUser();
  }

  @Post("signin")
  signin(@Body() body: any) {
    console.log({ body });
    return this.authService.signIn(body);
  }
}
