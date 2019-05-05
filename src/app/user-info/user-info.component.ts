import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../shared/user";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: 'bs-user-info',
  templateUrl: './user-info.component.html',
  styles: []
})
export class UserInfoComponent implements OnInit {

  private user: User = new User(null, 'Loading...', '', 'Loading...', 0, null);
  private userId: number;

  constructor(private us: UserService, private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getCurrentUserId();
    this.us.getDataOfUser(this.userId).subscribe(res => {this.user = res;});
  }

}
