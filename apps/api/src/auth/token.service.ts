import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from './roles';

type TokenPayload = AuthUser & {
  iat: number;
  exp: number;
};

@Injectable()
export class TokenService {
  // el JwtModule de NestJS ya tiene el secreto y la expiración cargados.
  constructor(private readonly jwtService: JwtService) {}

  sign(user: AuthUser) {
    const payload: AuthUser = { ...user };

    return this.jwtService.sign(payload);
  }

  verify(token: string): TokenPayload {
    const parts = token.split('.');
    if (parts.length !== 3) throw new UnauthorizedException('Token invalido');

    try {
      // Usamos la verificación global por defecto
      return this.jwtService.verify<TokenPayload>(token);
    } catch (error) {
      if (error instanceof Error && error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Sesion expirada');
      }
      throw new UnauthorizedException('Token invalido');
    }
  }
}