// import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Event } from 'src/events/entities/event.entity';

export type UserDocument = UserDetail & Document;

@Schema({ timestamps: true })
export class UserDetail extends Document {
  identity: string;

  createdAt: Date;

  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserDetail);
