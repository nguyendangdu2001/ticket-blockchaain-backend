import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import GoogleIdTokenStrategy from 'passport-google-id-token';
import { AuthService } from '../auth.service';
import { GoogleProfile } from '../interface/GoogleProfile.interface';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(
  GoogleIdTokenStrategy as any,
  'google-id-token',
) {
  constructor(
    private authService: AuthService,
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID:
        '761742502120-1tss44f7h42m2divfqg2dhcvo3608cl2.apps.googleusercontent.com',
      clientSecret: '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',
      passReqToCallback: true,
    });
  }
  async validate(
    req: Request,
    profile: GoogleProfile,
    googleId: string,
    done: (error: any, user?: any, info?: any) => void,
  ) {
    try {
      console.log('in google', profile, req.res.cookie);
      const user = await this.authService.validateGoogleUser(googleId, profile);
      console.log(req.session.eventBuzzjwt);
      const signed = this.jwt.sign({ userId: user.id });
      console.log(signed);
      const cookieKey = this.configService.get<string>('COOKIE_NAME');
      req.session[cookieKey] = signed;
      done(null, { ...user.toObject(), token: signed });
    } catch (error) {
      done(error);
    }
  }
}
