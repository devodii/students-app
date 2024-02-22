import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      synchronize: true,
      autoLoadEntities: true, // automatically saves schema by calling .forFeature()
      type: "postgres",
      host: "db",
      password: "randPassword123",
      username: "postgres",
      port: 5432,
      database: "students-app",
      retryAttempts: 9999,
    }),
  ],
})
export class DatabaseModule {}
