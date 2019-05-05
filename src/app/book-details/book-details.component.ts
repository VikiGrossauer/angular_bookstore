import {Component, OnInit,} from '@angular/core';
import {Book} from "../shared/book";
import {BookStoreService} from "../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BookFactory} from "../shared/book-factory";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book = BookFactory.empty();
  //@Input() book: Book;
  //@Output() showListEvent = new EventEmitter<any>();

  constructor(
    private bs : BookStoreService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) { }

  /*
  showBookList(){
    this.showListEvent.emit();
  }*/

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['isbn']).subscribe(b => {
      this.book=b;
    });
  }

  getRating(num: number){
    return new Array(num);
  }

  removeBook(){
    if(confirm('Buch wirklich löschen?')){
      this.bs.remove(this.book.isbn).subscribe(
        res => this.router.navigate(['../'],
          {relativeTo: this.route})
      );
    }
  }

  addToCart() {
    if(confirm("Buch zum Warenkorb hinzufügen?")){
      let Objt = JSON.parse(localStorage.getItem('cart')) || {};
      let savedBook = this.book;
      savedBook['amount'] = 1;
      Objt[this.book.isbn] = this.book;
      localStorage.setItem("cart", JSON.stringify(Objt));
    }
  }
}
