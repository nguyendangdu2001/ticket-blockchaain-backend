import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TagDocument = Tag & Document;

@Schema({ timestamps: true, strict: true })
export class Tag {
  @Prop({
    index: { unique: true, type: 'text' },
    unique: true,
    // trim: true,
    required: true,
  })
  name: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
