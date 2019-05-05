import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs/index";
import {Order} from "./order";
import {catchError, retry} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private api = "http://bookstore19.s1610456008.student.kwmhgb.at/api";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Order>>{
    return this.http.get(`${this.api}/orders`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getUser(userId): Observable<Array<Order>>{
    return this.http.get(`${this.api}/orders/${userId}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getOrder(id): Observable<Order>{
    return this.http.get(`${this.api}/order/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  create(order:Order):Observable<any>{
    return this.http.post(`${this.api}/order`, order)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  //update Status + Comment
  updateState(order:Order): Observable<any>{
    return this.http.put(`${this.api}/order/${order.id}`,order)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any>{
    return throwError(error);
  }
}
