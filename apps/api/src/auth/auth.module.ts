import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { PasswordService } from './password.service';
import { JwtStrategy } from './jwt.strategy';
import { TokenService } from './token.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET', 'secretKey_minimarket_2026'),
        signOptions: {
          expiresIn: parseInt(configService.get<string>('JWT_EXPIRES') ?? '3600', 10),
        },
      }),
    }),
    forwardRef(() => UsuariosModule),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    PasswordService, 
    JwtStrategy, 
    TokenService // 2. Agregamos TokenService a los providers para que se pueda inyectar
  ],
  exports: [
    PasswordService, 
    TokenService, // 3. Exportamos TokenService en lugar de JwtModule puro para proteger la arquitectura
  ],
})
export class AuthModule {}