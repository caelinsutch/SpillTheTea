import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from './post/post.component';
import {IonicModule} from '@ionic/angular';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

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
  declarations: [
      PostComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  exports: [
      PostComponent
  ]
})
export class SharedModule { }
