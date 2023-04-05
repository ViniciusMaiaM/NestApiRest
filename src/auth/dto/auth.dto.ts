import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// For the class validator work it's necessary to use a class and not interface
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
