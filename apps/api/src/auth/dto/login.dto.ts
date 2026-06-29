import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'superadmin@minimarket.local' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'SuperAdmin123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;
}
