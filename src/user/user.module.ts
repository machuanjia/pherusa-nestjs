/*
 * @Author: D.Y
 * @Date: 2021-04-16 19:14:52
 * @LastEditTime: 2021-04-17 09:05:51
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/user/user.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
