import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../share/domain/infraestructura/entities/user.entity'; // Asegúrate de importar la entidad
import { UsersService } from '../../application/users.service';
import { UsersController } from '../controller/users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}