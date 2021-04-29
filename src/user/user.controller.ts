/*
 * @Author: D.Y
 * @Date: 2021-04-16 19:18:46
 * @LastEditTime: 2021-04-29 15:43:58
 * @LastEditors: D.Y
 * @FilePath: /pherusa-server/src/user/user.controller.ts
 * @Description:
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { User } from '../dao/user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Req() req: Request, @Body() dto: User) {
    return this.userService.createUser(dto);
  }

  @Get(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getUserDetail(@Req() req: Request, @Param('_id') _id: string) {
    return this.userService.getUserDetail(_id);
  }

  @Put(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async updateUser(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body() dao: User,
  ) {
    return this.userService.updateUser(_id, dao);
  }

  @Delete(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deleteUser(@Req() req: Request, @Param('_id') _id: string) {
    return this.userService.deleteUser(_id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiQuery({
    name: 'keyword',
    type: String,
    required: false,
    description: '用户名',
  })
  @ApiQuery({
    name: 'pi',
    type: String,
    required: false,
    description: '第几页',
  })
  @ApiQuery({
    name: 'ps',
    type: String,
    required: false,
    description: '每页多少条',
  })
  async getUsers(
    @Req() req: Request,
    @Query('keyword') keyword: string,
    @Query('pi') pi: number,
    @Query('ps') ps: number,
  ) {
    return this.userService.getUsers(keyword, pi, ps);
  }
}
