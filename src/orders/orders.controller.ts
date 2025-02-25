import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { OrderService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderPresenter } from './order.presenter';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  async findAll(@Query('walletId') walletId: string) {
    const orders = await this.orderService.findAll({
      walletId,
    });
    return orders.map((order) => new OrderPresenter(order).toJSON());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}
