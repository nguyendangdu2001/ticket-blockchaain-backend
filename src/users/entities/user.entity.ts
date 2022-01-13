// import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { UserDetail } from './userDetail.entity.';
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
export class User extends Document {
  // @Prop({ alias: 'id', type: MongooseSchema.Types.ObjectId })
  // _id?: string;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;
  @Prop()
  fullName?: string;

  @Prop()
  email?: string;

  @Prop()
  phone?: string;
  @Prop()
  www?: string;

  @Prop()
  vertiedAt?: Date;

  @Exclude()
  @Prop({ select: false })
  password?: string;

  // @Field(() => [Post], { description: "user's post", nullable: true })
  // posts?: Post[];

  @Prop()
  avatar: string;

  @Prop()
  ip?: string;

  @Prop()
  device?: string;

  @Prop()
  browser?: string;

  @Prop()
  zalo?: string;

  @Prop()
  facebook?: string;

  @Prop()
  telegram?: string;

  @Prop({ default: false })
  guest?: boolean;

  @Prop({ default: Status.OFFLINE })
  statusChat?: Status;
  @Prop({ default: 0 })
  deviceCount?: number;
  @Prop()
  country?: string;
  @Prop()
  region?: string;
  @Prop()
  timezone?: string;
  @Prop()
  city?: string;
  @Prop()
  os?: string;
  @Prop()
  query?: string;
  @Prop()
  regionName?: string;

  // @Prop({ default: false })
  // verified: boolean;

  @Prop({ type: GoogleSchema })
  google?: Google;
  @Prop({ type: FacebookSchema })
  facebookInfo?: Facebook;
  @Prop()
  uuid?: string;

  @Prop({ type: Types.ObjectId, ref: UserDetail.name })
  userDetail?: Types.ObjectId;

  createdAt?: Date;

  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
