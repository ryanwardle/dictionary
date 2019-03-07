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
  searchResult;
  submittedWord;
  returnedWord;
  defintion;
  partOfSpeech;
  origin;
  synonyms;
  addedWord;
  createAddedWord;
  completeAddedWord;

  constructor(private retrieveData: GetDataService,
              private wordService: WordService) { }

  ngOnInit() {
  }

// CAN AUTOMATICALLY REDIRECT TO PAGE IF THE WORD HAS A ROOT, IT WILL SAY "SEE {{ ROOT WORD }}"

// MAY HAVE TO WORK IN ATTRIBUTION TEXT INTO EACH DEFIINTION, OR USE OF APIS
  onSearchWord(event: any) {
    // GETTING VALUE OF SUBMITTED WORD FROM EITHER ENTER OR CLICK EVENT, THEN CALLING API WITH THAT VALUE
      if (event.key === 'Enter') {
        this.submittedWord = event.target.value.toLowerCase();
      } else {
        this.submittedWord = event.target.previousSibling.value.toLowerCase();
      }

      this.returnedWord = this.retrieveData.getData(this.submittedWord).subscribe(data => {
        console.log(data);
        this.defintion =  data[0][0].text;
        this.partOfSpeech = data[0][0].partOfSpeech;
        this.origin = data[1][0];
        // MAY HAVE TO MAKE A DIFFERENT CALL FOR ORIGIN AND SYNONYMS
        const relatedWordsArray = data[2];

        relatedWordsArray.map(obj => {
          if (obj.relationshipType === 'synonym') {
            this.synonyms = obj.words.join(' ');
          }
        });

        this.searchResult = new Word (this.submittedWord, this.defintion, this.partOfSpeech, this.origin, this.synonyms);
          console.log(data);
      });
  }

// NEED TO FIGURE OUT HOW TO GET CORRECT FORM OF WORD THEN ADD THAT, MAY NEED TO
// CREATE A SERVICE FOR THAT, WILL NEED TO SEE WHAT NEW API CAN DO.
  onAddWord(event: any) {
    this.addedWord = event.target.previousSibling.children[0].value;
    this.createAddedWord = this.retrieveData.getData(this.addedWord);
    this.createAddedWord.subscribe((addedWordData: any) => {
      this.completeAddedWord = this.wordService.createWord(addedWordData);
      this.wordService.addWord(this.completeAddedWord);
    });
  }
}
