import { PickType } from '@nestjs/swagger';
import { Tag } from '../entities/tag.entity';

export class CreateTagInput extends PickType(Tag, ['name']) {}
