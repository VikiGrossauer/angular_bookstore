import {Order} from './order';

export class OrderFactory {

  static empty():Order {
    return new Order(null, new Date(), 0, 0, 0, null, null);
  }

  static fromObject(rawOrder: any): Order{
    return new Order(
      rawOrder.id,
      rawOrder.order_date,
      rawOrder.total_price,
      rawOrder.ust,
      rawOrder.user_id,
      rawOrder.books,
      rawOrder.states
    );
  }
}
