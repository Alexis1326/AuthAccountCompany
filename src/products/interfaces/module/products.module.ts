import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../../share/domain/infraestructura/entities/product.entity'; // Asegúrate de importar la entidad
import { ProductsService } from '../../application/products.service';
import { ProductsController } from '../controller/products.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]), // Registrar el repositorio de Product
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}