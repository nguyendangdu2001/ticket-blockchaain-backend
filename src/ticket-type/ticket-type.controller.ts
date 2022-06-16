import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketTypeService } from './ticket-type.service';
import { CreateTicketTypeDto } from './dto/create-ticket-type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket-type.dto';
import { Types } from 'mongoose';

@Controller('events/:eventId/ticket-types')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @Post()
  create(
    @Body() createTicketTypeDto: CreateTicketTypeDto,
    @Param('eventId') eventId: string,
  ) {
    return this.ticketTypeService.create({
      ...createTicketTypeDto,
      eventId: new Types.ObjectId(eventId),
    });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.ticketTypeService.findAll({
      finishTransaction: true,
      eventId: new Types.ObjectId(eventId),
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTypeService.findOne({ _id: new Types.ObjectId(id) });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketTypeDto: UpdateTicketTypeDto,
  ) {
    return this.ticketTypeService.update(id, updateTicketTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTypeService.remove(id);
  }
}
