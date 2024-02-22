import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return await this.repo.save(user);
  }

  async findOne(email: string) {
    const user = this.repo.findOne({ where: { email } });

    if (!user) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    return user;
  }

  findAll = async () => {
    return await this.repo.find();
  };
}
