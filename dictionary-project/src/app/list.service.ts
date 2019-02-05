import { Injectable } from '@angular/core';
import { List } from './list.model';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: List[] = [
    new List(new Word('cheese', `a food made from the pressed curds of milk, firm and
    elastic or soft and semi-liquid in texture`, 'noun', `Old English cēse, cȳse, of West Germanic origin;
    related to Dutch kaas and German Käse; from Latin caseus`, ['synonym1', 'synonym2', 'synonym3'])),
    new List(new Word('milk', `an opaque white fluid rich in fat and protein, secreted by
    female mammals for the nourishment of their young`, 'noun', `Old English milc, milcian, of Germanic origin;
    related to Dutch melk and German Milch, from an Indo-European root shared by Latin mulgere
    and Greek amelgein ‘to milk’`, ['synonym1', 'synonym2', 'synonym3']))
  ];

  constructor() { }

  getLists() {
    return this.lists.slice();
  }
}
