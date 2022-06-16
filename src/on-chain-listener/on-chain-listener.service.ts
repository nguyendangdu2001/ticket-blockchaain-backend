import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { EventsService } from 'src/events/events.service';
import { TicketTypeService } from 'src/ticket-type/ticket-type.service';
import { TicketService } from 'src/ticket/ticket.service';
import Web3 from 'web3';
import { contractData } from './abi/NFTTicketMarketplace';

@Injectable()
export class OnChainListenerService {
  private web3: Web3;
  constructor(
    private eventServices: EventsService,
    private ticketTypeService: TicketTypeService,
    private ticketService: TicketService,
  ) {
    this.web3 = new Web3('http://localhost:8545');
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider('ws://localhost:8545', {
        reconnect: {
          auto: true,
          delay: 5000,
          maxAttempts: 5,
          onTimeout: false,
        },
      }),
    );
    const contract = new web3.eth.Contract(
      contractData.abi as any,
      contractData.address,
    );

    contract.events?.EventCreated().on('data', async function (event) {
      console.log(event); // same results as the optional callback above
      const values = event?.returnValues;
      await eventServices.update(values?.id, {
        ownerAddress: values?.owner?.toLowerCase(),
        startTime: new Date(Number(values?.startTime)),
        endTime: new Date(Number(values?.endTime)),
        onChainId: values?.onChainId,
        finishTransaction: true,
      });
    });
    contract.events?.EventUpdated().on('data', async function (event) {
      console.log(event); // same results as the optional callback above
      const values = event?.returnValues;
      await eventServices.updateOne(
        { onChainId: values?.id },
        {
          startTime: new Date(Number(values?.startTime)),
          endTime: new Date(Number(values?.endTime)),
        },
      );
    });
    contract.events?.EventDeleted().on('data', async function (event) {
      console.log(event); // same results as the optional callback above
      const values = event?.returnValues;
      await eventServices.removeOne({ onChainId: values?.id });
    });
    contract.events?.TicketTypeCreated().on('data', async function (event) {
      console.log(event); // same results as the optional callback above
      // const event = eventServices.findOne({onChainId})
      const values = event?.returnValues;
      await ticketTypeService.update(values?.id, {
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
    });
    // contract.events?.TicketTypeUpdated().on('data', async function (event) {
    //   console.log(event); // same results as the optional callback above
    //   // const event = eventServices.findOne({onChainId})
    //   const values = event?.returnValues;
    //   await ticketTypeService.update(values?.id, {
    //     startSellingTime: new Date(Number(values?.startSellingTime)),
    //     endSellingTime: new Date(Number(values?.endSellingTime)),
    //     totalLimit: values?.totalLimit,
    //     currentLimit: values?.currentLimit,
    //     price: values?.price,
    //   });
    // });
    // contract.events?.TicketTypeDeleted().on('data', async function (event) {
    //   console.log(event); // same results as the optional callback above
    //   const values = event?.returnValues;
    //   await ticketTypeService.removeOne({ onChainId: values?.id });
    // });
    contract.events?.TicketSold().on('data', async function (event) {
      console.log(event); // same results as the optional callback above
      // const event = eventServices.findOne({onChainId})
      const values = event?.returnValues;
      const ticketType = await ticketTypeService.findOneById(
        values?.ticketTypeId,
      );
      await ticketService.create({
        eventOnChainId: values?.eventOnChainId,
        eventId: ticketType?.eventId,
        ticketTypeId: new Types.ObjectId(values?.ticketTypeId),
        ticketTypeOnChainId: values?.ticketTypeOnChainId,
        onChainId: values?.tokenId,
        ownerAddress: values?.ownerAddress?.toLowerCase(),
      });
      if (Number(values?.limitCurrent) !== -1)
        ticketTypeService.update(values?.ticketTypeId, {
          currentLimit: Number(values?.limitCurrent),
        });
    });
    contract.events?.Transfer().on('data', async function (event) {
      console.log(event); // same results as the optional callback above
      // const event = eventServices.findOne({onChainId})
      const values = event?.returnValues;
      await ticketService.updateOne(
        { onChainId: values?.tokenId },
        { ownerAddress: values?.to?.toLowerCase() },
      );
    });
    contract.events?.MarketItemCreated().on('data', async function (event) {
      console.log(event); // same results as the optional callback above
      // const event = eventServices.findOne({onChainId})
      const values = event?.returnValues;
      await ticketService.updateOne(
        { onChainId: values?.tokenId },
        { ownerAddress: values?.to?.toLowerCase() },
      );
    });
  }
  async getOwnerOfTicketNFT(tokenId: string) {
    const data = new this.web3.eth.Contract(
      contractData.abi as any,
      contractData.address,
    ).methods
      .ownerOf(Number(tokenId))
      .call();
    return data;
  }
}
