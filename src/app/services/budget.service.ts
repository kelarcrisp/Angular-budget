import { Injectable } from '@angular/core';
import { Budget } from '../models/budget';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  myBudget: Budget;
  constructor() { }
}
