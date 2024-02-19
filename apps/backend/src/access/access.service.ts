import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { SignUpDto, SignInDto } from "./dto";

@Injectable()
export class AccessService {
  constructor(private usersService: UsersService) {}

  async signIn(dto: SignInDto) {
    const user = await this.usersService.findOne(dto.email);
    if (dto.password !== user?.password) {
      throw new HttpException(
        "INCORRECT PASSWORD",
        HttpStatus.NON_AUTHORITATIVE_INFORMATION
      );
    }

    return { status: true, content: user };
  }

  async signUp(dto: SignUpDto) {
    try {
      await this.usersService.create(dto.email, dto.password);
      return { status: true, object: "user.created" };
    } catch (error) {
      console.error(error);
      return { status: false };
    }
  }
}
