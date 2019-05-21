import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { List } from '../list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCreateNewList() {
    // METHOD WILL CREATE NEW LIST TO ADD TO DOM
    // ORDER OF SOLVING PROBELM, IN THIS COMONENT AND OTHERS
    // 1 CLICKING BUTTON WILL CREATE A NEW LIST WITH NAME IN LIST
    // 2 WILL NEED TO STORE ALL THE LISTS IN A SINGLE ARRAY, IT WILL BE AN ARRAY OF ARRAYS OF LISTS
    // 3 WILL NEED TO REWRITE THE CODE FOR HOW THE LISTS ARE DISPLAYED
    // 4 WILL PROBABLY HAVE TO STILL USE SERVICE TO ADD WORDS TO THE LISTS

  }

  onEditList() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteList() {
    this.router.navigate(['delete'], {relativeTo: this.route});
  }

}
