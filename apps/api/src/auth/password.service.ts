import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  private readonly saltRounds = 10;

  async hash(password: string) {
    return bcrypt.hash(password, this.saltRounds);
  }

  async verify(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}