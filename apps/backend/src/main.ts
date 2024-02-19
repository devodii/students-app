import session from "express-session";
import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use(
    session({
      secret: "randKey123",
      resave: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3, // 3 days
      },
    })
  );

  app.useGlobalPipes(new ValidationPipe());

  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.BACKEND_PORT || 3000;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
