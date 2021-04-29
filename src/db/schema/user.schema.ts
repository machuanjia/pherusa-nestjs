/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-29 10:12:29
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/user.schema.ts
 * @Description:
 */
import { prop, modelOptions } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';
import { hashSync } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserSchema {
  @IsString()
  @prop({ required: true })
  @ApiProperty({ description: '用户名', example: 'user1' })
  username: string;

  @IsString()
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  @ApiProperty({ description: '密码', example: '123456' })
  password: string;
}
