import { forwardRef, Module } from '@nestjs/common';
import { EventsModule } from 'src/events/events.module';
import { TicketTypeModule } from 'src/ticket-type/ticket-type.module';
import { TicketModule } from 'src/ticket/ticket.module';
import { OnChainListenerController } from './on-chain-listener.controller';
import { OnChainListenerService } from './on-chain-listener.service';
// import data from './abi/NFTTicketMarketplace.json';
@Module({
  controllers: [OnChainListenerController],
  providers: [OnChainListenerService],
  imports: [EventsModule, TicketTypeModule, forwardRef(() => TicketModule)],
  exports: [OnChainListenerService],
})
export class OnChainListenerModule {}
