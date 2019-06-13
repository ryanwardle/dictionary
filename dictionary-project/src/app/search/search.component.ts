import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Word } from '../word.model';
import { ListService } from '../list.service';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  wordData: any;
  searchResult = new Word ('', '', '', [''], [''], '');
  test;
  submittedWord;
  wordCheck = -1;
  returnedWord;
  attributionText;
  word;
  definition;
  partOfSpeech;
  antonyms;
  antonymLength = 0;
  synonyms;
  synonymLength = 0;
  error = 0;
  lists;
  clicked = false;
  added = false;
  listName;
  uniqueWord = true;
  selectedList;
  selectedListIndex;
  wordIsRandom = false;


  constructor(private retrieveData: GetDataService,
              private listService: ListService) { }

  ngOnInit() {
  }

  // GETTING VALUE OF SUBMITTED WORD FROM EITHER ENTER OR CLICK EVENT, THEN CALLING GETWORDDATA();
  onSearchWord(event: any) {

    // THIS HIDES THE TEXT THAT TELLS THE LAST WORD ADDED ONCE YOU SEARCH FOR A NEW WORD.
    this.added = false;
    this.clicked = false;

    if (event.key === 'Enter') {
      this.submittedWord = event.target.value.toLowerCase();
    } else {
      this.submittedWord = event.target.previousSibling.value.toLowerCase();
    }

    this.getWordData(this.submittedWord);
// WORD IS IN DATA, BUT CANT ASSIGN IT TO SEARCH RESULT
    // this.retrieveData.getWordData(this.submittedWord).subscribe(data => {
    //     this.searchResult = data;
    //     console.log(this.searchResult);
    //     return this.searchResult;
    // });
  }


// METHOD THAT GETS WORD DATA AND ORGANIZES INTO WORD MODEL
  getWordData(word): any {
    this.returnedWord = this.retrieveData.getData(word).subscribe(data => {
      this.wordCheck = data[0].length;
      this.error = 1;
      // SETS WORD TO BEING UNIQUE, IS CHECKED IN ONSELECTLIST()
      this.uniqueWord = true;

    // FINDS FIRST RETURNED OBJECT THAT RETURNS DEFINITION
      for (let i = 0; i < data[0].length; i++) {
        if (data[0][i].hasOwnProperty('text')) {
          this.attributionText = data[0][i].attributionText;
          this.definition =  data[0][i].text;
          this.partOfSpeech = data[0][i].partOfSpeech;
          break;
        }
      }

      const relatedWordsArray = data[1];

      relatedWordsArray.map(obj => {
        if (obj.relationshipType === 'synonym') {
          this.synonyms = obj.words.join(', ');
          this.synonymLength = this.synonyms.length;
        }

        if (obj.relationshipType === 'antonym') {
          this.antonyms = obj.words.join(', ');
          this.antonymLength = this.antonyms.length;
        }
      });
      this.searchResult = new Word (word, this.definition, this.partOfSpeech, this.antonyms, this.synonyms, this.attributionText);
    },

  error => {
    this.error = error.status;

    // WILL CALL ONRANDOMWORD() UNTIL A WORD RETURNS DATA
      if (this.wordIsRandom && this.error === 404) { this.onRandomWord(); }
  }
    );
  }



// GETS A RANDOM WORD, THEN CALLS GETWORDDATA();
  onRandomWord() {
    // THIS HIDES THE TEXT THAT TELLS THE LAST WORD ADDED ONCE YOU SEARCH FOR A NEW WORD.
    this.added = false;
    this.clicked = false;

    this.wordIsRandom = true;
    let wordObject;
    wordObject = this.retrieveData.getRandomWord();
    wordObject.subscribe(data => {
      this.submittedWord = data.word;
      this.getWordData(this.submittedWord);
    });
  }


  onAddWord() {
    this.clicked = true;
    // ADDS LISTS TO DOM IN UL FORM
    this.lists = this.listService.getLists();
  }


// SELECTS LIST THAT WAS CLICKED ON AND ADDS WORD TO LIST
  onSelectList(event) {
    this.selectedList = event.target.firstChild.data;
    for (let i = 0; i < this.lists.length; i++) {
      if (this.lists[i].name === this.selectedList) {

// CHECK FOR DUPLICATE WORD
        const words = this.lists[i].words;
        words.map(e => {
          if (e.word === this.searchResult.word) {
            this.uniqueWord = false;
          }
        });

// IF WORD IS NOT DUPLICATE, PUSH TO LIST
        if (this.uniqueWord) {
          this.listName = this.lists[i].name;
          this.listService.addWordToList(i, this.searchResult);
        }
        break;
      }
    }

    this.clicked = false;
    this.added = true;
    this.lists = [];
  }
}
