import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Word } from '../word.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  wordData: any;
  definition;
  origin;
  partOfSpeech;
  synonyms;
  word;
  searchResult;
  submittedWord;

  constructor(private retrieveData: GetDataService) { }

  ngOnInit() {
  }

  onSearchWord(event: any) {
    // GETTING VALUE OF SUBMITTED WORD FROM EITHER ENTER OR CLICK EVENT, THEN CALLING API WITH THAT VALUE
      if (event.key === 'Enter') {
        this.submittedWord = event.target.value;
        this.wordData = this.retrieveData.getData(this.submittedWord);
      } else {
        this.submittedWord = event.target.previousSibling.value;
        this.wordData = this.retrieveData.getData(this.submittedWord);
      }

// CREATING A NEW WORD, BASED ON RETURNED DATA FROM API CALL
      this.wordData.subscribe((data: any) => {
      this.definition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
      this.partOfSpeech = data.results[0].lexicalEntries[0].lexicalCategory;
      this.origin = data.results[0].lexicalEntries[0].entries[0].etymologies[0];
      this.synonyms = ['synonym-1', 'synonym-2'];
      this.word = this.submittedWord.toLowerCase();
      this.searchResult =  new Word (this.word, this.definition, this.partOfSpeech, this.origin, this.synonyms);
    });
  }
}
