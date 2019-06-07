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
  uniqueList = true;
  currentLists;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private listService: ListService) { }

  ngOnInit() {
  }

  onCreateNewList(event) {
    this.uniqueList = true;
    if (event.key === 'Enter') {
      this.listName = event.target.value;
    } else {
      this.listName = event.target.previousSibling.value;
    }

// CHECKS FOR DUPLICATE LIST NAME
    this.currentLists = this.listService.getLists();

    this.currentLists.map(e => {
      if (e.name.toLowerCase() === this.listName.toLowerCase()) {
        this.uniqueList = false;
      }
    });

// ADDS LIST ONLY IF NAME IS UNIQUE
    if (this.uniqueList) {
      this.listService.addNewList(this.listName);
    }
  }


  onEditList() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
