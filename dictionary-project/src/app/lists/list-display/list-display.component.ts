import { Component, OnInit } from '@angular/core';
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
  list: List[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.list = this.listService.getLists();
    this.words = this.list[0].words;
    console.log(this.words);
  }

}
