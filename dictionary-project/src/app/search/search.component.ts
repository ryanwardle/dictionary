import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  test;

  constructor(private retrieveData: GetDataService) { }

  ngOnInit() {
  }

  onSearchWord() {
    this.test = this.retrieveData.getData();
    console.log(this.test);
  }

}
