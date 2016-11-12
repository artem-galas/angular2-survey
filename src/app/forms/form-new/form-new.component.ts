import { Component } from '@angular/core';
import { Question } from "../../shared/classes/question";
import { FieldComponent } from './field/field.component';
import { Form } from '../../shared/classes/form';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms"

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

  public form:Form;

  public formModule: FormGroup;

  constructor(private _fb:FormBuilder) {
    this.form = new Form('');
    this.form.questions = this.questions;
    this.buildFom();
  }

  public addQuestion() {
    let question = new Question('Short Answer', '');
    this.questions.push(question);
  }

  public saveForm() {
    console.log(this.questions);
    console.log(this.form);
  }


  // public buildFom() {
  //   this.formModule = this._fb.group({
  //     'name': [''],
  //     'questions': new FormArray([
  //       new FormControl()
  //     ])
  //   })
  // }

  public buildFom() {
    this.formModule = this._fb.group({
      'name': [''],
      'questions': new FormArray([
        new FormControl({
          'text':''
        })
      ])
    })
  }

  // public buildFom() {
  //   this.formModule = this._fb.group({
  //     'form': this._fb.group({
  //       'name': [''],
  //       'questions': new FormArray([
  //         new FormControl({
  //           'question': new FormControl({
  //             'text': '',
  //             'options': new FormArray([
  //               new FormControl({
  //                 'text': ''
  //               })
  //             ])
  //           })
  //         })
  //       ])
  //     })
  //   })
  // }


  public saveForm1(form){
    console.log(form.value);
  }

  public addQuestion1() {
    console.log(this.formModule.get('questions'));
    (this.formModule.get('questions') as FormArray)
      .push(new FormControl(''));
  }
  //
  //
  // public addOption1() {
  //   this.formModule['controls']('user')
  //     .controls('questions')
  //     .get('options')
  //     .push(new FormControl({
  //       'text': ''
  //     }))
  // }

}
