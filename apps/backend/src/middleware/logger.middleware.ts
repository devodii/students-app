import { Injectable, Logger, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(LoggerMiddleware.name);

  use(req: any, res: any, next: (error?: any) => void) {
    const url = req.originalUrl || req.url;
    this.logger.log(`Incoming request: ${req.method} ${url}`);
    next();
  }
}
