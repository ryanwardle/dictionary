import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ListsComponent } from './lists/lists.component';
import { HttpClientModule } from '@angular/common/http';
import { ListDisplayComponent } from './lists/list-display/list-display.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { WordDisplayComponent } from './lists/list-display/word-display/word-display.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'lists', component: ListsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ListsComponent,
    ListDisplayComponent,
    SearchResultComponent,
    WordDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
