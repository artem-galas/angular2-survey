import {Question} from './question';

export class Survey {
  id?: number;
  name: string;
  questions?: Question[];

  constructor(public name: string) {}
}
