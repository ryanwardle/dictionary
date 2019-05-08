import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../word.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() searchResult: Word;
  @Input() wordCheck: number;
  @Input() submittedWord: string;
  @Input() attributionText: string;
  @Input() antonymLength: number;
  @Input() synonymLength: number;
  toggle = false;
  buttonToggleText = 'More';

  constructor() { }

  ngOnInit() {
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
