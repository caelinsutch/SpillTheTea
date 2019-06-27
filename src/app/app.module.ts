import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AuthService} from './_services/auth/auth.service';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthGuard} from './_guards/auth.guard';

const config = {
  apiKey: "AIzaSyA_qkJVBp3wom-KDmtEEPjIxG1uxCnl9A4",
  authDomain: "spillthetea-83260.firebaseapp.com",
  databaseURL: "https://spillthetea-83260.firebaseio.com",
  projectId: "spillthetea-83260",
  storageBucket: "",
  messagingSenderId: "782068628807",
  appId: "1:782068628807:web:1fa2554ad6947d10"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({

    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
