import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Public, User } from 'src/common/decorators';
import { UserDocument, UserEntity } from 'src/users/entities/user.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Post()
  create(
    @User() user: UserDocument,
    @Body() createTicketTypeDto: CreateEventInput,
  ) {
    return this.eventService.createEvent(createTicketTypeDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.eventService.findAll({ finishTransaction: true });
  }
  @Get('my-event')
  findAllMyEvent(@User() user: UserEntity) {
    console.log(user?.publicAddress?.toUpperCase());

    return this.eventService.findAll({
      ownerAddress: user?.publicAddress,
    });
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await (await this.eventService.findOneById(id)).populate('tags');
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketTypeDto: UpdateEventInput,
  ) {
    return this.eventService.update(id, updateTicketTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
