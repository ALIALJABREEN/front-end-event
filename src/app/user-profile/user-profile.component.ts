import { Component, OnInit } from '@angular/core';
import {User} from '../user/user.model';
import {UserService} from '../user/user.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users_id: number;
  user: User;

  constructor(private userService: UserService,private auth:AuthenticationService) { }

  ngOnInit() {
    this.users_id=this.auth.getUserId();
    this.getUser(this.users_id);
  }

  getUser(users_id:number){
    this.userService.getUser(users_id).subscribe(
      userData => {
        this.user= userData;
      },
      err => console.log(err),
      () => console.log('Getting user Profile complete...')
    );
  }
}
