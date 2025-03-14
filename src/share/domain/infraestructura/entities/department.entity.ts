import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { City } from './city.entity';
import { Company } from './company.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => City, (city) => city.departamento)
  ciudades: City[];

  @OneToMany(() => Company, (company) => company.departamento)
  companies: Company[];
}