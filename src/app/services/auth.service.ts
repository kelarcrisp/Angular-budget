import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { User } from '../models/user';
import { AngularFireModule } from '@angular/fire';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigate(['/HomePage'])
    return this.updateUserData(credential.user)

    console.log('You have been successfully logged in!', provider)

  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }
  private updateUserData(user) {
    //sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    //calling set using replaces all existing users but with merge:true it only chnages the users in the payload
    return userRef.set(data, { merge: true });

  }

}