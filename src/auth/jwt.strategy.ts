/*
 * @Author: D.Y
 * @Date: 2021-04-29 11:04:25
 * @LastEditTime: 2021-04-29 11:38:36
 * @LastEditors: D.Y
 * @FilePath: /pherusa-server/src/auth/jwt.strategy.ts
 * @Description:
 */
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(UserSchema)
    private userModel: ReturnModelType<typeof UserSchema>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    } as StrategyOptions);
  }

  async validate(id) {
    return await this.userModel.findById(id);
  }
}
