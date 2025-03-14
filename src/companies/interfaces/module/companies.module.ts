import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesService } from '../../application/companies.service';
import { CompaniesController } from '../controller/companies.controller';
import { Company } from 'src/share/domain/infraestructura/entities/company.entity';
import { CompanyGateway } from '../gateway/company.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Company])], 
  controllers: [CompaniesController],
  providers: [CompaniesService, CompanyGateway],
})
export class CompaniesModule {}