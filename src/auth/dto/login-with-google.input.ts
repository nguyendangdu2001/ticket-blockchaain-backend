import { IsNotEmpty, IsString } from 'class-validator';
export class LoginWithGoogleInput {
  @IsString()
  @IsNotEmpty()
  id_token: string;
}
