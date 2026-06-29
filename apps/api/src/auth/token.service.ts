import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from './roles';

type TokenPayload = AuthUser & {
  iat: number;
  exp: number;
};

@Injectable()
export class TokenService {
  // 1. Mantenemos tus configuraciones exactas de entorno y validación estricta al iniciar
  private readonly expiresInSeconds = Number(process.env.JWT_EXPIRES_SECONDS ?? 60 * 60 * 8);
  private readonly jwtSecret: string;

  // 2. Inyectamos JwtService para solucionar la incompatibilidad de firmas con Passport
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtSecret = this.resolveJwtSecret();
  }

  sign(user: AuthUser) {
    // Mantenemos tu payload original intacto (RBAC integrado)
    const payload: AuthUser = { ...user };

    // Firmamos utilizando el secreto validado y la expiración de JWT configurada
    return this.jwtService.sign(payload, {
      secret: this.jwtSecret,
      expiresIn: this.expiresInSeconds,
    });
  }

  verify(token: string): TokenPayload {
    // Mantener la validación estructural básica por si llega un string cualquiera
    const parts = token.split('.');
    if (parts.length !== 3) throw new UnauthorizedException('Token invalido');

    try {
      // Verificación oficial compatible con Passport-JWT
      return this.jwtService.verify<TokenPayload>(token, {
        secret: this.jwtSecret,
      });
    } catch (error) {
      // Replicamos tus respuestas textuales exactas según el tipo de fallo de la librería
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Sesion expirada');
      }
      throw new UnauthorizedException('Token invalido');
    }
  }

  // 3. Conservamos tu validador crítico para congelar la app si falta el JWT_SECRET en el .env
  private resolveJwtSecret() {
    const secret = process.env.JWT_SECRET?.trim();
    if (!secret) {
      throw new Error('JWT_SECRET no esta definido. Configuralo en apps/api/.env antes de iniciar la API.');
    }
    return secret;
  }
}