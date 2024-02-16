import { Injectable } from "@nestjs/common";

@Injectable()
export class AccessService {
  private users = [{ email: "emmanuelodii80@gmail.com", password: "1234" }];

  signIn(dto: any) {
    const { email, password } = dto ?? {};
    const user = this.users.find(
      user => user?.email === email && user.password === password
    );

    return user
      ? { message: "", status: true }
      : { message: "incorrect credentials", status: false };
  }
}
