import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractService } from 'src/common/service/AbtrastService';
import { CreateTicketTypeDto } from './dto/create-ticket-type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket-type.dto';
import { TicketType, TicketTypeDocument } from './entities/ticket-type.entity';

@Injectable()
export class TicketTypeService extends AbstractService<TicketType> {
  constructor(
    @InjectModel(TicketType.name) ticketTypeModel: Model<TicketTypeDocument>,
  ) {
    super(ticketTypeModel);
  }
}
