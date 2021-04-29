/*
 * @Author: D.Y
 * @Date: 2021-04-29 11:04:25
 * @LastEditTime: 2021-04-29 11:07:43
 * @LastEditors: D.Y
 * @FilePath: /pherusa-server/src/main.ts
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './core/res.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NotFoundExceptionFilter } from './middleware/file.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.enableCors();
  app.setGlobalPrefix('api/pherusa');
  app.useStaticAssets(join(__dirname, '../public'));
  app.useGlobalInterceptors(app.get(ResponseInterceptor));
  const options = new DocumentBuilder()
    .setTitle('Pherusa-Api')
    .setDescription('Pherusa server apis')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(4000);
  console.log('http://localhost:4000/api-docs');
}
bootstrap();
