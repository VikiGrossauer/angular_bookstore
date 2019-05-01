import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {AuthService} from "../shared/authentication.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'bs-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: []
})
export class ShoppingCartComponent implements OnInit {
  books : Book[] = new Array();
  amountForm: FormGroup[] = [ ];

  constructor(public authService: AuthService, private fb:FormBuilder) { }

  ngOnInit() {
    if (localStorage.length > 0) {
      console.log("items");
      let parsedBooks = JSON.parse(localStorage.getItem('cart'));
      console.log(parsedBooks);

      for (let i in parsedBooks) {
        if (parsedBooks.hasOwnProperty(i)) {
          this.books.push(parsedBooks[i]);
          console.log(this.books);
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

      return totalPrice+3;
    }
  }
}
