import { Route } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormNewComponent } from './form-new/form-new.component'
import {SurveysResolver} from '../shared/resolvers/surveys-resolver';
import {FormShowComponent} from './form-show/form-show.component';
import {SurveyResolver} from "../shared/resolvers/survey-resolver";

export const FormsRouter: Route[] = [
  {
    path: 'my-forms',
    component: FormsComponent,
    resolve: {
      surveys: SurveysResolver
    }
  },
  {
    path: 'forms/new',
    component: FormNewComponent
  },
  {
    path: 'forms/:id',
    component: FormShowComponent,
    resolve: {
      survey: SurveyResolver
    }
  }

];
