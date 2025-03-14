import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Company } from './company.entity';
import { Department } from './department.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ name: 'departamento_id' })
  departamentoId: number;

  @OneToMany(() => Company, (company) => company.ciudad)
  companies: Company[];

  @ManyToOne(() => Department, (department) => department.ciudades)
  @JoinColumn({ name: 'departamento_id' })
  departamento: Department;
}