import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../shared/order";

@Component({
  selector: 'a.os-order-management-item',
  templateUrl: './order-management-item.component.html',
  styles: []
})
export class OrderManagementItemComponent {

  @Input() order: Order;

  constructor() { }

}
