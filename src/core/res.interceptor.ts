/*
 * @Author: D.Y
 * @Date: 2021-04-14 19:38:40
 * @LastEditTime: 2021-04-29 10:38:59
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/core/res.interceptor.ts
 * @Description:
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

export const CODES = {
  ok: 200,
};

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: CODES.ok,
          data: data,
        };
      }),
    );
  }
}
