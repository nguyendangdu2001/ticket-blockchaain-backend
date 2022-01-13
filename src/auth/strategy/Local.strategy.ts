import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {
    super({ passReqToCallback: true, usernameField: 'email' });
  }
  async validate(req: Request, email: string, password: string, done) {
    try {
      const user = await this.authService.validateNormalUser(email, password);
      const signed = this.jwt.sign({ userId: user._id });
      console.log(signed);
      const cookieKey = this.configService.get<string>('COOKIE_NAME');
      req.session[cookieKey] = signed;
      done(null, { ...user, token: signed });
    } catch (error) {
      done(error);
    }
  }
}
