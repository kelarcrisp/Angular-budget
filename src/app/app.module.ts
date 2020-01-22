import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
//add angularFireStoreAuth here as well
import { UsersService } from './services/users.service'
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../app/services/auth.service';
import { BudgetService } from '../app/services/budget.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'monthly-Budget'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [UsersService, AuthService, BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
