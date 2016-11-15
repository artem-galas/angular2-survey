import { Component } from '@angular/core';
import { Question } from "../../shared/classes/question";
import { FieldComponent } from '../../shared/field/field.component';
import { Survey } from '../../shared/classes/survey';
import {SurveyService} from '../../shared/services/survey.service';
import {Router} from '@angular/router';

@Component({
  selector: 'survey-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.scss']
})
export class FormNewComponent {

  public questionsType= [
    {
      type: 'Text',
      subTypes: ['Short Answer','Paragraph']
    },
    {
      type: 'Options',
      subTypes: ['One from list', 'Checkboxes', 'Select box']
    },
    {
      type: 'Date',
      subTypes: ['Date','Time']
    }
  ];

  public initialQuestion = new Question('Short Answer', 'What is?');

  public questions:Question[] = [this.initialQuestion];

  public form:Survey;

  constructor(private _surveyService:SurveyService, private router: Router) {
    this.form = new Survey('');
    this.form.questions = this.questions;
  }

  public addQuestion() {
    let question = new Question('Short Answer', '');
    this.questions.push(question);
  }

  public saveForm() {
    console.log(this.questions);
    console.log(this.form);

    this._surveyService.createSurvey(this.form)
      .subscribe(
        res => {
          this.router.navigate(['/my-forms']);
          console.log(res)
        },
        error=> console.log(error)
      )

  }

}
