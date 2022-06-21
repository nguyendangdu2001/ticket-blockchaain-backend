import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Types } from 'mongoose';
import { User } from 'src/common/decorators';
import { UserEntity } from 'src/users/entities/user.entity';
import { OnChainListenerService } from 'src/on-chain-listener/on-chain-listener.service';

@Controller('tickets')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,

    private onChainService: OnChainListenerService,
  ) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }
  @Post('scan')
  async scan(
    @Body() data: { ticketId: string; eventId: string; nonce: string },
    @User() user: UserEntity,
  ) {
    const ticket = await this.ticketService.findOneById(data?.ticketId);
    if (ticket.eventId?.toString() !== data?.eventId)
      throw new BadRequestException('Ticket not for this event');
    if (ticket?.nonce !== data?.nonce)
      throw new BadRequestException('Not owner');
    // const owner = await this.onChainService.getOwnerOfTicketNFT(
    //   ticket?.onChainId,
    // );
    // if (user?.publicAddress !== owner)
    //   throw new BadRequestException('Not owner');
    if (ticket?.scanned) throw new BadRequestException('Ticket scanned');
    const newTicket = await (
      await this.ticketService.update(ticket?._id?.toString(), {
        scanned: true,
      })
    ).populate('event ticketType');
    return newTicket;
  }

  @Get('my-ticket')
  findAll(@User() user: UserEntity) {
    return this.ticketService.findAll(
      { ownerAddress: user?.publicAddress },
      undefined,
      undefined,
      undefined,
      'event ticketType',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne({ _id: new Types.ObjectId(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(id);
  }
}
