import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Response } from 'express';
  
  @Catch()
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
  
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message = 'Error interno del servidor';
  
      if (exception instanceof HttpException) {
        status = exception.getStatus();
        message = exception.message;
      }
  
      response.status(status).json({
        success: false,
        information: [],
        message,
        status,
      });
    }
  }