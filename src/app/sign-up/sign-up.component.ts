import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'survey-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  public formSubmitted: boolean;

  constructor(private _fb:FormBuilder) {
    this.signUpForm = _fb.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('.+?@.+?\\..+')]
      ],
      passwordGroup: _fb.group({
        password: ['', [
          Validators.required,
          Validators.minLength(6)]
        ],
        passwordConfirmation: ['']
      }, {validator: this.equalValidator })
    });
  }

  public equalValidator({value}:FormGroup): {[key: string]: boolean} {
    const [first,...rest] = Object.keys(value || {});
    const valid = rest.every(v=>value[v] === value[first]);
    return valid ? null : {equal: true}
  }

  public signUp(form) {
    this.formSubmitted = true;
    if (form.valid) {
      //TODO Call service for create user
      console.log(form.value);
    }
  }

}
