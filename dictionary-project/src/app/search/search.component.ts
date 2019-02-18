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
  corretForm;
  correctWord;

  constructor(private retrieveData: GetDataService) { }

  ngOnInit() {
  }

  onSearchWord(event: any) {
    // GETTING VALUE OF SUBMITTED WORD FROM EITHER ENTER OR CLICK EVENT, THEN CALLING API WITH THAT VALUE
      if (event.key === 'Enter') {
        this.submittedWord = event.target.value;
      } else {
        this.submittedWord = event.target.previousSibling.value;
      }

      // FIRST USING LEMMATRON TO GET CORRECT FORM OF THE ENTERED WORD
      // NEED TO FIGURE OUT A WAY TO OPTIMIZE, NOT ALL WORDS WILL SHOW UP I.E. (ATE)
      this.corretForm = this.retrieveData.getCorrectForm(this.submittedWord);
      this.corretForm.subscribe(data => {
        console.log(data.results[0].lexicalEntries[0]);
        this.correctWord = data.results[0].lexicalEntries[0].inflectionOf[0].text;

        this.wordData = this.retrieveData.getData(this.correctWord);

        // USE CORRECT FORM OF WORD FROM LEMMATRON TO GET WORD INFO
          this.wordData.subscribe((correctedWordData: any) => {
          this.definition = correctedWordData.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
          this.partOfSpeech = correctedWordData.results[0].lexicalEntries[0].lexicalCategory;
          this.origin = correctedWordData.results[0].lexicalEntries[0].entries[0].etymologies[0];

          // NEED TO GET SYNONYMS AND THEN MAKE CLICKABLE SO THAT YOU CAN THEN SEARCH THAT WORD
          this.synonyms = ['synonym-1', 'synonym-2'];

          this.word = this.correctWord.toLowerCase();

          // CREATING A NEW WORD, BASED ON RETURNED DATA FROM API CALL
          this.searchResult =  new Word (this.word, this.definition, this.partOfSpeech, this.origin, this.synonyms);
        });

      });
  }
}
