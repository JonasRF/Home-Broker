import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedArraySubdocument } from 'mongoose';
import * as crypto from 'crypto';

export type WalletDocument = HydratedArraySubdocument<Wallet>;

@Schema({ timestamps: true })
export class Wallet {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
