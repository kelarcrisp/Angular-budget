import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { UsersService } from './services/users.service'
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../app/services/auth.service';
import { BudgetService } from '../app/services/budget.service';
import { BudgetListComponent } from './home-page/budget-list/budget-list.component';
import { BudgetFormComponent } from './home-page/budget-form/budget-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    BudgetListComponent,
    BudgetFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'monthly-Budget'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [UsersService, AuthService, BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
