import {
  CallHandler,
  ExecutionContext,
  GatewayTimeoutException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

import config from '../resources/env.config';
import { v4 as uuidv4 } from 'uuid';

/**
 *  @description Metodo que intercepta todas la peticiones y
 *  que permite ejecutar el circuit break segun la configuracion
 *  del timeout.
 *
 *  @author Fabrica Digital de Microservicios
 *  @date Febrero de 2022
 *
 */
@Injectable()
export class TimeOutInterceptor implements NestInterceptor {
  private readonly logger = new Logger(TimeOutInterceptor.name);

  constructor(
    private moduleRef: ModuleRef,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) { }

  generateUUID(): string {
      return uuidv4();
    }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      timeout(this.configService.TIMEOUT),
      catchError((err) => {
        if (err instanceof TimeoutError)
          return throwError(() => {
            const request = context.switchToHttp().getRequest();
            const contextId = ContextIdFactory.getByRequest(request);
            // "TransactionId" is a request-scoped provider
            this.moduleRef
              .resolve('TransactionId', contextId)
              .then((transactionId) => {
                this.logger.error(
                  'La operacion ha alcanzado el tiempo maximo de espera',
                  {
                    statusCode: HttpStatus.GATEWAY_TIMEOUT,
                    transactionId,
                  },
                );
              });

            return new GatewayTimeoutException({
              "responseCode": HttpStatus.GATEWAY_TIMEOUT,
              "messageCode": "ERROR",
              "message": "ERROR_TIMEOUT",
              "legacy": "openshift",
              "transactionId": this.generateUUID(),
              "timestamp": new Date().toISOString(),
              "data": {
                "Code": "1",
                "Message": "ERROR_TIMEOUT"
              }
            });
          });
        throw err;
      }),
    );
  }
}
