import { IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  direccion?: string;

  @IsOptional()
  ciudadId?: number;

  @IsOptional()
  departamentoId?: number;
}