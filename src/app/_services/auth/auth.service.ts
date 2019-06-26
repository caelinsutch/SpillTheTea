import { Injectable } from '@angular/core';
import {User} from 'firebase';
import {Observable} from 'rxjs';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';


@Injectable()
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
      this.afAuth.authState.subscribe(user => {
          if (user) {
              this.user = user;
              localStorage.setItem('user', JSON.stringify(this.user));
          } else {
              localStore.setItem('user', null);
          }
      })
  }

  async login(email: string, password: string) {
      try {
          await this.afAuth.auth.signInWithEmailAndPassword(email, password);
          console.log('logged in')
      } catch (e) {
          console.log("Error" + e.message)
      }
  }

    async logout(){
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['admin/login']);
    }

    get isLoggedIn(): boolean {
        const  user  =  JSON.parse(localStorage.getItem('user'));
        return  user  !==  null;
    }
}
