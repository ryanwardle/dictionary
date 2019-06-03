import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SearchComponent } from './search/search.component';
import { ListsComponent } from './lists/lists.component';
import { ListDisplayComponent } from './lists/list-display/list-display.component';
import { EditListComponent } from './lists/edit-list/edit-list.component';


// WILL NEED TO ADD ID'S TO LISTS BASED ON ORDER OF ARRAY AND THEN ASSIGN TO ROUTE
// IE /LISTS/EDIT/3  WILL NEED TO BE A CHILD OF EDIT COMPONENT/PATH
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent, children: [
    {path: '', component: SearchComponent}
  ]},
  {path: 'lists', component: ListsComponent, children: [
    {path: '', component: ListDisplayComponent}, {path: 'edit', component: EditListComponent}
  ]},
  // May need to add a page not found route
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
