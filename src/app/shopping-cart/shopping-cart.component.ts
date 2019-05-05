import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {AuthService} from "../shared/authentication.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrderService} from "../shared/order.service";
import {Order} from "../shared/order";
import {OrderFactory} from "../shared/order-factory";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../shared/user";

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: []
})
export class ShoppingCartComponent implements OnInit {
  books : Book[] = new Array();
  order = OrderFactory.empty;
  amountForm: FormGroup[] = [ ];
  user : User;

  constructor(public authService: AuthService,
              private fb:FormBuilder,
              private os: OrderService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.length > 0) {
      console.log("items");
      let parsedBooks = JSON.parse(localStorage.getItem('cart'));
      console.log(parsedBooks);

      for (let i in parsedBooks) {
        if (parsedBooks.hasOwnProperty(i)) {
          this.books.push(parsedBooks[i]);
          console.log(this.books[0].user);
        }
      }
    } else {
      // No items
      console.log("no items in cart");
    }
    this.initAmount();
  }

  initAmount(){
    for (let i = 0; i < this.books.length; i++) {
      this.amountForm[i] = this.fb.group({
        amount: this.books[i]['amount']
      })
    }
  }

  submitForm(i, isbn){
    const amount = this.amountForm[i].value.amount;

    let getBooks = JSON.parse(localStorage.getItem('cart'));
    getBooks[isbn]['amount'] = amount;

    localStorage.setItem('cart', JSON.stringify(getBooks));
  }

  deleteCart(){
    if(confirm('Warenkorb löschen?')){
      localStorage.removeItem('cart');
    }
  }

  orderPrice(){
    let totalPrice = 0;
    for (let i = 0; i < this.books.length; i++){
      totalPrice += this.books[i]['amount'] * this.books[i]['price'];
    }
    return totalPrice+3;
  }

  submitOrder(){
    const storage = JSON.parse(localStorage.getItem('cart'));
    let rawOrder = {
      books: Object.values(storage),
      user_id: Number(localStorage.getItem('userId')),
      states: 'Offen',
      total_price: this.orderPrice(),
      ust: 10
    };
    const order: Order = OrderFactory.fromObject(rawOrder);
    this.os.create(order).subscribe(res => {
      let orderId = res.id;
      /*this.router.navigate(['/cart', order.id],
        {relativeTo: this.route});*/
      this.router.navigate(['./cart/'+orderId]);
    });

    //localStorage.removeItem("cart");
  }
}
