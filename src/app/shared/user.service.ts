import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs/index";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = "http://bookstore19.s1610456008.student.kwmhgb.at/api";

  constructor(private http: HttpClient) { }

  getDataOfUser(userId: number): Observable<User> {
    return this.http.get(`${this.api}/user/${userId}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any>{
    return throwError(error);
  }


}
