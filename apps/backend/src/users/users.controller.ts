import { Controller, Get } from "@nestjs/common";
import { Serialize } from "./interceptors/serialize.interceptor";
import { UserDto } from "./dtos/user.dto";
import { UsersService } from "./users.service";

@Controller("users")
@Serialize(UserDto)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async users() {
    return this.usersService.findAll();
  }
}
