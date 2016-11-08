import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import {AuthService} from '../shared/services/auth.service'
import {Observable} from "rxjs";

@Component({
  selector: 'survey-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthService]
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  public formSubmitted: boolean = false;

  constructor(private _fb:FormBuilder, private _authService: AuthService) {
    this.signUpForm = _fb.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required, this.uniqUser.bind(this)],
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

  public uniqUser(c: FormControl): Observable<any> {
    return c.valueChanges
      .debounceTime(500)
      .switchMap(value => this._authService.searchUser(value))
      .switchMap(res => {
        console.log(res);
        return Observable.empty();
      })
      .catch(err => {
        console.log(err);
        return Observable.empty();
      })
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
