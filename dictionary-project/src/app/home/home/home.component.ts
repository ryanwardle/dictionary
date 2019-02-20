import { Component, OnInit } from '@angular/core';
import { Word } from '../../word.model';
import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

// WILL NEED TO SET A TIMER FOR MIDNIGHT TO MAKE AN API CALL TO GET A RANDOM WORD, THEN INSERT INTO WORD
  wordOftheDay = new Word('affable', 'diffusing warmth and friendliness', 'adjective',
  'Old English and Germanic', ['amiable', 'cordial', 'genial']);
  randomWord;

  // WILL NEED TO WRTE FUNCTION OR PART OF SPEECH PORTION OF HTML

  constructor(private getData: GetDataService) { }


// WILL NEED TO CHANGE THIS FROM CLICK EVENT TO PUTTING ON A 24HR TIMER, SET TIME OUT FUNCTION?
  test() {
    this.getData.getRandomWord()
    .subscribe((data: any) => {

//   CREATE RANDOM NUMBER TO GET BASED ON ARRAY RETURNED FROM WORDLIST CALL
      const randomNumber = Math.floor(Math.random() * data.results.length);
      this.randomWord = data.results[randomNumber].word;
      console.log(data);
      console.log(this.randomWord);

      // this.getData.getData(this.randomWord)
      // .subscribe(randomWordData => {
      //   this.definition = correctedWordData.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
      //   this.partOfSpeech = correctedWordData.results[0].lexicalEntries[0].lexicalCategory;
      //   this.origin = correctedWordData.results[0].lexicalEntries[0].entries[0].etymologies[0];
      //
      //   // NEED TO GET SYNONYMS AND THEN MAKE CLICKABLE SO THAT YOU CAN THEN SEARCH THAT WORD
      //   this.synonyms = ['synonym-1', 'synonym-2'];
      //
      //   this.word = this.correctWord.toLowerCase();
      //
      //   // CREATING A NEW WORD, BASED ON RETURNED DATA FROM API CALL
      //   this.searchResult =  new Word (this.word, this.definition, this.partOfSpeech, this.origin, this.synonyms);
      // });
    });
  }

  ngOnInit() {
  }

}
