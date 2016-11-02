import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: User[];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUser()
        .subscribe(userData => {
          this.users = userData
        })
  }

}
