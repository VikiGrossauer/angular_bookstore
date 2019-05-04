import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs/index";
import {User} from "./user";
import {HttpClient} from "selenium-webdriver/http";
import {catchError, retry} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


}
