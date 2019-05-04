import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../shared/order";

@Component({
  selector: 'a.os-order-history-item',
  templateUrl: './order-history-item.component.html',
  styles: []
})
export class OrderHistoryItemComponent {

  @Input() order: Order;

  constructor() { }

}
