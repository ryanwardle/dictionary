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
  @Input() listName;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists();
    this.listService.listChanged.subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onDeleteList(index) {
    this.listService.deleteList(index);
    this.lists = this.listService.getLists();
      console.log(this.lists);
  }
}
