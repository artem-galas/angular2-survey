import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from 'angular2-token';
import { Router } from '@angular/router'

@Component({
  selector: 'survey-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  constructor(private _tokenService: Angular2TokenService,
              private router: Router) { }

  signOut() {
    this._tokenService.signOut()
      .subscribe(() => this.router.navigate(['/']));
  }
}
