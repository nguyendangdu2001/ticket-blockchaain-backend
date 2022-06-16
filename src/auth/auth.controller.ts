import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as ethUtil from 'ethereumjs-util';
import { Request, Response } from 'express';
import { Public } from 'src/common/decorators';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwt: JwtService,
    private readonly authService: AuthService,
    private configService: ConfigService,
  ) {}

  @HttpCode(204)
  @Post('/logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    req.session = null;
    req.logout();
    res.clearCookie('nest-server-cookie');
    res.send('');
  }

  // @Public()
  // @UseGuards(FacebookGuard)
  // @Post('/facebook')
  // async facebookLogin(@User() user: UserEntity) {
  //   return user;
  // }
  // @Public()
  // @Post('/local')
  // @UseGuards(LocalGuard)
  // login(@Body() _loginInput: LoginInput, @User() user: UserEntity) {
  //   return user;
  // }

  // @Public()
  // @UseGuards(GoogleGuard)
  // @Post('/google')
  // async googleLogin(@User() user: UserEntity) {
  //   return user;
  // }
  // @Public()
  // @Post('/register')
  // async register(@Body() registerInput: RegisterInput, @Req() req: Request) {
  //   // console.log(registerInput, req.body);
  //   // return registerInput;
  //   const user = await this.authService.register(req, registerInput);
  //   return user;
  // }
  @Public()
  @Get('/nonce/:publicAddress')
  async getNonce(
    @Req() req: Request,
    @Param('publicAddress') publicAddress: string,
  ) {
    const user = await this.userService.findOne({ publicAddress });
    if (!user) {
      const newUser = await this.userService.create({ publicAddress });
      return newUser;
    }
    return user;
    // console.log(registerInput, req.body);
    // return registerInput;
    // const user = await this.authService.register(req, registerInput);
    // return user;
  }
  @Public()
  @Post('/refresh-token')
  async refreshToken(
    @Req() req: Request,
    @Body() data: { publicAddress: string; signature: string },
  ) {
    const { publicAddress, signature } = data;
    const user = await this.userService.findOne({ publicAddress });
    if (!user) throw new BadRequestException();
    const msg = `I am signing my one-time nonce: ${user.nonce}`;
    const msgBuffer = ethUtil.toBuffer(
      ethUtil.keccak(Buffer.from(msg, 'utf-8')),
    );
    const msgHash = ethUtil.hashPersonalMessage(Buffer.from(msg, 'utf-8'));
    const signatureParams = ethUtil.fromRpcSig(signature);
    const publicKey = ethUtil.ecrecover(
      msgHash,
      signatureParams.v,
      signatureParams.r,
      signatureParams.s,
    );
    const addressBuffer = ethUtil.pubToAddress(publicKey);
    const address = ethUtil.bufferToHex(addressBuffer);
    let token: string;
    console.log(address);

    if (address.toLowerCase() === publicAddress.toLowerCase()) {
      const signed = this.jwt.sign({ userId: user._id });
      console.log(signed);
      // const cookieKey = this.configService.get<string>('COOKIE_NAME');
      // req.session[cookieKey] = signed;
      token = signed;
    } else {
      throw new BadRequestException();
    }
    user.nonce = Math.floor(Math.random() * 1000000)?.toString();
    await user?.save();
    return token;
    // console.log(registerInput, req.body);
    // return registerInput;
    // const user = await this.authService.register(req, registerInput);
    // return user;
  }
}
