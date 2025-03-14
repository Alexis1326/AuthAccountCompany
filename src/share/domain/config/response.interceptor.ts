import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const httpContext = context.switchToHttp();
      const response = httpContext.getResponse();
  
      return next.handle().pipe(
        map((data) => ({
          success: true,
          information: data ? [data] : [],
          message: 'Operación exitosa',
          status: response.statusCode,
        })),
      );
    }
  }