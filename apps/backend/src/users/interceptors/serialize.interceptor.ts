/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from "@nestjs/common";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { map } from "rxjs";

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor<any>) {}
  intercept(context: ExecutionContext, handler: CallHandler<any>) {
    return handler
      .handle()
      .pipe(
        map(data =>
          Array.isArray(data)
            ? data.map((c: any) => plainToInstance(this.dto, c))
            : plainToInstance(this.dto, data)
        )
      );
  }
}

export const Serialize = (dto: ClassConstructor<any>) => {
  return UseInterceptors(new SerializeInterceptor(dto));
};
