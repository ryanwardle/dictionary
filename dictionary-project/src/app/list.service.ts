import { Injectable, EventEmitter } from '@angular/core';
import { List } from './list.model';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listAdded = new EventEmitter<List[]>();

  constructor() { }

  private lists: List[] = [];

  addNewList(newList: string) {
    this.lists.push(new List(newList, []));
    this.listAdded.emit(this.lists.slice());
  }

  addWordToList(index: number, word: Word) {
    this.lists[index].words.push(word);
  }

  getLists() {
    return this.lists.slice();
  }
}
