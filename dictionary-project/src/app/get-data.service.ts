import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  key = '56c735eb82fb941fa410001a222052c450245ab2819539b92';

  // searchResult: Word = new Word ('', '', '', [''], [''], '');
  // wordCheck = -1;
  // returnedWord: Observable<any>;
  // attributionText;
  // word;
  // definition;
  // partOfSpeech;
  // antonyms;
  // antonymLength = 0;
  // synonyms;
  // synonymLength = 0;
  // error = 0;
  // lists;
  // clicked = false;
  // selectedList;
  // selectedListIndex;

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

  // METHOD THAT GETS WORD DATA AND ORGANIZES INTO WORD MODEL
  // getWordData(word): Observable<any> {
  //     this.returnedWord = this.getData(word).pipe(map(data => {
  //
  //       this.wordCheck = data[0].length;
  //       this.error = 1;
  //
  //     // FINDS FIRST RETURNED OBJECT THAT RETURNS DEFINITION
  //       for (let i = 0; i < data[0].length; i++) {
  //         if (data[0][i].hasOwnProperty('text')) {
  //           this.attributionText = data[0][i].attributionText;
  //           this.definition =  data[0][i].text;
  //           this.partOfSpeech = data[0][i].partOfSpeech;
  //           break;
  //         }
  //       }
  //
  //
  //       const relatedWordsArray = data[1];
  //
  //       relatedWordsArray.map(obj => {
  //         if (obj.relationshipType === 'synonym') {
  //           this.synonyms = obj.words.join(', ');
  //           this.synonymLength = this.synonyms.length;
  //         }
  //
  //         if (obj.relationshipType === 'antonym') {
  //           this.antonyms = obj.words.join(', ');
  //           this.antonymLength = this.antonyms.length;
  //         }
  //       });
  //       this.searchResult = new Word (word, this.definition, this.partOfSpeech, this.antonyms, this.synonyms, this.attributionText);
  //
  //       return this.searchResult;
  //     },
  //
  //   error => this.error = error.status
  // ));
  //
  //     return this.returnedWord;
  //   }
}
