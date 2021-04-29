/*
 * @Author: D.Y
 * @Date: 2021-04-17 11:22:56
 * @LastEditTime: 2021-04-29 11:45:42
 * @LastEditors: D.Y
 * @FilePath: /pherusa-server/src/auth/auth.controller.ts
 * @Description:
 */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current-user.decorator';
import { InjectModel } from 'nestjs-typegoose';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/dao/user.entity';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(UserSchema)
    private userModel: ReturnModelType<typeof UserSchema>,
  ) {}

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: User, @CurrentUser() user) {
    return {
      token: this.jwtService.sign(String(user._id)),
    };
  }

  @Get('info')
  @ApiOperation({ summary: '获取登录信息及token' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async user(@CurrentUser() user) {
    return user;
  }
}
