import { Component, OnInit } from '@angular/core';
// import {Observable} from 'rxjs';
import {User} from './user.model';
import {ActivatedRoute, Route} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users$:User[];
  currentUser:User;
  users_id:number;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      userData => {
        this.users$ = userData;
      },
      err => console.log(err),
      () => console.log('Getting users complete...')
    );

  }
  getUser(user){
    this.currentUser = user;
  }
}
