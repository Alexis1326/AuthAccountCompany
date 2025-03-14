import { Controller, UseGuards, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../../application/users.service';
import { CreateUserDto } from 'src/users/domain/dto/createUserDto.dto';
import { UpdateUserDto } from 'src/users/domain/dto/updateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt')) // Proteger la ruta de creación
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt')) // Proteger la ruta de lectura
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt')) // Proteger la ruta de lectura
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt')) // Proteger la ruta de actualización
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt')) // Proteger la ruta de eliminación
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}