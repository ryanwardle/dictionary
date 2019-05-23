// NEED TO MAKE A LIST MODEL THEN ORGANIZE AND STYLE THE LISTS AND THE LIST DISPLAY,
 // WILL PROBABLY HAVE TO REEVALUATE MY ROUTING

import { Word } from './word.model';

export class List {

  // constructor(public words: Word[]) {
  //   this.words = words;
  // }

  constructor(public name: string, public words: Word[]) {
    this.name = name;
    this.words = words;
  }
}
