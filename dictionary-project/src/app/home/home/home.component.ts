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

  test() {
    this.getData.getRandomWord()
    .subscribe((data: any) => {

      // NEED TO FIX TO GET PROPER RANDOM NUMBER WITHIN RANGE
      const randomNumber = Math.random() * data.results.length;
      this.randomWord = data.results[randomNumber].word;
      console.log(data);
      console.log(this.randomWord);
    });
  }

  ngOnInit() {
  }

}
