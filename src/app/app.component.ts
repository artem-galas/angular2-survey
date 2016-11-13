import { Component } from '@angular/core';
import {FooterComponent} from './shared/footer/footer.component'
import {HeaderComponent} from './shared/header/header.component'
import { Angular2TokenService } from 'angular2-token';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiPath: environment.API
    });
  }
}
