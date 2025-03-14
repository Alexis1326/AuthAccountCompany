import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';
import { City } from './city.entity';
import { Department } from './department.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column({ name: 'ciudad_id' })
  ciudadId: number;

  @Column({ name: 'departamento_id' })
  departamentoId: number;

  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @OneToMany(() => Product, (product) => product.company)
  products: Product[];

  @ManyToOne(() => City, (city) => city.companies)
  @JoinColumn({ name: 'ciudad_id' })
  ciudad: City;

  @ManyToOne(() => Department, (department) => department.companies)
  @JoinColumn({ name: 'departamento_id' })
  departamento: Department;
}