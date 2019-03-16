import { Injectable, EventEmitter } from '@angular/core';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  word;
  wordAdded = new EventEmitter<Word[]>();

  private words: Word[] = [
    new Word('cheese', `a food made from the pressed curds of milk, firm and
    elastic or soft and semi-liquid in texture`, 'noun', ['antonym5', 'antonym7', 'antonym3'], ['synonym1', 'synonym2', 'synonym3']),
    new Word('bread', `food made of flour, water, and yeast mixed together and baked`, 'noun',
    ['antonym5', 'antonym7', 'antonym3'], ['synonym5', 'synonym7', 'synonym3'])
  ];

  constructor() { }

  getWords() {
    return this.words.slice();
  }

  addWord(word: Word) {
    this.words.push(word);
    this.wordAdded.emit(this.words.slice());
  }
}
