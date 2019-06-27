import {Injectable} from '@angular/core';
import {User} from 'firebase';

import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from 'firebase';
import {Observable, of, Subject} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {UserModel} from '../../_models/user.model';
import {switchMap} from 'rxjs/operators';


@Injectable()
export class AuthService {
    user: Observable<UserModel>;

    constructor(
        private afAuth: AngularFireAuth,
        private afStore: AngularFirestore,
        private router: Router) {
        this.user = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afStore.doc<UserModel>(`users/${user.uid}`).valueChanges()
                } else {
                    return of(null)
                }
            })
        )
    }

    register(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    updateUser(registeredUser: User, user) {
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${registeredUser.uid}`);
        const data: UserModel = {
            uid: registeredUser.uid,
            email: registeredUser.email,
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.username,
            photoUrl: user.photoUrl ? user.photoUrl : null
        };

        return userRef.set(data, { merge: true})
    }

    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['/']);
    }

    get isLoggedIn(): boolean {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        return currentUser !== null;
    }
}
