import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { Tag } from 'src/tags/entities/tag.entity';

export type EventDocument = Event & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Event {
  @Prop()
  name: string;
  @Transform(({ value }) => Number(value))
  @Prop()
  onChainId?: number;

  @Prop()
  ownerAddress: string;

  @Prop()
  desc: string;

  @Prop({ default: false })
  finishTransaction: boolean;

  @Prop()
  img: string;
  @Transform(({ value }) => new Date(Number(value)))
  @Prop()
  startTime: Date;
  @Transform(({ value }) => new Date(Number(value)))
  @Prop()
  endTime: Date;

  @Prop()
  location: [number, number];

  @Prop()
  locationName: string;

  tags: Tag[];

  @Prop({ type: [Types.ObjectId], ref: Tag.name })
  tagIds: Types.ObjectId[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.virtual('tags', {
  foreignField: '_id',
  localField: 'tagIds',
  ref: Tag.name,
});
