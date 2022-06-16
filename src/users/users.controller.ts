import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Public, User } from 'src/common/decorators';
import { User as UserEntity, UserDocument } from './entities/user.entity';
// import * as Mail from 'nodemailer/lib/mailer';
// import { createTransport } from 'nodemailer';
// import EmailService from 'src/utils/email/email.service';
// import { EmailConfirmationService } from 'src/utils/email/EmailConfirmation.service';
// import ConfirmEmailDto from 'src/utils/email/confirmEmail.dto';
import { UpdateUserInput } from './dto/update-user.input';
import { JwtService } from '@nestjs/jwt';
import { ChangeStatusInput } from './dto/change-status.input';

@Controller('users')
export class UsersController {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly emailConfirmationService: EmailConfirmationService,
    private readonly usersService: UsersService,
  ) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }
  // @Public()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/all')
  allUsers() {
    return this.usersService.allUsers();
  }

  @Get('/profile')
  async getGlobalyProfile(@User() user: UserDocument) {
    if (user) {
      return await this.usersService.findOneById(user?._id);
    }
    throw new UnauthorizedException();
  }
  @Public()
  @Post('/guest-profile')
  async getGuestProfile(
    @Body() data: { uuid: string; projectId: string; data: any },
  ) {
    const fullInfo = data?.data;
    const guest = await this.usersService.findOrCreateGuest(
      data?.uuid,
      data?.projectId,
      fullInfo,
    );
    return guest;
    // throw new UnauthorizedException();
  }
  @Get('/id/:id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOneById(id);
  }

  @Put('/profile')
  update(@User() user: UserDocument, @Body() updateUserInput: UpdateUserInput) {
    return this.usersService.update(user?._id, updateUserInput);
  }

  // @Public()
  // @Put('change-status/:id')
  // changestatus(
  //   @Param('id') id: string,
  //   @Body() changeStatus: ChangeStatusInput,
  // ) {
  //   console.log(changeStatus);
  //   return this.usersService.changeStatus(id, changeStatus);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
