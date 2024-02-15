import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule } from "../auth/auth.module";
import { CoursesModule } from "../courses/courses.module";
import { DatabaseModule } from "../database/database.module";
import { AppService } from "./app.service";

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CoursesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
