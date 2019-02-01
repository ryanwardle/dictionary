import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { List } from '../list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
// lists: List[];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCreateNewList() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditList() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteList() {
    this.router.navigate(['delete'], {relativeTo: this.route});
  }

}
