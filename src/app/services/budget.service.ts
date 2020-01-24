import { Injectable } from '@angular/core';
import { Budget } from '../models/budget';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {


  formData: Budget;
  constructor(private fireStore: AngularFirestore) { }

  // this is the method we call to retrieve all of the entries for that user
  //we call snapshotchanges because this allows to pull the UID from fireStore
  getUsersWithBudgets() {
    return this.fireStore.collection('budget').snapshotChanges();
  }

}
