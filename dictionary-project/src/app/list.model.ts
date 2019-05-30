import { Word } from './word.model';

export class List {

  constructor(public name: string, public words: Word[]) {
    this.name = name;
    this.words = words;
  }
}
