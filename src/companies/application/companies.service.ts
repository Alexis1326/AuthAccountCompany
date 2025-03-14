import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/share/domain/infraestructura/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from '../domain/dto/createCompanyDto';
import { UpdateCompanyDto } from '../domain/dto/updateCompanyDto';
import { CompanyGateway } from '../interfaces/gateway/company.gateway'; // Importa el Gateway

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companiesRepository: Repository<Company>,
    private readonly companyGateway: CompanyGateway, // Inyecta el Gateway
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.companiesRepository.create(createCompanyDto);
    const savedCompany = await this.companiesRepository.save(company);

    // Emite el evento "company.created" con la información de la compañía
    this.companyGateway.emitCompanyCreated(savedCompany);

    return savedCompany;
  }

  async findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.companiesRepository.findOne({ where: { id } });
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.findOne(id);
    this.companiesRepository.merge(company, updateCompanyDto);
    return this.companiesRepository.save(company);
  }

  async remove(id: number): Promise<void> {
    const company = await this.findOne(id);
    await this.companiesRepository.remove(company);
  }
}