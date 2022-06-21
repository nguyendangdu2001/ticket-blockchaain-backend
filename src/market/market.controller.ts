import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { User } from 'src/common/decorators';
import { UserEntity } from 'src/users/entities/user.entity';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get()
  findAll() {
    return this.marketService.findAll(
      { sold: false },
      undefined,
      undefined,
      undefined,
      'event ticketType',
    );
  }
  @Get('my-market')
  myMarket(@User() user: UserEntity) {
    return this.marketService.findAll(
      {
        seller: user?.publicAddress,
      },
      undefined,
      undefined,
      undefined,
      'event ticketType',
    );
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await (
      await this.marketService.findOneById(id)
    ).populate('event ticketType');
  }
}
