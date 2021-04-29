import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
