import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty({ example: 'Maximiliano Sanchez' })
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @ApiProperty({ example: 'juan@minimarket.cl' })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '123456',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password!: string;
}