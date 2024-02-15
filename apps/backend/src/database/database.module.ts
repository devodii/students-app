import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      synchronize: true,
      autoLoadEntities: true, // automatically saves schema by calling .forFeature()
      type: "postgres",
      host: "localhost",
      password: "randPassword123",
      username: "postgres",
      port: 5432,
      database: "students-app",
    }),
  ],
})
export class DatabaseModule {}
