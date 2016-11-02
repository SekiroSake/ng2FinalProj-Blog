import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private _urlAddress = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http : Http) { }

  getUser(): Observable<User[]> {
    return this._http.get(this._urlAddress)
      .map(res => res.json());
  }

}
