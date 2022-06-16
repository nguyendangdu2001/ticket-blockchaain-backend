import { Controller } from '@nestjs/common';
import { OnChainListenerService } from './on-chain-listener.service';

@Controller('on-chain-listener')
export class OnChainListenerController {
  constructor(private readonly onChainListenerService: OnChainListenerService) {}
}
