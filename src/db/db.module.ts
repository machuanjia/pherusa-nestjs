/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:17:08
 * @LastEditTime: 2021-04-29 11:06:16
 * @LastEditors: D.Y
 * @FilePath: /pherusa-server/src/db/db.module.ts
 * @Description:
 */
import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserSchema } from './schema/user.schema';

const models = TypegooseModule.forFeature([
  UserSchema,
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: 'mongodb://127.0.0.1:27017/pherusa',
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        };
      },
    }),
    models,
  ],
  exports: [models],
})
export class DbModule {}
