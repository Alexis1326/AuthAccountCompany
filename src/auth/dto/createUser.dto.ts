import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}