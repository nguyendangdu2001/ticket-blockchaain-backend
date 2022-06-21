import { Body, Controller, Post } from '@nestjs/common';
import { Types } from 'mongoose';
import { EventsService } from 'src/events/events.service';
import { MarketService } from 'src/market/market.service';
import { TicketTypeService } from 'src/ticket-type/ticket-type.service';
import { TicketService } from 'src/ticket/ticket.service';
import { OnChainListenerService } from './on-chain-listener.service';

@Controller('on-chain-listener')
export class OnChainListenerController {
  constructor(
    private readonly onChainListenerService: OnChainListenerService,
    private eventServices: EventsService,
    private ticketTypeService: TicketTypeService,
    private ticketService: TicketService,
    private marketService: MarketService,
  ) {}
  @Post('check')
  async check(@Body() data: { eventName: string; blockNumber: number }) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 1000),
    );
    const blockCheck = await this.onChainListenerService.findOne({
      eventName: data?.eventName,
      blocknumber: data?.blockNumber,
    });
    if (blockCheck) return;
    const events = await this.onChainListenerService.getEventByBlockNumber(
      data?.eventName,
      data?.blockNumber,
    );
    const event = events?.[0];
    const eventType = event?.event;
    const values = event?.returnValues;
    switch (eventType) {
      case 'EventCreated':
        await this.eventServices.update(values?.id, {
          ownerAddress: values?.owner?.toLowerCase(),
          startTime: new Date(Number(values?.startTime)),
          endTime: new Date(Number(values?.endTime)),
          onChainId: values?.onChainId,
          finishTransaction: true,
        });
        break;
      case 'TicketTypeCreated':
        await this.ticketTypeService.update(values?.id, {
          eventOnChainId: values?.eventOnChainId,
          startSellingTime: new Date(Number(values?.startSellingTime)),
          endSellingTime: new Date(Number(values?.endSellingTime)),
          onChainId: values?.onChainId,
          finishTransaction: true,
          totalLimit: values?.totalLimit,
          currentLimit: values?.currentLimit,
          price: values?.price,
          eventId: new Types.ObjectId(values?.eventId),
        });
        break;
      case 'TicketSold':
        const ticketType = await this.ticketTypeService.findOneById(
          values?.ticketTypeId,
        );
        await this.ticketService.create({
          eventOnChainId: values?.eventOnChainId,
          eventId: ticketType?.eventId,
          ticketTypeId: new Types.ObjectId(values?.ticketTypeId),
          ticketTypeOnChainId: values?.ticketTypeOnChainId,
          onChainId: values?.tokenId,
          ownerAddress: values?.ownerAddress?.toLowerCase(),
        });
        if (Number(values?.limitCurrent) !== -1)
          this.ticketTypeService.update(values?.ticketTypeId, {
            currentLimit: Number(values?.limitCurrent),
          });
        break;
      case 'Transfer':
        await this.ticketService.updateOne(
          { onChainId: values?.tokenId },
          { ownerAddress: values?.to?.toLowerCase() },
        );
        break;
      case 'MarketItemCreated':
        const ticket = await this.ticketService.findOne({
          onChainId: values?.tokenId,
        });
        const market = await this.marketService.create({
          price: values?.price,
          seller: values?.seller?.toLowerCase(),
          sold: false,
          tokenId: values?.tokenId,
          onChainId: values?.onChainId,
          eventId: ticket?.eventId,
          ticketTypeId: ticket?.ticketTypeId,
        });
        break;
      case 'MarketItemSold':
        const market2 = await this.marketService.updateOne(
          { onChainId: values?.onChainId },
          {
            sold: true,
          },
        );
        break;
      default:
        break;
    }
  }
}
