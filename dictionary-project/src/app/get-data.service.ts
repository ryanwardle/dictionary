import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData() {

    const unirest = require('unirest');

    unirest.get('https://wordsapiv1.p.mashape.com/words/soliloquy')
    .header('X-Mashape-Key', 'b01f2965admsh24738d8f208cb66p1ede0ajsn00cb7b07fe51');
  }
}
