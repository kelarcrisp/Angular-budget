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
  myUser = [];
  constructor(public fireStore: AngularFirestore) {
    //value changes returns our collection as an observable
    //this method doesnt work for the ID if needed look into 'snapShot'
    this.users = this.fireStore.collection('users').valueChanges();

  }

  getUsers() {
    return this.users;
  }

}


