import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'app/services/budget.service';
import { Budget } from 'app/models/budget';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {


  users: Budget[];
  constructor(private service: BudgetService, private fireStore: AngularFirestore, private toastr: ToastrService
  ) { }

  ngOnInit() {
    //to break down whats happening
    // call the getusERS FUNCTION WHICH Retrieves the users from firestore
    //we take that dats and map it into an object so we show only the data matched with that ID
    //making sure the data is in the form of Budget
    this.service.getUsersWithBudgets().subscribe(user => {
      this.users = user.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Budget;
      })
    })
  }

  //we use the formData property from BudgetService to grab the fields and we set them = the properties we pass in from user
  //we make a copy instead of directing changing because the formData is binded in the HTML and would start updating whats in the table at the same time .. which we dont want
  onPut(user: Budget) {
    this.service.formData = { ...user }
  }

  onDelete(id: string) {
    this.fireStore.doc(`budget/${id}`).delete();
    this.toastr.error('Your item has been deleted!')
  }
}
