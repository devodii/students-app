import { Injectable } from "@nestjs/common";
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AccessService {
  private users = [{ email: "emmanuelodii80@gmail.com", password: "1234" }];

  signIn(dto: SignInDto) {
    const { email, password } = dto ?? {};
    const user = this.users.find(
      user => user?.email === email && user.password === password
    );

    return user
      ? { message: "", content: user, status: true }
      : { message: "incorrect credentials", status: false };
  }
}
