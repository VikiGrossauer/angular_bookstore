import { Component, OnInit } from '@angular/core';
import {OrderService} from "../shared/order.service";
import {Order} from "../shared/order";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shared/authentication.service";
import {OrderFactory} from "../shared/order-factory";

@Component({
  selector: 'bs-order-overview',
  templateUrl: './order-overview.component.html',
  styles: []
})
export class OrderOverviewComponent implements OnInit {
  order: Order = OrderFactory.empty();

  constructor(private os: OrderService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.os.getOrder(params['id']).subscribe(o => {
      this.order=OrderFactory.fromObject(o);
    });

  }

}
