/*
 * @Author: D.Y
 * @Date: 2021-04-17 11:41:14
 * @LastEditTime: 2021-04-17 11:41:16
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/auth/current-user.decorator.ts
 * @Description:
 */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const CurrentUser = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req: Request = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
