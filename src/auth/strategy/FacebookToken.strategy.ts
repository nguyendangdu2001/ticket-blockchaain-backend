import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import FacebookTokenStrategy, { Profile } from 'passport-facebook-token';
import { AuthService } from '../auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(
  FacebookTokenStrategy,
  'facebook-token',
) {
  constructor(
    private authService: AuthService,
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: ' 3202964793268811',
      clientSecret: 'b9d9023f0d084f4faaea4b48ea08aed3',
      passReqToCallback: true,
    });
  }
  async validate(
    req: Request,
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
  ) {
    try {
      const user = await this.authService.validateFacebookUser(profile);
      const signed = this.jwt.sign({ userId: user.id });
      const cookieKey = this.configService.get<string>('COOKIE_NAME');
      req.session[cookieKey] = signed;
      done(null, { ...user.toObject(), token: signed });
    } catch (error) {
      done(error);
    }
  }
}
