import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../../list.service';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.scss']
})
export class WordDisplayComponent implements OnInit {
  @Input() index;
  words: [];
  lists;
  buttonToggleText = 'More';
  toggle = false;
  id;
  href;

  constructor(private listService: ListService) { }

  ngOnInit() {

    this.lists = this.listService.getLists();
    this.words = this.lists[this.index].words;
  }

  // NEED TO FIGURE OUT HOW TO CALL BUTTONTOGGLE ON EACH ANCHOR TAG INSTEAD OF CHANGING ALL TEXT

  findButtonId(event) {
    console.log(event);
    this.id = event.target.nextSibling.id;
    this.href = event.target.href;
    if (this.href.match(this.id)) {
      this.buttonToggle();
    }
  }

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
