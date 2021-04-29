/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:00:46
 * @LastEditTime: 2021-04-29 11:06:58
 * @LastEditors: D.Y
 * @FilePath: /pherusa-server/src/app.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { ResponseInterceptor } from './core/res.interceptor';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    DbModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ResponseInterceptor],
})
export class AppModule {}
