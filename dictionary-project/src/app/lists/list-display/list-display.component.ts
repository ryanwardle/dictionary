import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../list.model';
import { Word } from '../../word.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  words: Word[];
  lists: List[];
  buttonToggleText = 'More';
  toggle = false;
  @Input() listName;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists();
    this.listService.listAdded.subscribe((lists: List[]) => {
      this.lists = lists;
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
