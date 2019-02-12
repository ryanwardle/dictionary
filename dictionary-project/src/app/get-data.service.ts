import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getRandomWord() {

    // WILL NEED TO FIGURE THE CORRECT PATH AND THEN FILTER TO GET ONLY ONE WORD...AT RANDOM;
    return this.http.get(`/api/v1/wordlist/en/lexicalcategory/noun`)
    .subscribe((data: any) => {
      console.log(data);
    });
  }

  getData(word: string): any {

    // Eventualyy will have to handle words that have more than one meaning
      return this.http.get(`/api/v1/entries/en/${word}`);
  }
}
