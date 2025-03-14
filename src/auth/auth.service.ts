import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/application/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/domain/dto/createUserDto.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id }; // Payload del token JWT
    return {
      access_token: this.jwtService.sign(payload), // Genera el token JWT
    };
  }

  // En AuthService
  async signUp(createUserDto: CreateUserDto) { // Usa CreateUserDto en lugar de CreateUserAuthDto
    const user = await this.usersService.create(createUserDto);
    return { message: 'User created successfully', user };
}
}