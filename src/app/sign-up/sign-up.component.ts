import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import {AuthService} from '../shared/services/auth.service'
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'survey-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthService]
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  public formSubmitted: boolean = false;
  public validatorSubject: Subject<any>;

  constructor(private _fb:FormBuilder, private _authService: AuthService) {
    this.signUpForm = _fb.group({
      full_name: ['', Validators.required],
      username: ['', Validators.required],
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
      this._authService.signUp(form.value)
        .subscribe(()=> console.log('created'));

      //TODO Call service for create user
      console.log(form.value);
    }
  }

}
