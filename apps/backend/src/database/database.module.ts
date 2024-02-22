import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        url: configService.get<string>("DATABASE_URL"), // Retrieve database URL from environment variables
        synchronize: true,
        autoLoadEntities: true,
        retryAttempts: 9999,
      }),
    }),
  ],
})
export class DatabaseModule {}
