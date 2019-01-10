import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  wordData;
  definition: string;

  constructor(private retrieveData: GetDataService) { }

  ngOnInit() {
  }

  onSearchWord(event: any) {
    // console.log(event);
    this.wordData = this.retrieveData.getData(event.target.previousSibling.value);
    // this.definition = this.wordData.results;
    // console.log(this.definition);
   console.log(this.wordData);
  }

}
