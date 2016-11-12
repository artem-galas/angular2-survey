import {Component, OnInit, Input} from '@angular/core';
import {Option} from '../../../shared/classes/option';
import {Question} from '../../../shared/classes/question';

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

  ngOnInit() {
    this.question.options = [new Option('')];
    this.options = this.question.options;
  }

  public options:Option[];

  public addOption() {
    let option = new Option('');
    this.options.push(option);
  }

}
