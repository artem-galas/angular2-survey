import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { SignUpRoutes } from './sign-up/sign-up.routes'
import { SignInRoutes } from './sign-in/sign-in.routes'
import { FormsRouter } from './forms/forms.routes'

export const routes: Routes = [
  ...HomeRoutes,
  ...SignUpRoutes,
  ...SignInRoutes,
  ...FormsRouter
];
