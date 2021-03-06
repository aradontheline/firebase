import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { ShoppingListProvider } from '../providers/shopping-list/shopping-list';
import { ToastProvider } from '../providers/toast/toast';

import {GoogleMaps} from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListProvider,
    ShoppingListProvider,
    ToastProvider,
    GoogleMaps
  ]
})
export class AppModule {}
