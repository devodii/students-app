import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      url: "postgres://postgres:randPassword123@localhost:5432/students-app",
      synchronize: true,
      autoLoadEntities: true,
      retryAttempts: 9999,
    }),
  ],
})
export class DatabaseModule {}
