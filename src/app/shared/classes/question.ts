import {Option} from './option';
export class Question {
  id?: number;
  type: string;
  text: string;
  image?: string;
  options?: Option[];
  answer?: any;

  constructor(public type:string,
              public text:string){}
}
