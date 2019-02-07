import { Injectable } from '@angular/core';
import { List } from './list.model';
// import { Word } from './word.model';
import { WordService } from './word.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private words: WordService) { }

  private lists: List[] = [
    new List(this.words.getWords())
    // new List(new Word('milk', `an opaque white fluid rich in fat and protein, secreted by
    // female mammals for the nourishment of their young`, 'noun', `Old English milc, milcian, of Germanic origin;
    // related to Dutch melk and German Milch, from an Indo-European root shared by Latin mulgere
    // and Greek amelgein ‘to milk’`, ['synonym1', 'synonym2', 'synonym3']))
  ];

  getLists() {
    // console.log(this.lists.slice());
    return this.lists.slice();
  }
}
