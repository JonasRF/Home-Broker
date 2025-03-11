import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { OrderService } from './orders.service';
import { OrderStatus, OrderType } from './entities/order.entity';

@WebSocketGateway()
export class OrdersGateway {
  //serviço de websockets
  constructor(private orderService: OrderService) {}

  @SubscribeMessage('orders/create')
  async handleMessage(
    client: any,
    payload: {
      walletId: string;
      assetId: string;
      shares: number;
      price: number;
      type: OrderType;
      status: OrderStatus;
    },
  ) {
    const order = await this.orderService.create({
      walletId: payload.walletId,
      assetId: payload.assetId,
      shares: payload.shares,
      price: payload.price,
      type: payload.type,
      status: payload.status,
    });
    return order;
  }
}
