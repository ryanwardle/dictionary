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

      this.returnedWord = this.retrieveData.getData(this.submittedWord).subscribe(data => {
        console.log(data);
        this.definition =  data[0][0].text;
        this.partOfSpeech = data[0][0].partOfSpeech;
        // MAY HAVE TO MAKE A DIFFERENT CALL FOR ORIGIN AND SYNONYMS
        const relatedWordsArray = data[1];

        relatedWordsArray.map(obj => {
          if (obj.relationshipType === 'synonym') {
            this.synonyms = obj.words.join(' ');
          }

          if (obj.relationshipType === 'antonym') {
            this.antonyms = obj.words.join(' ');
          }
        });
        this.searchResult = new Word (this.submittedWord, this.definition, this.partOfSpeech, this.antonyms, this.synonyms);
      });
  }


// NEED TO FIGURE OUT HOW TO GET CORRECT FORM OF WORD THEN ADD THAT, MAY NEED TO
// CREATE A SERVICE FOR THAT, WILL NEED TO SEE WHAT NEW API CAN DO.
  onAddWord() {
    this.wordService.addWord(this.searchResult);
  }
}
