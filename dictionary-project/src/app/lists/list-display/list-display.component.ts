import { Component, OnInit } from '@angular/core';
import { List } from '../../list.model';
import { Word } from '../../word.model';
import { ListService } from '../../list.service';
import { WordService } from '../../word.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  words: Word[];
  list: List[];
  buttonToggleText = 'More';
  toggle = false;

  constructor(private listService: ListService,
              private wordService: WordService) { }

  ngOnInit() {
    this.list = this.listService.getLists();
    this.words = this.list[0].words;
    this.wordService.wordAdded.subscribe((words: Word[]) => {
      // ABLE TO ADD WORDS TO LIST BUT ONCE YOU VIEW THE LIST SECTINO AND GO BACK TO SEARCH THE ADDED
      // WORDS ARE NO LONGER BEING ADDED TO THE DOM
      console.log(words);
      this.words = words;
      console.log(this.words);
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
