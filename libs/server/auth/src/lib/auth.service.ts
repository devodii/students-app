import { Injectable } from "@nestjs/common";
import { SignInDto } from "./dto/sign-in.dto";

const users = [{ email: "emmanuelodii80@gmail.com", password: "1234" }];
@Injectable()
export class AuthService {
  signIn(dto: SignInDto) {
    const { email, password } = dto;
    const user = users.find(
      user => user?.email === email && user.password === password
    );

    return user
      ? { message: "", status: true }
      : { message: "incorrect credentials", status: false };
  }

  getUser(): string {
    return "Emmanuel Odii";
  }
}
