import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/order";
import {OrderFactory} from "../shared/order-factory";
import {OrderService} from "../shared/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'bs-order-edit',
  templateUrl: './order-edit.component.html',
  styles: []
})
export class OrderEditComponent implements OnInit {
  order: Order = OrderFactory.empty();
  stateForm: FormGroup;
  isUpdatingState = false;

  constructor(private os: OrderService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    const params = this.route.snapshot.params;

    if(params['id']){
      this.isUpdatingState = true;
      this.os.getOrder(params['id']).subscribe(o => {
        this.order=o;
        this.initState();
      });
    }
    this.initState();
  }

  initState(){
    this.stateForm = this.fb.group({
      state: this.order['state'],
      comment: this.order['comment']
    })
  }

  submitForm(){
    const order: Order = OrderFactory.fromObject(this.stateForm.value);

    if(this.isUpdatingState){
      this.os.updateState(order).subscribe(res => {
        this.router.navigate(['../../manageOrders'],
          {relativeTo: this.route})
      });
    } else {
      console.log("no update");
    }

  }

  getTime(){
    return new Date();
  }



}
