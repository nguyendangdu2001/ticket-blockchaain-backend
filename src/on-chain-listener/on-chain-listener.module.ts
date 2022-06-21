import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from 'src/events/events.module';
import { MarketModule } from 'src/market/market.module';
import { TicketTypeModule } from 'src/ticket-type/ticket-type.module';
import { TicketModule } from 'src/ticket/ticket.module';
import { BlockCheck, BlockCheckSchema } from './entity/BlockCheck';
import { OnChainListenerController } from './on-chain-listener.controller';
import { OnChainListenerService } from './on-chain-listener.service';
// import data from './abi/NFTTicketMarketplace.json';
@Module({
  controllers: [OnChainListenerController],
  providers: [OnChainListenerService],
  imports: [
    MongooseModule.forFeature([
      { name: BlockCheck.name, schema: BlockCheckSchema },
    ]),
    EventsModule,
    TicketTypeModule,
    forwardRef(() => TicketModule),
    MarketModule,
  ],
  exports: [OnChainListenerService],
})
export class OnChainListenerModule {}
