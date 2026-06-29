import { Injectable } from "@nestjs/common"
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(configService: ConfigService) {
        const secret = configService.get<string>('JWT_SECRET')?.trim();
        if (!secret) {
          throw new Error('JWT_SECRET no esta definido. Configuralo en apps/api/.env antes de iniciar la API.');
        }

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secret,
            ignoreExpiration: false,
        })
    }

    // PAYLOAD = { sub: userId, email: string; ... }
    async validate(payload: any) {
      
        return { 
            sub: payload.sub, 
            email: payload.email,
            rol: payload.rol 
        };
    }
}