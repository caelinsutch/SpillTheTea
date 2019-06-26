import { Injectable } from '@angular/core';
import {User} from 'firebase';
import {Observable} from 'rxjs';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';


@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
      this.afAuth.authState
  }
}
