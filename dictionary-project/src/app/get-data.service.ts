import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  key = '';
  constructor(private http: HttpClient) { }

// NEED TO FIGURE OUT HOW TO TAKE CARE OF PROXY SERVER, OR FIGURE OUT HOW TO HIDE API KEYSS

  getRandomWord() {
    return this.http.get(`https://api.wordnik.com/v4/words.json/randomWord?api_key=${this.key}`);
  }

  getData(word: string): any {
      return this.http.get(`https://api.wordnik.com/v4/word.json/${word}/definitions?api_key=${this.key}`);
  }
}
