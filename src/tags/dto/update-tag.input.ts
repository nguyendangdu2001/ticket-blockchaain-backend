import { PartialType } from '@nestjs/mapped-types';
import { CreateTagInput } from './create-tag.input';

export class UpdateTagInput extends PartialType(CreateTagInput) {}
