import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';
import { City } from '../entities/city.entity';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async seedData() {
    // Verifica si ya hay datos en la base de datos
    const departmentsExist = await this.departmentRepository.find();
    if (departmentsExist.length > 0) {
      return { message: 'Data already seeded' };
    }

    // Cargar el JSON desde la carpeta data
    const dataPath = path.join(__dirname, '../../../../../data/colombia.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    // Recorre el JSON y guarda los departamentos y ciudades
    for (const departmentData of data) {
      const department = this.departmentRepository.create({
        nombre: departmentData.departamento,
      });
      await this.departmentRepository.save(department);

      for (const cityName of departmentData.ciudades) {
        const city = this.cityRepository.create({
          nombre: cityName,
          departamento: department, // Asocia la ciudad al departamento
        });
        await this.cityRepository.save(city);
      }
    }

    return { message: 'Data seeded successfully' };
  }
}