import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item:Item={
    name:'',
    quantity:undefined,
    price:undefined
  };

  constructor(
    private shopping:ShoppingListProvider,
     public navCtrl: NavController,
      public navParams: NavParams,
      private toast:ToastProvider
      
    ) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item:Item){
    
    this.shopping.editItem(item)
    .then(()=>{
      this.toast.show(`${item.name} saved!`)
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeItem(item:Item){
    this.shopping.removeItem(item)
    .then(()=>{
      this.toast.show(`${item.name} deleted`);
      this.navCtrl.setRoot('HomePage');
    })
  }

}
