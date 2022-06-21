import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { TicketType } from 'src/ticket-type/entities/ticket-type.entity';

export type TicketDocument = Ticket & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Ticket {
  @Prop()
  onChainId: string;
  @Prop()
  ticketTypeId: Types.ObjectId;
  @Prop()
  ticketTypeOnChainId: string;
  @Prop()
  eventId: Types.ObjectId;
  @Prop()
  eventOnChainId: string;
  @Prop()
  ownerAddress: string;
  @Prop({ default: () => Math.floor(Math.random() * 1000000)?.toString() })
  nonce?: string;
  @Prop({ default: false })
  scanned?: boolean;
  event?: Event;
  ticketType?: TicketType;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
TicketSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  ref: Event.name,
});
TicketSchema.virtual('ticketType', {
  localField: 'ticketTypeId',
  foreignField: '_id',
  ref: TicketType.name,
});
