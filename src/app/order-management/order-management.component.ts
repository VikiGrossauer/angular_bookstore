import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/order";
import {OrderService} from "../shared/order.service";

@Component({
  selector: 'bs-order-management',
  templateUrl: './order-management.component.html',
  styles: []
})
export class OrderManagementComponent implements OnInit {
  orders: Order[];

  constructor(private os: OrderService) { }

  ngOnInit() {
    this.os.getAll().subscribe(res=>{this.orders = res});
  }

}
