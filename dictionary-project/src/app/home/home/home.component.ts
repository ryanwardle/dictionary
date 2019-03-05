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
  toggle = false;
  buttonToggleText = 'More';

  // WILL NEED TO WRTE FUNCTION OR PART OF SPEECH PORTION OF HTML

  constructor(private getData: GetDataService) { }


// WILL NEED TO CHANGE THIS FROM CLICK EVENT TO PUTTING ON A 24HR TIMER, SET TIME OUT FUNCTION?
// cAN START WORKING ON DOING THIS BY USING A WORD OF THE DAY CALL AND ONCE EVERY 24 HRS
  test() {
    this.getData.getRandomWord()
    .subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
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
