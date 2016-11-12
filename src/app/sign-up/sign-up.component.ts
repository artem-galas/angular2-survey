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

    // this.signUpForm.controls['userName'].valueChanges.debounceTime(500)
    //   .switchMap(value => this._authService.searchUser(value))
    //   .subscribe(res => {
    //     console.log(res)
    //     this.validatorSubject.next({'user-exist': true})
    //   })
  }

  public uniqUser(c: FormControl): any {
    // return new Promise((resolve, reject)=>
    //   this.validatorSubject.subscribe(value=>resolve(value)))
  }

  // public uniqUser(c: FormControl): Observable<any> {
  //   return new Observable((obs:any) => {
  //     c.valueChanges
  //       .debounceTime(500)
  //       .flatMap(value => this._authService.searchUser(value))
  //       .subscribe(res => {
  //           console.log(res);
  //         },
  //         error => {
  //           console.log(`Error message ${error}`);
  //         })
  //   })


    // return this._authService.searchUser(c.value)
    //   .map(res => res.json())
    //   .map(valid => valid ? null : {user: true})
    //   .catch(err => {
    //     console.log(err);
    //     return null;
    //   })


    // return c.valueChanges
    //   .debounceTime(500)
    //   .switchMap(value => this._authService.searchUser(value))
    //   .switchMap(res => {
    //     console.log(res);
    //     return Observable.empty();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     return Observable.empty();
    //   })
  // }

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
