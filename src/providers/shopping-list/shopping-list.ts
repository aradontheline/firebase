
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Item} from '../../models/item/item.model';

/*
  Generated class for the ShoppingListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingListProvider {

  private shoppingListRef = this.db.list<Item>('shopping-list');

  constructor(private db:AngularFireDatabase) {
    console.log('Hello ShoppingListProvider Provider');
  }
  
  getShoppingList(){
    return this.shoppingListRef;
  }

  addItem(item:Item){
    return this.shoppingListRef.push(item);
  }

  editItem(item:Item){
    return this.shoppingListRef.update(item.key,item);
  }

  removeItem(item:Item){
    return this.shoppingListRef.remove(item.key);
  }


}
