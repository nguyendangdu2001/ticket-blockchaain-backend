import { PartialType } from '@nestjs/mapped-types';
import { CreateEventInput } from './create-event.input';

export class UpdateEventInput extends PartialType(CreateEventInput) {}
