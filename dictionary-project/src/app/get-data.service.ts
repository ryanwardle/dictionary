import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  // NEED TO SWITCH OUT EVERYTHING FROM OXFORD TO WORDNIK, CAN PROBABLY JUST SWITCH OUT IN
   // CONFIG FILE AND NOT EVEN USE OXFORD AT ALL

  getRandomWord() {
    return this.http.get(`http://api.wordnik.com/v4/words.json/randomWord?api_key=YOURKEYHERE`);
  }

  getCorrectForm(word: string) {
    return this.http.get(`/api/v1/inflections/en/${word}`);
  }

  getData(word: string): any {
    // Eventualyy will have to handle words that have more than one meaning
      return this.http.get(`/api/v1/entries/en/${word}/regions=us`);
  }
}
