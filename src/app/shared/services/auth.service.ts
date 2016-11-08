import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private _http:Http) { }

  searchUser(value):Observable<Response> {
    return this._http
      .post('http://localhost:3000/api/users/search', {user:value})
  }

}
