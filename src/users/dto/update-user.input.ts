import { IsString } from 'class-validator';
import { Status } from '../entities/user.entity';

export class UpdateUserInput {
  // @IsString()
  avatar: string;
  // @IsString()
  fullName: string;
  // @IsString()
  // lastName: string;
  // @IsString()
  phone: string;
  // @IsString()
  zalo: string;
  facebook: string;
  telegram: string;
  // @IsString()
  statusChat: Status;
  // @IsString()
  // telegram: string;
}
