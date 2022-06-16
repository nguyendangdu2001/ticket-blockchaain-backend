// import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document, Types } from 'mongoose';

// import { Event } from 'src/events/entities/event.entity';
export enum Status {
  ACTIVE = 'active',
  AWAY = 'away',
  OFFLINE = 'offline',
}
export type UserDocument = User & Document;
export type UserEntity = User;
@Schema({ _id: false })
export class Google {
  @Prop()
  id: string;

  @Prop()
  email: string;

  @Prop()
  name: string;
}

const GoogleSchema = SchemaFactory.createForClass(Google);
@Schema({ _id: false })
export class Facebook {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;
}
const FacebookSchema = SchemaFactory.createForClass(Facebook);
@Schema({ timestamps: true })
export class User {
  @Prop()
  fullName?: string;

  @Prop()
  publicAddress: string;
  @Prop({ default: () => Math.floor(Math.random() * 1000000)?.toString() })
  nonce?: string;

  @Prop()
  avatar?: string;

  createdAt?: Date;

  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
