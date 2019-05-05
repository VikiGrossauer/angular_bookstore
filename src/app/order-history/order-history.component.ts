import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/order";
import {OrderService} from "../shared/order.service";

@Component({
  selector: 'bs-order-history',
  templateUrl: './order-history.component.html',
  styles: []
})
export class OrderHistoryComponent implements OnInit {
  orders : Order[] = new Array();

  constructor(private os: OrderService) { }

  ngOnInit() {
    this.os.getAll().subscribe(res=> {this.orders = res;
    });
  }

  getSortedOrders() {
    return this.orders.sort((o1, o2) => {
      return +new Date(o2.order_date) - +new Date(o1.order_date);
    })
  }

}
