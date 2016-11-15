import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs';
import { Angular2TokenService } from 'angular2-token';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

  constructor(private _http:Http,
  private _tokenService: Angular2TokenService) { }

  searchUser(value):Observable<Response> {
    return this._http
      .post('http://localhost:3000/api/users/search', {user:value})
  }

  signUp(user):Observable<Response> {
    let data = {
      full_name: user.full_name,
      username: user.username,
      email: user.email,
      password: user.passwordGroup.password,
      password_confirmation: user.passwordGroup.passwordConfirmation
    };
    return this._http
      .post(`${environment.API}/auth`, data);
  }

}
