import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public Users: User[];
  public myUser = [];
  public photo: SafeResourceUrl;
  constructor(private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.Users = users;
      console.log(`this is my user!!! ${this.Users[0].email}`)

    })
  }


}
