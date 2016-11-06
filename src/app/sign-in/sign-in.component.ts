import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'survey-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm: FormGroup;
  public formSubmitted: boolean = false;

  constructor(private _fb:FormBuilder) {
    this.signInForm = _fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signIn(form) {
    this.formSubmitted = true;
    if(form.valid) {
      //TODO Call service for auth user
      console.log(form.value)
    }
  }

}
