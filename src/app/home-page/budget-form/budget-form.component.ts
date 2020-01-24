import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'app/services/budget.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  constructor(private service: BudgetService, private fireStore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  //made the form param nullable incase there is a time it doesnt have any data coming in
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      budget: null,
      budgetLeft: null,
      item: '',
      price: null
    }
  }
  //contains both CREATE AND UPDATE METHODS
  onSubmit(form: NgForm) {
    let data = { ...form.value };
    //this delete property is available to remove ANY property from an object
    //we make a copy of the form value so we dont interfere with the actual form.value.id we check for to decide if we will create a new data entry or just an existing one
    delete data.id;
    if (form.value.id == null)
      this.fireStore.collection('budget').add(data);
    else
      this.fireStore.doc(`budget/${form.value.id}`).update(data)
    this.resetForm(form);
    this.toastr.show('Your item has been added succesfully')
  }

}
