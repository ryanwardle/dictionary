import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../list.service';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.scss']
})
export class WordDisplayComponent implements OnInit {

  words: [];
  lists;
  constructor(private listService: ListService) { }

  ngOnInit() {

    this.lists = this.listService.getLists();

    this.lists.forEach(list => {
      this.words = list.words;
    });
    console.log(this.words);
  }

}
