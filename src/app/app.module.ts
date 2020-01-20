import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from 'angularfire2/firestore'
//add angularFireStoreAuth here as well
import { UsersService } from './services/users.service'
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
    AngularFirestoreModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
