import { Component } from '@angular/core';
import { Question } from "../../shared/classes/question";
import { FieldComponent } from './field/field.component';
import { Form } from '../../shared/classes/form';

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

  public questions:Array<Question>=[this.initialQuestion];

  public form:Form;

  constructor() {
    this.form = new Form('');
    this.form.questions = this.questions;
  }

  public addQuestion() {
    let question = new Question('Short Answer', '');
    this.questions.push(question);
  }

  public saveForm() {
    console.log(this.questions);
    console.log(this.form);
  }

}
