import { Injectable } from '@angular/core';
import { List } from './list.model';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: List[] = [
    new List(new Word('test', 'just a test', 'noun', 'guatemala', ['exam', 'quiz'])),
    new List(new Word('not test', 'just a test', 'noun', 'guatemala', ['1exam', 'quiz']))
  ];

  constructor() { }

  getLists() {
    return this.lists.slice();
  }
}
