import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Survey} from '../classes/survey';
import {SurveyService} from '../services/survey.service'

@Injectable()
export class SurveyResolver implements Resolve<Survey>{

  constructor(private _surveyService: SurveyService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Survey> {
    return this._surveyService.getSurvey(route.params['id'])
  }

}
