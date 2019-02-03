import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../list.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  lists: List[];
  // word;
  // word = this.lists[0].word.word
  // @Input() list: List;
  // @Input() id: number;


  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists();
    console.log(this.lists);
  }

}
