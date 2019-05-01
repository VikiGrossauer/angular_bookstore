import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../shared/book";

@Component({
  selector: 'bs-home',
  template: `
   <div class="ui container">
     <h1>Cats and Books</h1>
     <p>Willkommen im Bücherladen rund um das Thema Katzen</p>
     <br/>
     <a routerLink="../books" class="ui red button">
       zur Buchliste
       <i class="right arrow icon"></i>
     </a>
     <br/>
     <br/>
     <bs-search class="column" (bookSelected)="bookSelected($event)"></bs-search>
   </div>
 `,
  styles: []
})
export class HomeComponent {


  constructor(private router: Router, private route: ActivatedRoute){}

  bookSelected(book:Book){
    this.router.navigate(['../books', book.isbn],
      {relativeTo:this.route});
  }
}
