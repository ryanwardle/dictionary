import { Component, OnInit } from '@angular/core';
import { Word } from '../../word.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

// WILL NEED TO SET A TIMER FOR MIDNIGHT TO MAKE AN API CALL TO GET A RANDOM WORD, THEN INSERT INTO WORD
  wordOftheDay = new Word('affable', 'diffusing warmth and friendliness', 'adjective',
  'Old English and Germanic', ['amiable', 'cordial', 'genial']);

  // WILL NEED TO WRTE FUNCTION OR PART OF SPEECH PORTION OF HTML

  constructor() { }

  ngOnInit() {
  }

}
