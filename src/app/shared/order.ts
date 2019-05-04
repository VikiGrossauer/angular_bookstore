import {Book} from "./book";
import {State} from "./state";

export {Book} from "./book";
export {State} from "./state";

export class Order {
  constructor(public id: number,
              public order_date: Date,
              public total_price: number,
              public ust: number,
              public user_id: number,
              public books: Book[],
              public states: State[]){}
}
