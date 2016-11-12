import {Question} from './question';

export class Form {
  name: string;
  questions?: Question[];

  constructor(public name: string) {}
}
