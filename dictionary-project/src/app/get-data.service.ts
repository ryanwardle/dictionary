import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  key = 's';
  constructor(private http: HttpClient) { }

// NEED TO FIGURE OUT HOW TO TAKE CARE OF PROXY SERVER, OR FIGURE OUT HOW TO HIDE API KEYSS

getWordOfDay() {
  return this.http.get(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${this.key}`);
}

  getRandomWord() {
    return this.http.get(`https://api.wordnik.com/v4/words.json/randomWord?api_key=${this.key}`);
  }

  getData(word: string): Observable<any[]> {
       const defintionAndPart = this.http.get(`https://api.wordnik.com/v4/word.json/${word}/definitions?api_key=${this.key}`);
       const relatedWords = this.http.get(`https://api.wordnik.com/v4/word.json/${word}/relatedWords?api_key=${this.key}`);

       return forkJoin([defintionAndPart, relatedWords]);
  }
}
