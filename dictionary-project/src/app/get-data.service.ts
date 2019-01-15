import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  definition;

  constructor(private http: HttpClient) { }

  getData(word: string) {
    // const url = '/api/v1/entries/en/';

      return this.http.get(`/api/v1/entries/en/${word}`)
      .subscribe(data => {
        console.log(data);
        this.definition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
        console.log(this.definition);
      });
  }
}
