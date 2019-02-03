import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../../list.model';
import { ListService } from '../../../list.service';

@Component({
  selector: 'app-individual-list',
  templateUrl: './individual-list.component.html',
  styleUrls: ['./individual-list.component.scss']
})
export class IndividualListComponent implements OnInit {
  // lists: List[];
  // @Input() list: List;
  // @Input() id: number;

  constructor(private listService: ListService) { }

  ngOnInit() {
    // this.lists = this.listService.getLists();
    // console.log(this.lists);
    // console.log(this.id);
  }

}
