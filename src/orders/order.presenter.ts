import { Asset } from 'src/assets/entities/asset.entity';
import { Order } from './entities/order.entity';
import { AssetPresenter } from 'src/assets/asset.presenter';

export class OrderPresenter {
  constructor(private order: Order & { asset: Asset }) {}

  toJSON() {
    return {
      id: this.order._id,
      asset: new AssetPresenter(this.order.asset).toJSON(),
      shares: this.order.shares,
      partial: this.order.partial,
      price: this.order.price,
      type: this.order.type,
      status: this.order.status,
    };
  }
}
