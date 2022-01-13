import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { Profile } from 'passport-facebook-token';
import { UsersService } from 'src/users/users.service';
import { RegisterInput } from './dto/register.input';
import { GoogleProfile } from './interface/GoogleProfile.interface';
import { hash, compare } from 'bcrypt';
import { Request } from 'express';
import { WsException } from '@nestjs/websockets';
import { Profile } from 'passport-facebook-token';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async validateFacebookUser(profile: Profile) {
    try {
      const user = await this.userService.findOrCreateFacebookUser(profile);
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  async validate(userId: string) {
    try {
      console.log('validate', userId);

      const user = await this.userService.findOneById(userId);
      if (!user) throw new UnauthorizedException();
      return user;
    } catch (error) {
      return null;
    }
  }
  async validateGoogleUser(googleId: string, profile: GoogleProfile) {
    try {
      console.log('validate');

      const user = await this.userService.findOrCreateGoogleUser(
        googleId,
        profile,
      );
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  async validateNormalUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new BadRequestException();
    const passwordCheck = await compare(password, user.password);
    if (!passwordCheck)
      throw new NotAcceptableException('Username or Password not correct');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: excluded, ...returnUser } = user.toObject();
    return returnUser;
  }
  async register(req: Request, registerInput: RegisterInput) {
    const checkExist = await this.userService.findOne({
      email: registerInput?.email,
    });
    if (checkExist) throw new BadRequestException('Email exist');
    const user = await this.userService.create({
      ...registerInput,
      password: await hash(registerInput.password, 10),
    });
    const signed = this.jwt.sign({ userId: user?._id });
    req.session.eventBuzzjwt = signed;
    return { ...user?.toObject(), token: signed, id: user._id };
  }
  async validateWsUser(token: string) {
    const data = this.jwt.verify<{ userId: string; projectId?: string }>(token);
    if (!data) throw new WsException('UnAuthorized');
    try {
      const user = await this.validate(data?.userId);
      return { user, projectId: data?.projectId };
    } catch (error) {
      throw new WsException('UnAuthorized');
    }
  }
}
