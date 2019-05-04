import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/order";
import {OrderService} from "../shared/order.service";
import {OrderFactory} from "../shared/order-factory";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  order: Order = OrderFactory.empty();

  constructor(private os: OrderService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    console.log(params);

    this.os.getOrder(params['id']).subscribe(o => {
      this.order=OrderFactory.fromObject(o);
    })

    //mithilfe von getUser User holen und ausgeben
    /*
    console.log(params['user_id']);
    this.os.getUser(params['user_id']).subscribe(user =>{
      this.order['user_id']= OrderFactory.fromObject(user)
      console.log(params['user_id']);
    })*/

  }

}
