import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Event } from 'src/events/entities/event.entity';

export type TicketTypeDocument = TicketType & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class TicketType {
  @Prop()
  onChainId: string;
  @Prop()
  name: string;
  @Prop()
  desc: string;

  @Prop()
  price: number;

  @Prop()
  startSellingTime: number;

  @Prop()
  endSellingTime: number;

  @Prop()
  currentLimit: number;
  @Prop()
  totalLimit: number;

  @Prop()
  eventId: Types.ObjectId;
  @Prop()
  eventOnChainId: Types.ObjectId;
  @Prop({ default: false })
  finishTransaction?: boolean;
}

export const TicketTypeSchema = SchemaFactory.createForClass(TicketType);
TicketTypeSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  ref: Event.name,
});
