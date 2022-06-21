import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { TicketType } from 'src/ticket-type/entities/ticket-type.entity';

export type MarketDocument = Market & Document;

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class Market {
  @Prop()
  tokenId: string;
  @Prop()
  onChainId: string;
  @Prop()
  seller: string;
  @Prop()
  price: number;
  @Prop()
  sold: boolean;
  @Prop({ type: Types.ObjectId, ref: Event.name })
  eventId?: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: TicketType.name })
  ticketTypeId?: Types.ObjectId;
}

export const MarketSchema = SchemaFactory.createForClass(Market);
MarketSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  ref: Event.name,
});
MarketSchema.virtual('ticketType', {
  localField: 'ticketTypeId',
  foreignField: '_id',
  ref: TicketType.name,
});
