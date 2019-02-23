import { Injectable, EventEmitter } from '@angular/core';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  word;
  definition;
  partOfSpeech;
  origin;
  synonyms;
  wordInfo;
  wordAdded = new EventEmitter<Word[]>();

  private words: Word[] = [
    new Word('cheese', `a food made from the pressed curds of milk, firm and
    elastic or soft and semi-liquid in texture`, 'noun', `Old English cēse, cȳse, of West Germanic origin;
    related to Dutch kaas and German Käse; from Latin caseus`, ['synonym1', 'synonym2', 'synonym3']),
    new Word('bread', `food made of flour, water, and yeast mixed together and baked`, 'noun',
    `Old English brēad, of Germanic origin; related to Dutch brood and German Brot`, ['synonym5', 'synonym7', 'synonym3'])
  ];

  constructor() { }

  getWords() {
    return this.words.slice();
  }

  createWord(data: any) {
    this.definition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
    this.partOfSpeech = data.results[0].lexicalEntries[0].lexicalCategory;
    this.origin = data.results[0].lexicalEntries[0].entries[0].etymologies[0];

    // NEED TO GET SYNONYMS AND THEN MAKE CLICKABLE SO THAT YOU CAN THEN SEARCH THAT WORD
    this.synonyms = ['synonym-1', 'synonym-2'].join(' ');

    this.word = data.results[0].word;

    // CREATING A NEW WORD, BASED ON RETURNED DATA FROM API CALL
    return new Word (this.word, this.definition, this.partOfSpeech, this.origin, this.synonyms);
  }

  addWord(word: Word) {
    this.words.push(word);
    this.wordAdded.emit(this.words.slice());
  }
}
