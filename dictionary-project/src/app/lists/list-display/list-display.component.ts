import { Component, OnInit, Input } from '@angular/core';

// MAY BE ABLE TO DELETE ENTORE LIST MODEL
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
  lists: string[];
  buttonToggleText = 'More';
  toggle = false;
  @Input() listName;

  constructor(private listService: ListService,
              private wordService: WordService) { }

  ngOnInit() {
    this.lists = this.listService.getLists();
    this.listService.listAdded.subscribe((lists: string[]) => {
      this.lists = lists;
    });

    // WILL COME BACK TO THE ADDING WORDS PART BELOW, WILL HAVE TO REDO
    // this.words = this.list[0].words;
    // this.wordService.wordAdded.subscribe((words: Word[]) => {
    //   // ABLE TO ADD WORDS TO LIST BUT ONCE YOU VIEW THE LIST SECTINO AND GO BACK TO SEARCH THE ADDED
    //   // WORDS ARE NO LONGER BEING ADDED TO THE DOM
    //   console.log(words);
    //   this.words = words;
    //   console.log(this.words);
    // });
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
