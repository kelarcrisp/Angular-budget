import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user'

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userCollection: AngularFirestoreCollection<User>
  users: Observable<User[]>;

  constructor(public fireStore: AngularFirestore) {
    //value changes returns our collection as an observable
    this.users = this.fireStore.collection('users').valueChanges();

  }

  getUsers() {
    return this.users;
  }
}


