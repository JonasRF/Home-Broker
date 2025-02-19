import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './entities/wallet.entity';
import { Model } from 'mongoose';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(@InjectModel(Wallet.name) private walletSchema: Model<Wallet>) {}

  create(createWalletDto: CreateWalletDto) {
    return this.walletSchema.create(createWalletDto);
  }

  findAll() {
    return this.walletSchema.find();
  }

  findOne(id: string) {
    return this.walletSchema.findById(id);
  }
}
