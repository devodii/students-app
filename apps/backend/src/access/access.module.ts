import { Module } from "@nestjs/common";
import { AccessController } from "./access.controller";
import { AccessService } from "./access.service";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [UsersModule],
  controllers: [AccessController],
  providers: [AccessService],
})
export class AccessModule {}
