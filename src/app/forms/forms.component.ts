import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'survey-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public forms:Array<Object> = [
    {
      title: 'My form 1',
      description: 'My form about me'
    },
    {
      title: 'My form 2',
      description: 'My form about you'
    },
    {
      title: 'My form 3',
      description: 'My form about us'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.forms = this.route.snapshot.data['surveys'];
  }

  public removeForm(form) {
    this.forms.splice(this.forms.indexOf(form), 1);
  }
}
