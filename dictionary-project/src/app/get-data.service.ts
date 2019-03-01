import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getRandomWord() {
    return this.http.get(`wordnikApi/v4/words.json/randomWord`);
  }

  getCorrectForm(word: string) {
    return this.http.get(`/api/v1/inflections/en/${word}`);
  }

  getData(word: string): any {
    // Eventualyy will have to handle words that have more than one meaning
      return this.http.get(`/api/v1/entries/en/${word}/regions=us`);
  }
}
