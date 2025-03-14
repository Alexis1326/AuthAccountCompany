import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CompaniesService } from '../../application/companies.service';
import { Company } from 'src/share/domain/infraestructura/entities/company.entity';
import { UpdateCompanyDto } from 'src/companies/domain/dto/updateCompanyDto';
import { CreateCompanyDto } from 'src/companies/domain/dto/createCompanyDto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.companiesService.remove(+id);
  }
}