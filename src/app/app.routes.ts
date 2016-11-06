import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { SignUpRoutes } from './sign-up/sign-up.routes'
import { SignInRoutes } from './sign-in/sign-in.routes'

export const routes: Routes = [
  ...HomeRoutes,
  ...SignUpRoutes,
  ...SignInRoutes
];
