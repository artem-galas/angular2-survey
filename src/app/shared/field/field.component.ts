import {Component, OnInit, Input} from '@angular/core';
import {Option} from '../classes/option';
import {Question} from '../classes/question';

@Component({
  selector: 'survey-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input()
  public type;
  @Input()
  public question: Question;
  @Input()
  public show;

  public options:Option[];

  ngOnInit() {
    if (!this.question.options) {
      this.options = [new Option('')];
    } else {
      this.options = this.question.options;
    }
  }

  public addOption() {
    let option = new Option('');
    this.options.push(option);
    this.question.options = this.options;
  }

}
