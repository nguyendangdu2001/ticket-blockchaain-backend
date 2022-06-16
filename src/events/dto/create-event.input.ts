import { OmitType } from '@nestjs/mapped-types';
import { Event } from '../entities/event.entity';

class TagEventInput {
  id: string;
  name: string;
  isNew: boolean;
}

export class CreateEventInput extends OmitType(Event, ['ownerAddress']) {
  tags: TagEventInput[];
}
