import { IsNotEmpty, IsString } from 'class-validator';

export class SendInviteEmailDto {
  @IsString()
  @IsNotEmpty()
  to: string;
  @IsString()
  @IsNotEmpty()
  projectId: string;
}
