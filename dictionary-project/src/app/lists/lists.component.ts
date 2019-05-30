import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  listName: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private listService: ListService) { }

  ngOnInit() {
  }

  onCreateNewList(event) {

    if (event.key === 'Enter') {
      this.listName = event.target.value;
    } else {
      this.listName = event.target.previousSibling.value;
    }
    this.listService.addNewList(this.listName);
  }

  onEditList() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteList() {
    this.router.navigate(['delete'], {relativeTo: this.route});
  }

}
