import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { RouterModule } from '@angular/router'
import {routes} from './app.routes'
import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsComponent } from './forms/forms.component';
import { FormNewComponent } from './forms/form-new/form-new.component';
import { FieldComponent } from './shared/field/field.component';
import { FocusDirective } from './shared/directives/focus.directive';
import {SurveyService} from "./shared/services/survey.service";
import {SurveysResolver} from "./shared/resolvers/surveys-resolver";
import { FormShowComponent } from './forms/form-show/form-show.component';
import {SurveyResolver} from "./shared/resolvers/survey-resolver";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    FormsComponent,
    FormNewComponent,
    FieldComponent,
    FocusDirective,
    FormShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    Angular2TokenService,
    SurveysResolver,
    SurveyResolver,
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
