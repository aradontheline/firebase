
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(private toastCtrl:ToastController) {
    console.log('Hello ToastProvider Provider');
  }

  show(message:string,duration: number = 3000){
    return this.toastCtrl
    .create({
      message,
      duration
    }).present();
  }

}
