import { Injectable } from '@angular/core';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private words: Word[] = [
    new Word('cheese', `a food made from the pressed curds of milk, firm and
    elastic or soft and semi-liquid in texture`, 'noun', `Old English cēse, cȳse, of West Germanic origin;
    related to Dutch kaas and German Käse; from Latin caseus`, ['synonym1', 'synonym2', 'synonym3']),
    new Word('bread', `food made of flour, water, and yeast mixed together and baked`, 'noun',
    `Old English brēad, of Germanic origin; related to Dutch brood and German Brot`, ['synonym1', 'synonym2', 'synonym3'])
  ];

  constructor() { }

  getWords() {
    // console.log(this.words)
    return this.words.slice();
  }
}
