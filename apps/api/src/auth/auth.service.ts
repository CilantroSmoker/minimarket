import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { AuthUser, ROLES } from './roles';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
  ) { }

  async login(dto: LoginDto) {
    const usuario = await this.usuariosService.findByEmail(dto.email);

    if (!usuario || !usuario.activo) throw new UnauthorizedException('Credenciales invalidas');

    const passwordOk = await this.passwordService.verify(dto.password, usuario.passwordHash);
    if (!passwordOk) throw new UnauthorizedException('Credenciales invalidas');

    const user = this.toAuthUser(usuario);
    return { accessToken: this.tokenService.sign(user), user };
  }

  async me(user: AuthUser) {
    const usuario = await this.usuariosService.findById(user.sub);

    if (!usuario || !usuario.activo) throw new UnauthorizedException('Debe iniciar sesion');
    return this.toAuthUser(usuario);
  }

  async signup(dto: SignUpDto) {
    const createDto: CreateUsuarioDto = {
      nombre: dto.nombre,
      email: dto.email,
      password: dto.password,
      rol: ROLES.VENDEDOR,
    };

    return this.usuariosService.create(createDto, {
      sub: 0,
      email: '',
      nombre: 'signup',
      rol: ROLES.VENDEDOR,
      permisos: [],
    });
  }

  private readonly usuarioInclude = {
    rol: {
      include: {
        permisos: {
          include: { permiso: true },
        },
      },
    },
  };

  private toAuthUser(usuario: any): AuthUser {
    return {
      sub: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
      rol: usuario.rol.codigo,
      permisos: usuario.rol.permisos.map((rolPermiso: any) => rolPermiso.permiso.codigo),
    };
  }
}