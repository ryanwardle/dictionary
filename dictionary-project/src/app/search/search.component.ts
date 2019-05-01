import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Word } from '../word.model';
import { WordService } from '../word.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  wordData: any;
  searchResult: Word = new Word ('', '', '', [''], ['']);
  submittedWord;
  wordCheck = -1;
  returnedWord;
  attributionText;
  word;
  definition;
  partOfSpeech;
  antonyms;
  synonyms;

  constructor(private retrieveData: GetDataService,
              private wordService: WordService) { }

  ngOnInit() {
  }

// METHOD THAT GETS WORD DATA AND ORGANIZES INTO WORD MODEL
  getWordData(word): any {
    this.returnedWord = this.retrieveData.getData(word).subscribe(data => {
      this.wordCheck = data[0].length;
      this.attributionText = data[0][0].attributionText;
      this.definition =  data[0][0].text;
      this.partOfSpeech = data[0][0].partOfSpeech;

      const relatedWordsArray = data[1];

      relatedWordsArray.map(obj => {
        if (obj.relationshipType === 'synonym') {
          this.synonyms = obj.words.join(' ');
        }

        if (obj.relationshipType === 'antonym') {
          this.antonyms = obj.words.join(' ');
        }
      });
      this.searchResult = new Word (word, this.definition, this.partOfSpeech, this.antonyms, this.synonyms);
    });
  }

  // GETTING VALUE OF SUBMITTED WORD FROM EITHER ENTER OR CLICK EVENT, THEN CALLING GETWORDDATA();
  onSearchWord(event: any) {
    if (event.key === 'Enter') {
      this.submittedWord = event.target.value.toLowerCase();
    } else {
      this.submittedWord = event.target.previousSibling.value.toLowerCase();
    }

    this.getWordData(this.submittedWord);
  }

// GETS A RANDOM WORD, THEN CALLS GETWORDDATA();
  onRandomWord() {
    let wordObject;
    wordObject = this.retrieveData.getRandomWord();
    wordObject.subscribe(data => {
      this.getWordData(data.word);
    });
  }

// ADDS WORD TO WORD LIST
  onAddWord() {
    console.log(this.wordCheck === undefined);
    if (this.wordCheck !== undefined) {
      this.wordService.addWord(this.searchResult);
    }
  }
}
