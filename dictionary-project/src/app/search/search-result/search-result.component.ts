import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../word.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() searchResult: Word;

  constructor() { }

  ngOnInit() {
  }

}
