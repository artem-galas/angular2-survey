import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Survey} from "../../shared/classes/survey";
import {Question} from "../../shared/classes/question";
import { FieldComponent } from '../../shared/field/field.component';


@Component({
  selector: 'survey-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.scss']
})
export class FormShowComponent {

  public survey: Survey;
  public questions: any[];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.survey = this.route.snapshot.data['survey'];

    console.log(this.survey);
    this.questions = this.survey.questions
  }

  answerForm() {
    console.log('answered');
    console.log(this.questions);
    //TODO add service for answered form
    this.router.navigate(['/my-forms']);
  }

}
