import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from "../../../environments/environment";
import {Survey} from "../classes/survey";
import {Observable} from "rxjs";

@Injectable()
export class SurveyService {

  constructor(private _http:Http) { }

  getSurveys(): Observable<Survey[]> {
    return this._http
      .get(`${environment.API}/surveys`)
      .map(res => res.json())
      .catch(error => Observable.of(error))
  }

  getSurvey(id): Observable<Survey> {
    return this._http
      .get(`${environment.API}/surveys/${id}`)
      .map(res => res.json())
      .catch(error => Observable.of(error))
  }

  createSurvey(form): Observable<Survey> {
    let data = {
      survey: form
    }
    return this._http
      .post(`${environment.API}/surveys`, data)
      .map(res => res.json())
      .catch(error => Observable.of(error))
  }
}
