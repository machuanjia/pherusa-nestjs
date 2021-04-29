/*
 * @Author: D.Y
 * @Date: 2021-04-16 19:19:42
 * @LastEditTime: 2021-04-29 10:49:44
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/user/user.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { PAGINATION } from '../constant';
import { UserSchema } from '../db/schema/user.schema';
import { User } from '../dao/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema)
    private readonly userModel: ReturnModelType<typeof UserSchema>,
  ) {}

  async createUser(dao: User): Promise<User> {
    return await this.userModel.create(dao);
  }

  async getUserDetail(_id: string) {
    return await this.userModel.findById(_id);
  }

  async updateUser(_id: string, dao: User) {
    await this.userModel.findByIdAndUpdate(_id, dao);
    return await this.userModel.findById(_id);
  }

  async deleteUser(_id: string) {
    await this.userModel.findByIdAndDelete(_id);
    return true;
  }

  async getUsers(keyword, pi, ps) {
    const findOptions = {};
    let regexp = '';
    const pageIndex = parseInt(pi || 0);
    const pageSize = parseInt(ps || PAGINATION.SIZE);

    if (keyword) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      regexp = new RegExp(keyword, 'i');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      findOptions.$and = [{ username: { $regex: regexp } }];
    }

    const total = await this.userModel
      .find(findOptions)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .count();

    const users = await this.userModel
      .find(findOptions)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .sort({ _id: -1 });
    return {
      page: pageIndex,
      total: total,
      data: users,
    };
  }
}
