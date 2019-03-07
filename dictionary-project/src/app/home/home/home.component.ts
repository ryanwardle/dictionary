import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { Word } from '../../word.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  wordOfTheDay;
  randomWord;
  toggle = false;
  buttonToggleText = 'More';

  constructor(private getData: GetDataService) { }

  test() {
    this.getData.getRandomWord()
    .subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {

    // WILL NEED TO CHANGE THIS FROM CLICK EVENT TO PUTTING ON A 24HR TIMER, SET TIME OUT FUNCTION?
    // cAN START WORKING ON DOING THIS BY USING A WORD OF THE DAY CALL AND ONCE EVERY 24 HRS
    // Use the date to check if the word should be changed, stack overflow, tab open

    this.getData.getWordOfDay().subscribe((data: any) => {
      console.log(data);
      const word = data.word;
      console.log(word);
      const definition = data.definitions[0].text;
      const partOfSpeech = data.definitions[0].partOfSpeech;
      const origin = data.note;
      console.log(definition);

      // NEED TO FIND SYNONYMS

      this.wordOfTheDay = new Word (word, definition, partOfSpeech, origin, ['', '']);
      console.log(this.wordOfTheDay);
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
