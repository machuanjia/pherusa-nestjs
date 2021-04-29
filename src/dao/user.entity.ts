/*
 * @Author: D.Y
 * @Date: 2021-04-17 09:07:52
 * @LastEditTime: 2021-04-29 10:51:38
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/dao/user.entity.ts
 * @Description:
 */

import { ApiProperty } from '@nestjs/swagger';

export class User {
  _id?: string;

  @ApiProperty()
  username?: string;

  @ApiProperty()
  password?: string;
}
