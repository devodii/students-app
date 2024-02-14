import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  getUser(): string {
    return "Emmanuel Odii";
  }
}
