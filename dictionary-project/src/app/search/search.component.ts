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
  searchResult: Word = new Word ('', '', '', [''], ['']);
  submittedWord;
  returnedWord;
  definition;
  partOfSpeech;
  antonyms;
  synonyms;

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

      this.returnedWord = this.retrieveData.getData(this.submittedWord).subscribe(data => {
        console.log(data);
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
        this.searchResult = new Word (this.submittedWord, this.definition, this.partOfSpeech, this.antonyms, this.synonyms);
      });
  }


  // WORKING ON RANDOM WORD, MAY HAVE TO SEPERATE METHODS, ONE TO FIND THE WORD FROM INPUT AND
  // ANOTHER TO RUN THE WORD, SO THAT WHEN YOU LOOK FOR A RANDOM YOU JUST PASS THE WORD,
  // BECAUSE THERE IS NO EVENT TO PASS

  onRandomWord() {
    let wordObject;
    wordObject = this.retrieveData.getRandomWord();
    wordObject.subscribe(data => {
      console.log(this.onSearchWord(data.word));
      this.searchResult = this.onSearchWord(data.word);
    });
  }

  onAddWord() {
    this.wordService.addWord(this.searchResult);
  }
}
