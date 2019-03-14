import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { Word } from '../../word.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  wordOfTheDay: Word = new Word ('', '', '', [''], ['']);
  randomWord;
  toggle = false;
  buttonToggleText = 'More';

  constructor(private getData: GetDataService) { }

  // WORK ON WORD OF THE DAY AND THEN GETTING A RANDOM WORD, FIGURE OUT IF BETTER
  // ON HOME OR ON SEARCH PAGE, IF ON HOME, WILL NEED TO TOGGLE TEXT BETWEEN RANDOM AND WORD OF THE DAY

  test() {
    this.getData.getRandomWord()
    .subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {

    this.getData.getWordOfDay().subscribe((data: any) => {
      const word = data.word;
      const definition = data.definitions[0].text;
      const partOfSpeech = data.definitions[0].partOfSpeech;
      const origin = data.note;

      // NEED TO FIND SYNONYMS

      this.wordOfTheDay = new Word (word, definition, partOfSpeech, origin, ['']);
    });
  }


// CONSOLIDATE SEARCH, LISTS AND HOME. USE SERVICE? ALSO MAY NEED TO EDIT HTML WHEN I CHANGE
  buttonToggle() {
    if (this.toggle) {
      this.buttonToggleText = 'More';
      this.toggle = !this.toggle;
    } else {
      this.buttonToggleText = 'Less';
      this.toggle = !this.toggle;
    }
  }

}
