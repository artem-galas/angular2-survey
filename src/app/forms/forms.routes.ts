import { Route } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormNewComponent } from './form-new/form-new.component'

export const FormsRouter: Route[] = [
  {
    path: 'my-forms',
    component: FormsComponent
  },
  {
    path: 'forms/new',
    component: FormNewComponent
  }
];
