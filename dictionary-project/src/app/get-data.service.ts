import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getRandomWord() {

    // WILL NEED TO FIGURE THE CORRECT PATH AND THEN FILTER TO GET ONLY ONE WORD...AT RANDOM;
    const lexicalCategories = ['noun', 'verb', 'adjective', 'adverb'];
    const lexicalCategoryNumber = Math.floor(Math.random() * lexicalCategories.length);
    const lexicalCategory = lexicalCategories[lexicalCategoryNumber];

// NEED TO FIGURE OUT DOAMINS
    const domains = ['music', 'politics', 'medicine'];
    const domainsNumber = Math.floor(Math.random() * domains.length);
    const domain = domains[domainsNumber];

    // GOING TO NEED TO THINK OF MORE FILTERS TO GET THE LIST DOWN AND USE ALL 26 LETTERS
    // MAYBE RANDOM PARTOFSPEECH, RANDOM LETTER, RANDOM LENGTH ETC...
    return this.http.get(`/api/v1/wordlist/en/lexicalCategory=${lexicalCategory};regions=us;domains=${domain}`);
  }

  getCorrectForm(word: string) {
    return this.http.get(`/api/v1/inflections/en/${word}`);
  }

  getData(word: string): any {

    // Eventualyy will have to handle words that have more than one meaning
      return this.http.get(`/api/v1/entries/en/${word}/regions=us`);
  }
}
