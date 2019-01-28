import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../list.model';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  @Input() list: List;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
