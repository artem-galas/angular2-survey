import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {Angular2TokenService} from 'angular2-token';
import {Router} from '@angular/router';

@Component({
  selector: 'survey-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm: FormGroup;
  public formSubmitted: boolean = false;

  constructor(private _fb:FormBuilder,
              private _tokenService:Angular2TokenService,
              private router: Router) {
    this.signInForm = _fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signIn(form) {
    this.formSubmitted = true;
    if(form.valid) {
      this._tokenService.signIn(
        form.value.email,
        form.value.password
      ).subscribe(() => this.router.navigate(['/my-forms']));
    }
  }

}
