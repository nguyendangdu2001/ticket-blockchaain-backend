import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type BlockCheckDocument = BlockCheck & Document;
@Schema({ timestamps: true })
export class BlockCheck {
  @Prop()
  eventName: string;
  @Prop()
  blocknumber: number;
}
export const BlockCheckSchema = SchemaFactory.createForClass(BlockCheck);
