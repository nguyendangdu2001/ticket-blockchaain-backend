import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../entities/user.entity';

export class ChangeStatusInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ enum: ['active', 'away', 'offline'] })
  status: Status;
}
