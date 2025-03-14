import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './share/domain/resources/env.config';
import { GlobalModule } from './share/domain/config/global.module';
import { DatabaseModule } from './share/domain/infraestructura/database/database.module';
import { SeedModule } from './share/domain/infraestructura/seed/seed.module';
import { CompaniesModule } from './companies/interfaces/module/companies.module';
import { ProductsModule } from './products/interfaces/module/products.module';
import { UsersModule } from './users/interfaces/module/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './share/domain/config/response.interceptor';
import { HttpExceptionFilter } from './share/domain/config/http-exception.filter';

@Module({
  providers: [Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GlobalModule,
    DatabaseModule,
    SeedModule,
    CompaniesModule,
    ProductsModule,
    UsersModule,
    AuthModule
  ],
})
export class AppModule {}