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
  constructor(private listService: ListService) { }

  ngOnInit() {

    this.lists = this.listService.getLists();
    this.words = this.lists[this.index].words;
  }

}
