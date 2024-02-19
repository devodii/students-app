import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CoursesModule } from "../courses/courses.module";
import { DatabaseModule } from "../database/database.module";
import { AppService } from "./app.service";
import { AccessModule } from "../access/access.module";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    AccessModule,
    DatabaseModule,
    CoursesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {}
