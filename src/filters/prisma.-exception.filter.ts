import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';


@Catch(PrismaClientKnownRequestError)
export class PrismaExcptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const responseBody: ResponseBody =
      exception instanceof Prisma.PrismaClientKnownRequestError
        ? (exception as PrismaErrorrDetails,
          {
            statusCode: HttpStatus.BAD_REQUEST,
            timestamp: new Date().toISOString(),
            prismaError: {
              code: exception.code,
              message: 'error',
            },
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
          })
        : {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
          };

    httpAdapter.reply(ctx.getResponse(), responseBody, responseBody.statusCode);
  }
}