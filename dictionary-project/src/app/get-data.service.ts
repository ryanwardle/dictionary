import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData() {
    const url = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/';

      return this.http.get('/dictionary-api')
      .subscribe(data => {
        console.log(data);
      });
  }
}
