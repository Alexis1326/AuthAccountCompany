import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Importa ConfigModule y ConfigService
import { City } from '../../../../share/domain/infraestructura/entities/city.entity';
import { Company } from '../../../../share/domain/infraestructura/entities/company.entity';
import { Department } from '../../../../share/domain/infraestructura/entities/department.entity';
import { Product } from '../../../../share/domain/infraestructura/entities/product.entity';
import { User } from '../../../../share/domain/infraestructura/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'), 
        entities: [City, Company, Department, Product, User],
        synchronize: true,
      }),
      inject: [ConfigService], 
    }),
  ],
})
export class DatabaseModule {}