import { Injectable, EventEmitter } from '@angular/core';
import { List } from './list.model';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listChanged = new EventEmitter<List[]>();

  constructor() { }

  private lists: List[] = [];

  addNewList(newList: string) {
    this.lists.push(new List(newList, []));
    this.listChanged.emit(this.lists.slice());
  }

  addWordToList(index: number, word: Word) {
    this.lists[index].words.push(word);
  }

  deleteList(index) {
    this.lists.splice(index, 1);
  }

  getLists() {
    return this.lists.slice();
  }
}
