import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractService } from 'src/common/service/AbtrastService';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { Market, MarketDocument } from './entities/market.entity';

@Injectable()
export class MarketService extends AbstractService<Market> {
  constructor(
    @InjectModel(Market.name) private marketModel: Model<MarketDocument>,
  ) {
    super(marketModel);
  }
}
