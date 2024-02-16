import { Body, Controller, Post } from "@nestjs/common";
import { AccessService } from "./access.service";

@Controller("auth")
export class AccessController {
  constructor(private accessService: AccessService) {}

  @Post("signin")
  signIn(@Body() dto: any) {
    return this.accessService.signIn(dto);
  }
}
