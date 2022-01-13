import { Status } from '../entities/user.entity';

export class CreateUserInput {
  email?: string;

  password?: string;
  fullName?: string;
  phone?: string;

  vertiedAt?: Date;

  avatar?: string;

  ip?: string;

  device?: string;

  browser?: string;
  www?: string;

  zalo?: string;

  facebook?: string;

  telegram?: string;

  guest?: boolean;

  statusChat?: Status;
  regionName?: string;
  countryCode?: string;
  country?: string;

  timezone?: string;
  query?: string; //is ip address
  city?: string;
  os?: string;
}
