import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
// import { Word } from '../word.model';
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
  corretForm;
  correctWord;

  constructor(private retrieveData: GetDataService,
              private wordService: WordService) { }

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

          this.searchResult = this.wordService.createWord(correctedWordData);
        });

      });
  }
}
