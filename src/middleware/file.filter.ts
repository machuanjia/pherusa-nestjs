/*
 * @Author: D.Y
 * @Date: 2021-04-19 17:42:46
 * @LastEditTime: 2021-04-19 17:44:26
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/middleware/file.filter.ts
 * @Description:
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { join } from 'path';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.sendFile(join(__dirname, '../../public/', 'index.html'));
  }
}
