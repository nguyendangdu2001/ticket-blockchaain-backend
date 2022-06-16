import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MarketDocument = Market & Document;

@Schema({ timestamps: true })
export class Market {
  @Prop()
  tokenId: string;
  @Prop()
  seller: string;
  @Prop()
  price: number;
  @Prop()
  sold: boolean;
}

export const MarketSchema = SchemaFactory.createForClass(Market);
