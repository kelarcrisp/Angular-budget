import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      console.log(users)
    })
  }

}
