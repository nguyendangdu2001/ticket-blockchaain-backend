import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req: Request) => {
          let token = null;
          if (req && req.cookies) {
            const cookieKey = this.configService.get<string>('COOKIE_NAME');
            token = req.cookies[cookieKey] || req.session[cookieKey];
          }
          return token;
        },
      ]),
      secretOrKey: 'fsdxfsdfdsf',
    });
  }
  async validate(payload: { userId: string }) {
    return await this.authService.validate(payload.userId);
  }
}
