import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  definition;
  sentence;
  origin;
  partOfSpeech;
  synonyms;

  constructor(private http: HttpClient) { }

  getRandomWord() {

    // WILL NEED TO FIGURE THE CORRECT PATH AND THEN FILTER TO GET ONLY ONE WORD...AT RANDOM;
    return this.http.get(`/api/v1/wordlist/en/lexicalcategory/noun`)
    .subscribe((data: any) => {
      console.log(data);
    });
  }

  getData(word: string) {

    // const url = /api/v1/entries/en/;

    // Eventualyy will have to handle words that have more than one meaning
      return this.http.get(`/api/v1/entries/en/${word}`)
      .subscribe((data: any) => {
        // console.log(data);
        this.definition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
        return this.definition;
        // console.log(this.definition);
        // this.sentence = data.results;
        // console.log(this.sentence);
        // this.partOfSpeech = data.results[0].lexicalEntries[0].lexicalCategory;
        // console.log(this.partOfSpeech);
        // this.origin = data.results[0].lexicalEntries[0].entries[0].etymologies[0];
        // console.log(this.origin);
        // this.synonyms = ['synonym-1', 'synonym-2'];
        // return new Word(word, this.definition, this.partOfSpeech, this.origin, this.synonyms);
      });
  }
}
