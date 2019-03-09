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
  searchInput;
  searchResult;
  submittedWord;
  returnedWord;
  definition;
  partOfSpeech;
  antonyms;
  synonyms;
  addedWord;
  createAddedWord;
  completeAddedWord;

  constructor(private retrieveData: GetDataService,
              private wordService: WordService) { }

  ngOnInit() {
  }


// MAY HAVE TO WORK IN ATTRIBUTION TEXT INTO EACH DEFIINTION, OR USE OF APIS
  onSearchWord(event: any) {
    // GETTING VALUE OF SUBMITTED WORD FROM EITHER ENTER OR CLICK EVENT, THEN CALLING API WITH THAT VALUE
      if (event.key === 'Enter') {
        this.submittedWord = event.target.value.toLowerCase();
      } else {
        this.submittedWord = event.target.previousSibling.value.toLowerCase();
      }

// HAVE CREATED A METHOD IN WORD SERVICE TO CREAT WORDS AND IT IS USED IN BOTH SEARCHWORD AND ADDWORD,
// NEED TO FIGURE OUT HOW TO GET DATA FROM SERVICE PROPERLY


      // this.searchInput = this.wordService.createWord(this.submittedWord).subscribe(newWord => {
      //   console.log(newWord);
      //   // this.searchResult =  newWord;
      // });

// TRYING TO MAKE SURE THAT I CAN GET DATA FROM SERVICE, MAY HAVE TO LOOK INTO OBSERABLES MORE

      this.searchResult = this.wordService.createWord(this.submittedWord);
      console.log(this.searchResult);
  }

// NEED TO FIGURE OUT HOW TO GET CORRECT FORM OF WORD THEN ADD THAT, MAY NEED TO
// CREATE A SERVICE FOR THAT, WILL NEED TO SEE WHAT NEW API CAN DO.
  onAddWord(event: any) {
    this.addedWord = event.target.previousSibling.children[0].value;
    // this.createAddedWord = this.retrieveData.getData(this.addedWord);
    // this.createAddedWord.subscribe((addedWordData: any) => {
    //   this.completeAddedWord = this.wordService.createWord(addedWordData);
    //   this.wordService.addWord(this.completeAddedWord);
    // });

    this.createAddedWord = this.wordService.createWord(this.addedWord);
    this.wordService.addWord(this.createAddedWord);
  }
}
