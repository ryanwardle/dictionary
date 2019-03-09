import { Injectable, EventEmitter } from '@angular/core';
import { Word } from './word.model';
import { GetDataService } from './get-data.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  word;
  definition;
  partOfSpeech;
  antonyms;
  synonyms;
  returnedWord;
  result;
  // wordInfo;
  wordAdded = new EventEmitter<Word[]>();

  private words: Word[] = [
    new Word('cheese', `a food made from the pressed curds of milk, firm and
    elastic or soft and semi-liquid in texture`, 'noun', `Old English cēse, cȳse, of West Germanic origin;
    related to Dutch kaas and German Käse; from Latin caseus`, ['synonym1', 'synonym2', 'synonym3']),
    new Word('bread', `food made of flour, water, and yeast mixed together and baked`, 'noun',
    `Old English brēad, of Germanic origin; related to Dutch brood and German Brot`, ['synonym5', 'synonym7', 'synonym3'])
  ];

  constructor(private retrieveData: GetDataService) { }

  getWords() {
    return this.words.slice();
  }

  // NEED TO FIGURE OUT HOW TO GET THIS DATA INTO THE SEARCH COMPONENT
// : Observable<Word>
  createWord(word: string) {
    this.returnedWord = this.retrieveData.getData(word).subscribe(data => {
      console.log(data);
      this.definition =  data[0][0].text;
      this.partOfSpeech = data[0][0].partOfSpeech;
      // MAY HAVE TO MAKE A DIFFERENT CALL FOR ORIGIN AND SYNONYMS
      const relatedWordsArray = data[1];

      relatedWordsArray.map(obj => {
        if (obj.relationshipType === 'synonym') {
          this.synonyms = obj.words.join(' ');
        }

        if (obj.relationshipType === 'antonym') {
          this.antonyms = obj.words.join(' ');
        }
      });
      // this.result = new Word (word, this.definition, this.partOfSpeech, this.antonyms, this.synonyms);
      // console.log(new Word (word, this.definition, this.partOfSpeech, this.antonyms, this.synonyms));
      // return this.result;

      return new Word (word, this.definition, this.partOfSpeech, this.antonyms, this.synonyms);
    });
    // return new Word (word, this.definition, this.partOfSpeech, this.antonyms, this.synonyms);
  }

  addWord(word: Word) {
    this.words.push(word);
    this.wordAdded.emit(this.words.slice());
  }
}
